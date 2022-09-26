export class User{
    constructor(
        public UserId:number,
        public UserFirstName:string,
        public UserLastName:string,
        public Address:string,
        public MobileNumber:string,
        public IsActive:boolean,
        public EmailID:string
    ){}
    }