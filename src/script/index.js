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

//pairs functions
export function SetPairs(){
    while(JSON.parse(sessionStorage.getItem(2)).length !== GetGuestList().length){
        sessionStorage.setItem(2, '[]');
        for(let x = 0; x < GetGuestList().length; x++){
            let pairsList = JSON.parse(sessionStorage.getItem(2)), randomPair = GetRandomPair(x.toString());

            if(randomPair !== false){
                pairsList.push(randomPair);
            }

            sessionStorage.setItem(2, JSON.stringify(pairsList));
        }
    }
}

function GetRandomPair(a){
    let triedGuests = [];
    while(triedGuests.length !== (GetGuestList().length - 1)){
        let guestTwo = (Math.random() * ((GetGuestList().length - 1) - 0) + 0).toFixed(0);
        if(VerifyPair(a, guestTwo)){
            return [a, guestTwo];
        }
        else if(!triedGuests.includes(guestTwo)){
            triedGuests.push(guestTwo);
        }
    }
    return false;
}

function VerifyPair(a, b){
    if(IsDarkPair(a, b) === false && a !== b && GuestIsAvailabe(b)){
        return true;
    }
    else{
        return false;
    }
}

function GuestIsAvailabe(b){
    let pairsList = GetPairs();
    if(pairsList.length > 0){
        for(let y = 0; y < pairsList.length; y++){
            if(pairsList[y][1].toString() === b){
                return false;
            }
        }
        return true;
    }
    else{
        return true;
    }
}

export function GetPairs(){
    let pairList = JSON.parse(sessionStorage.getItem(2));
    return pairList;
}

export function GetPair(index){
    let pairList = JSON.parse(sessionStorage.getItem(2));
    return pairList[index];
}

//dark pairs functions
export function SetDarkPair(guestOne, guestTwo){
    let darkPairList = GetDarkPairs();
    if(VerifyDarkPair(guestOne, guestTwo)){
        darkPairList.push([guestOne, guestTwo]);
        sessionStorage.setItem(3, JSON.stringify(darkPairList));

        return true;
    }
    else{
        return false;
    }
}

function VerifyDarkPair(a, b){
    if(a !== b){
        if(IsDarkPair(a, b) === false){
            if(AvailabeDarkPair(InDarkPairs(a)) && AvailabeDarkPair(InDarkPairs(b))){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

function IsDarkPair(a, b){
    for(let y = 0; y < GetDarkPairs().length; y++){
        if(GetDarkPairs()[y].includes(a) && GetDarkPairs()[y].includes(b)){
            return true;
        }
    }
    return false;
}

function AvailabeDarkPair(x){
    if((GetGuestList().length % 2) === 1){
        if(((GetGuestList().length - 1) - x) <= 2){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        if(((GetGuestList().length - 1) - x) <= 1){
            return false;
        }
        else{
            return true;
        }
    }
}

function InDarkPairs(a){
    let x = 0;
    for(let y = 0; y < GetDarkPairs().length; y++){
        if(GetDarkPairs()[y].includes(a)){
            x++;
        }
    }
    return x;
}

export function GetDarkPairs(){
    let array = JSON.parse(sessionStorage.getItem(3));
    return array;
}

export function GetDarkPair(index){
    let array = JSON.parse(sessionStorage.getItem(3));
    return array[index];
}

export function EditDarkPair(index, guestOne, guestTwo){
    let darkPairList = GetDarkPairs();
    if(IsDarkPair(guestOne, guestTwo)){ //verificando se o par foi modificado de fato
        return true
    }
    else{
        let previousPair = darkPairList[index];
        darkPairList[index] = ["editing", "editing"]; //removendo o par temporariamente para verificação, salvando o index
        if(VerifyDarkPair(guestOne, guestTwo)){
            darkPairList[index] = [guestOne, guestTwo]; //realocando, caso possível
            sessionStorage.setItem(3, JSON.stringify(darkPairList));
    
            return true;
        }
        else{
            darkPairList[index] = previousPair; //se o par novo não for possível, volta ao antigo
            sessionStorage.setItem(3, JSON.stringify(darkPairList));
            return false;
        }
    }
}

export function DeleteDarkPair(index){
    let array = JSON.parse(sessionStorage.getItem(3));
    array.splice(index, 1);
    sessionStorage.setItem(3, JSON.stringify(array));
}

//guests functions
export function SetGuest(guest, gift, giftPrice){
    if(gift === null){
        gift = "";
    }

    if(giftPrice === null){
        giftPrice = "0";
    }

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
    if(gift === null){
        gift = "";
    }
    
    if(giftPrice === null){
        giftPrice = "0";
    }
    
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