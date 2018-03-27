import { DatabaseRepository } from './database-repository';
import DocumentStore, { QueryOperators, EntitiesCountCallback, IDocumentStore, DatabaseDocument, CreateDatabaseOperation, ConcurrencyException, DocumentConstructor, IRavenObject } from '../../lib/ravendb-nodejs-client/ravendb-node';
import { LoginAttempt } from '../models/LoginAttempt';
var config = require('../config/config');
import * as crypto from "crypto";
import { User } from '../models/User';

export class RavenDbRepository extends DatabaseRepository {
    store: IDocumentStore;
    
    init(url: string) {
        let dbName = config.name;
        this.store = DocumentStore.create(url, dbName);
        this.store.initialize();
        const resolveConstructor = (typeName: string): DocumentConstructor => {

            const classesMap: IRavenObject<DocumentConstructor> = <IRavenObject<DocumentConstructor>>require(`../models/${typeName}`);
            let foundCtor: DocumentConstructor;

            if ((typeName in classesMap) && ('function' === (typeof (foundCtor = classesMap[typeName])))) {
                return foundCtor;
            }
        };
        this.store.conventions.addDocumentInfoResolver({ resolveConstructor });

        const dbDoc: DatabaseDocument = new DatabaseDocument(dbName, {"Raven/DataDir": "test"});        
        this.store.maintenance.server.send(new CreateDatabaseOperation(dbDoc))
        .then(()=>{            
            this.openCallback();
        })
        .catch((err)=>{
            if(err instanceof ConcurrencyException && (<ConcurrencyException>err).message.indexOf('already exists')){
                this.openCallback();
            }else{
                this.errorCallback(err);
            }
                
        });
    }

    

    getLoginAttemptCount(conditions: any, callback: (err: any, count: any) => void): void {
        let session = this.store.openSession();
        
        let query = session.query<LoginAttempt>()
            .waitForNonStaleResults()
            .usingDefaultOperator(QueryOperators.And);
        for (let field in conditions)
            query.whereEquals(field, conditions[field])
        query.count((entity?: number, error?: Error) => {
            callback(error, entity);
        });
    };
    saveLoginAttempt(loginAttempt: LoginAttempt, callback: (err: any, doc: any) => void): void {
        let session = this.store.openSession();
        session.store<LoginAttempt>(loginAttempt)
            .then(() => {
                return session.saveChanges();
            })
            .then(() => {
                callback(null, loginAttempt);
            })
            .catch((err) => {
                callback(err, null);
            });
    };
    async getUser(email:string):Promise<any>{  
        let session = this.store.openSession();
        let user = await session.query<User>({
            collection: 'Users'            
        }).waitForNonStaleResults()
        .whereEquals('email', email)
        .first();  
        if(user)
            user.removeCollectionNameFromId();
        return Promise.resolve(user); 
    };
    async getUserById(id:string) : Promise<any>{  
        let session = this.store.openSession();
        let user:User = await session.load<User>(`Users/${id}`);        
        if(user)
            user.removeCollectionNameFromId();
        return Promise.resolve(user);        
     };
    async saveUser(user:any):Promise<void>{  
        let session = this.store.openSession();
        if(!user.id){
            user.id = 'Users/' + crypto.randomBytes(16).toString('hex');
            //await session.store(user, `Users/${user.id}`);
            await session.store(user);
        }else{
            if(!user.id.startsWith('Users'))
                user.id = `Users/${user.id}`;
            await session.store(user);
        }
        
        await session.saveChanges();
        user.removeCollectionNameFromId();    
     };

     openSession(){
         return this.store.openSession();
     }

}