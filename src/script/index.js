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
export function verifyDarkPair(...params){
    if(params[0] !== params[1]){
        let state = true;
        for(let x = 0; x < 2; x++){
            let qt = 0 ;

            for(let y = 0; y < params[2].length; y++){
                if(params[2][y].includes(params[0]) && params[2][y].includes(params[1])){
                    state = false;
                    break;
                }
                else if(params[2][y].includes(params[x])){
                    qt++;
                }
            }

            if((GetGuestList().length % 2) === 1){
                if(((GetGuestList().length - 1) - qt) <= 2){
                    state = false;
                }
            }
            else{
                if(((GetGuestList().length - 1) - qt) <= 1){
                    state = false;
                }
            }
        }
        return state;
    }
    else{
        return false;
    }
}

export function SetDarkPair(guestOne, guestTwo){
    let darkPairList = GetDarkPairs();
    if(verifyDarkPair(guestOne, guestTwo, darkPairList)){
        darkPairList.push([guestOne, guestTwo]);
        sessionStorage.setItem(3, JSON.stringify(darkPairList));

        return true;
    }
    else{
        return false;
    }
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
    console.log(index, guestOne, guestTwo);
    let darkPairList = GetDarkPairs();
    if(GetDarkPair(index).includes(guestOne) && GetDarkPair(index).includes(guestTwo)){ //verificando se o par foi modificado de fato
        return true
    }
    else{
        let previousPair = darkPairList[index];
        darkPairList[index] = ["editing", "editing"]; //removendo o par temporariamente para verificação, salvando o index
        if(verifyDarkPair(guestOne, guestTwo, darkPairList)){
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