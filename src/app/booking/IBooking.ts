export interface IBooking{
    id:String,
    to:String,
    from:String,
    cabin:String,
    depart:String,
    trip:String,
    passenger:String
    
}

export interface IAmount{
    id:String,
    bookingsId:String,
    amount:String,
}

export interface IPayment{

}