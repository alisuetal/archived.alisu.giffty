//initiating the local DB
if(sessionStorage.getItem(0) === null){
    sessionStorage.setItem(0, 0); //setting the price to 0
}
if(sessionStorage.getItem(1) === null){
    sessionStorage.setItem(1, '[]'); //list of guests
}
if(sessionStorage.getItem(2) === null){
    sessionStorage.setItem(2, '[]'); //lists of pairs
}
if(sessionStorage.getItem(3) === null){
    sessionStorage.setItem(3, '[]'); //lists of dark pairs
}

//dark pairs functions
export function SetDarkPair(guestOne, guestTwo){
    let array = JSON.parse(sessionStorage.getItem(3));
    array.push([guestOne, guestTwo]);
    sessionStorage.setItem(3, JSON.stringify(array));
}

export function GetDarkPairs(){
    let array = JSON.parse(sessionStorage.getItem(3));
    return array;
}

export function GetDarkPair(index){
    let array = JSON.parse(sessionStorage.getItem(3));
    return array[index];
}

export function RemoveDarkPair(index){
    let array = JSON.parse(sessionStorage.getItem(3));
    array.splice(index, 1);
    sessionStorage.setItem(3, JSON.stringify(array));
}

//guests functions
export function SetGuest(guest, gift, giftPrice){
    let addGuest = [guest, gift, giftPrice];
    let guestList = JSON.parse(sessionStorage.getItem(1));
    guestList.push(addGuest);

    sessionStorage.setItem(1, JSON.stringify(guestList));
}

export function GetGuestList(){
    let guestList = JSON.parse(sessionStorage.getItem(1));
    return guestList;
}

export function GetGuest(index){
    let guestList = JSON.parse(sessionStorage.getItem(1));
    return guestList[index];
}

export function EditGuest(index, guest, gift, giftPrice){
    let guestList = JSON.parse(sessionStorage.getItem(1));
    guestList[index] = [guest, gift, giftPrice];

    sessionStorage.setItem(1, JSON.stringify(guestList));
}

export function DeleteGuest(index){
    let guestList = JSON.parse(sessionStorage.getItem(1));
    guestList.splice(index, 1);

    sessionStorage.setItem(1, JSON.stringify(guestList));
}

//gift price functions
export function SetPrice(price){
    sessionStorage.setItem(0, price);
}

export function GetPrice(){
    return sessionStorage.getItem(0);
}