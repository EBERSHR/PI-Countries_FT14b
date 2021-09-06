import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, onValue, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDb9KpiHgAXMeJt7cgqRZh4FdJzzqHbVeU",
//   authDomain: "homegroup-8c9a0.firebaseapp.com",
//   projectId: "homegroup-8c9a0",
//   storageBucket: "homegroup-8c9a0.appspot.com",
//   messagingSenderId: "792489548393",
//   appId: "1:792489548393:web:ba5df55ef5d98e096ae0f8",
//   measurementId: "G-NW0839H1JT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase();

// const referencia = ref(database, "Inventario")
// onValue(referencia, (snapshot) => {
//   const data = snapshot.val();
//   // updateStarCount(postElement, data);
//   console.log(data);
// } );



// var inv = [        {
//     "id": "1",
//     "descripcion": "COMBO LAGUAN CON PEDESTAL AZUL CIELO",
//     "marca": "CORONA",
//     "presentacion": "COMBO",
//     "costo": " $ 286,143.46 ",
//     "precioventa": " $ 331,000.00 ",
//     "descuento": " $ 340,000.00 ",
//     "color": "AZUL",
//     "categoria": "SANITARIOS"
// },
// {
//     "id": "2",
//     "descripcion": "COMBO MANANTIAL CON PEDESTAL BLANCO",
//     "marca": "CORONA",
//     "presentacion": "COMBO",
//     "costo": " $ 334,862.61 ",
//     "precioventa": " $ 400,000.00 ",
//     "descuento": " $ 390,000.00 ",
//     "color": "BLANCO",
//     "categoria": "SANITARIOS",
//     "notas": "1 UNIDAD EN EXHIBICIÓN TIENDA MILANO"
// },
// {
//     "id": "3",
//     "descripcion": "PARED FACHADA STA. MARIA",
//     "presentacion": "CAJA",
//     "medidaunidad": "30X45 ",
//     "costo": " $ 36,409.43 ",
//     "color": "MATE MULTIcolor",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 9 UNIDADES"
// },
// {
//     "id": "4",
//     "descripcion": "PORCELANATO ATLANTA ",
//     "marca": "CORONA",
//     "presentacion": "CAJA",
//     "medidaunidad": "56.6X56.6 ",
//     "costo": " $ 60,370.00 ",
//     "color": "MARFIL",
//     "categoria": "CERAMICOS",
//     "notas": "X ENTREGAR F 0425 + 28 PEGA PORC + LECH X5 BEIGE CORONA"
// },
// {
//     "id": "5",
//     "descripcion": "MEGAPEGA CERAMICO INTERIOR",
//     "marca": "MEGAPEGA",
//     "presentacion": "BULTO 25K",
//     "costo": " $ 11,540.00 ",
//     "color": "GRIS",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "6",
//     "descripcion": "CONcolor PORCELANATO - LECHADA",
//     "marca": "CORONA",
//     "presentacion": "CAJA 5K",
//     "costo": " $ 19,664.00 ",
//     "color": "BLANCO ANTIGUO",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "7",
//     "descripcion": "CONcolor PORCELANATO - LECHADA",
//     "marca": "CORONA",
//     "presentacion": "CAJA 5K",
//     "costo": " $ 19,664.00 ",
//     "color": "GRIS CLARO",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "8",
//     "descripcion": "CONcolor PORCELANATO - LECHADA",
//     "marca": "CORONA",
//     "presentacion": "CAJA 5K",
//     "costo": " $ 19,664.00 ",
//     "color": "BEIGE",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "9",
//     "descripcion": "CONcolor PORCELANATO - LECHADA",
//     "marca": "CORONA",
//     "presentacion": "CAJA 5K",
//     "costo": " $ 19,664.00 ",
//     "color": "SUPER BLANCO",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "10",
//     "descripcion": "CONcolor JE ANTIHONGOS - LECHADA",
//     "marca": "CONcolor",
//     "presentacion": "CAJA 2K",
//     "costo": " $ 9,160.00 ",
//     "color": "SUPER BLANCO",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "11",
//     "descripcion": "CONcolor PORCELANATO - LECHADA",
//     "marca": "CONcolor",
//     "presentacion": "CAJA 2K",
//     "costo": " $ 9,160.00 ",
//     "color": "BEIGE",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "12",
//     "descripcion": "PEGAcolor CERÁMICO",
//     "marca": "PEGAcolor",
//     "presentacion": "BULTO 25K",
//     "costo": " $ 19,096.00 ",
//     "color": "GRIS",
//     "categoria": "CONSUMIBLES",
//     "notas": "12 para Luisa para exhibición"
// },
// {
//     "id": "13",
//     "descripcion": "ALBACETE OCRE",
//     "marca": "STN",
//     "presentacion": "CAJA DE 12 UNIDADES",
//     "medidaunidad": "25X50",
//     "piezascaja": "12",
//     "mxcaja": "0.125",
//     "MTS2/CAJA": "1.5",
//     "color": "OCRE",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 8 UNIDADES"
// },
// {
//     "id": "14",
//     "descripcion": "BRID DARK",
//     "marca": "VALENTIA",
//     "presentacion": "CAJA DE 8 UNIDADES",
//     "medidaunidad": "30X55X.95",
//     "piezascaja": "8",
//     "mxcaja": "0.165",
//     "MTS2/CAJA": "1.32",
//     "color": "LADRILLO OSCURO",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "15",
//     "descripcion": "BRID RED",
//     "marca": "VALENTIA",
//     "presentacion": "CAJA DE 8 UNIDADES",
//     "medidaunidad": "30X55X.95",
//     "piezascaja": "8",
//     "mxcaja": "0.165",
//     "MTS2/CAJA": "1.32",
//     "color": "LADRILLO",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 5 UNIDADES"
// },
// {
//     "id": "16",
//     "descripcion": "BRID WHITE",
//     "marca": "VALENTIA",
//     "presentacion": "CAJA DE 8 UNIDADES",
//     "medidaunidad": "30X55X.95",
//     "piezascaja": "8",
//     "mxcaja": "0.165",
//     "MTS2/CAJA": "1.32",
//     "color": "LADRILLO CLARO",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "17",
//     "descripcion": "CRONOS ZIGZAG",
//     "presentacion": "CAJA DE 8 UNIDADES",
//     "medidaunidad": "30X60X.92",
//     "piezascaja": "8",
//     "mxcaja": "0.18",
//     "MTS2/CAJA": "1.44",
//     "color": "GRIS",
//     "categoria": "CARAMICOS",
//     "notas": "MAS UNA CAJA EXHIBICIÓN"
// },
// {
//     "id": "18",
//     "descripcion": "CUENCA STONE",
//     "marca": "STN",
//     "presentacion": "CAJA DE 12 UNIDADES",
//     "medidaunidad": "25X50",
//     "piezascaja": "12",
//     "mxcaja": "0.125",
//     "MTS2/CAJA": "1.5",
//     "color": "LADRILLO CLARO",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 5 UNIDADES"
// },
// {
//     "id": "19",
//     "descripcion": "LAJA MULTIcolor",
//     "marca": "SNT",
//     "presentacion": "CAJA DE 12 UNIDADES",
//     "medidaunidad": "25X50",
//     "piezascaja": "12",
//     "mxcaja": "0.125",
//     "MTS2/CAJA": "1.5",
//     "color": "MULTIcolor",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 5 UNIDADES --- DOS ROTAS"
// },
// {
//     "id": "20",
//     "descripcion": "LAJA RUSH",
//     "marca": "STN",
//     "presentacion": "CAJA DE 12 UNIDADES",
//     "medidaunidad": "25X50",
//     "piezascaja": "12",
//     "mxcaja": "0.125",
//     "MTS2/CAJA": "1.5",
//     "color": "LADRILLO CLARO",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 7 UNIDADES"
// },
// {
//     "id": "21",
//     "descripcion": "TESTACCIO NATURALE",
//     "marca": "VALENTIA",
//     "presentacion": "CAJA DE 8 UNIDADES",
//     "medidaunidad": "30X58.5X.95",
//     "piezascaja": "8",
//     "mxcaja": "0.175",
//     "MTS2/CAJA": "1.4",
//     "color": "LADRILLO CLARO",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 3 UNIDADES"
// },
// {
//     "id": "22",
//     "descripcion": "TESTACCIO ROSSO",
//     "marca": "VALENTIA",
//     "presentacion": "CAJA DE 8 UNIDADES",
//     "medidaunidad": "30X58.5X.95",
//     "piezascaja": "8",
//     "mxcaja": "0.175",
//     "MTS2/CAJA": "1.4",
//     "color": "LADRILLO OSCURO",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 3 UNIDADES"
// },
// {
//     "id": "23",
//     "descripcion": "TESTACCIO SABIA",
//     "marca": "VALENTIA",
//     "presentacion": "CAJA DE 8 UNIDADES",
//     "medidaunidad": "30X58.5X.95",
//     "piezascaja": "8",
//     "mxcaja": "0.175",
//     "MTS2/CAJA": "1.4",
//     "color": "LADRILLO CLARO",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 3 UNIDADES"
// },
// {
//     "id": "24",
//     "descripcion": "OASIS GRANADA",
//     "marca": "SAVANE CERÁMICA",
//     "presentacion": "CAJA DE 9 UNIDADES",
//     "medidaunidad": "31X54",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 2 UNIDADES"
// },
// {
//     "id": "25",
//     "descripcion": "PEGANTE PORCELANATO",
//     "marca": "DEL CONSTRUCTOR",
//     "presentacion": "BULTO 25K",
//     "costo": " $ 13,500.00 ",
//     "color": "GRIS",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "26",
//     "descripcion": "ESPONJA ESPUMA",
//     "marca": "GENÉRICO",
//     "presentacion": "UNIDAD",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "27",
//     "descripcion": "ESTOPA",
//     "marca": "GENÉRICO",
//     "presentacion": "UNIDAD",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "28",
//     "descripcion": "PEGANTE CERÁMICO EXTERIOR",
//     "marca": "GOLDEN PLUS",
//     "presentacion": "BULTO 25K",
//     "costo": " $ 12,900.00 ",
//     "color": "GRIS",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "29",
//     "descripcion": "PEGANTE PORCELANATO",
//     "marca": "GOLDEN PLUS",
//     "presentacion": "BULTO 25K",
//     "color": "GRIS",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "30",
//     "descripcion": "PEGANTE CERÁMICO INTERIOR",
//     "marca": "GOLDEN PLUS",
//     "presentacion": "BULTO 25K",
//     "MTS2/CAJA": "90",
//     "costo": " $ 7,200.00 ",
//     "color": "GRIS",
//     "categoria": "CONSUMIBLES",
//     "notas": "REVISAR REMISION 0882 CON LUISA SE SACARON 45",
//     "REMISIÓN": "17/07-0154",
//     "cantidad": "2"
// },
// {
//     "id": "31",
//     "descripcion": "DEL CONSTRUCTOR - LECHADA",
//     "marca": "DEL CONSTRUCTOR",
//     "presentacion": "BOLSA 2K",
//     "color": "BEIGE",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "5"
// },
// {
//     "id": "32",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 5K",
//     "color": "BLANCO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "21"
// },
// {
//     "id": "33",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 5K",
//     "color": "GRIS OSCURO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "3"
// },
// {
//     "id": "34",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 5K",
//     "color": "GRIS NEVADO",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "35",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 5K",
//     "color": "TABACO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "2"
// },
// {
//     "id": "36",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 5K",
//     "color": "LADRILLO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "4"
// },
// {
//     "id": "37",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 5K",
//     "color": "NEGRO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "3"
// },
// {
//     "id": "38",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 2K",
//     "color": "GRIS OSCURO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "5"
// },
// {
//     "id": "39",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 2K",
//     "color": "BLANCO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "25"
// },
// {
//     "id": "40",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 2K",
//     "color": "CHOCOLATE",
//     "categoria": "CONSUMIBLES",
//     "REMISIÓN": "17/07-0883",
//     "cantidad": "12"
// },
// {
//     "id": "41",
//     "descripcion": "DEL CONSTRUCTOR - LECHADA",
//     "marca": "DEL CONSTRUCTOR",
//     "presentacion": "BOLSA 2K",
//     "color": "GRIS CLARO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "13"
// },
// {
//     "id": "42",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 2K",
//     "color": "LADRILLO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "8"
// },
// {
//     "id": "43",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 2K",
//     "color": "TABACO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "14"
// },
// {
//     "id": "44",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 2K",
//     "color": "NEGRO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "22"
// },
// {
//     "id": "45",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 5K",
//     "color": "GRIS CLARO",
//     "categoria": "CONSUMIBLES",
//     "REMISIÓN": "17/070885",
//     "cantidad": "3"
// },
// {
//     "id": "46",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 5K",
//     "color": "CHOCOLATE",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "4"
// },
// {
//     "id": "47",
//     "descripcion": "PEGANTE CERÁMICO ",
//     "marca": "DEL CONSTRUCTOR",
//     "presentacion": "BULTO 25K",
//     "color": "GRIS",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "48",
//     "descripcion": "ZEUS NATURAL/CALIBREZ",
//     "marca": "CERÁMICA SCOP",
//     "presentacion": "CAJA DE 9 UNIDADES",
//     "medidaunidad": "51X51",
//     "color": "GRIS",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "49",
//     "descripcion": "SEPARADORES",
//     "marca": "GENÉRICO",
//     "presentacion": "BOLSA ",
//     "medidaunidad": "3MM",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "50",
//     "descripcion": "SEPARADORES",
//     "marca": "GENÉRICO",
//     "presentacion": "BOLSA",
//     "medidaunidad": "2MM",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "51",
//     "descripcion": "LISTON MULATA",
//     "marca": "CORONA",
//     "presentacion": "CAJA DE 23 UNIDADES",
//     "medidaunidad": "15X45X1",
//     "color": "CAFÉ",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "52",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 2K",
//     "color": "GRIS CLARO",
//     "categoria": "CONSUMIBLES",
//     "REMISIÓN": "17/07-0885",
//     "cantidad": "17"
// },
// {
//     "id": "53",
//     "descripcion": "CONcolor PORCELANATO - LECHADA",
//     "marca": "CORONA",
//     "presentacion": "CAJA 2K",
//     "color": "GRIS CEMENTO",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "54",
//     "descripcion": "DEL CONSTRUCTOR - LECHADA",
//     "marca": "DEL CONSTRUCTOR",
//     "presentacion": "BOLSA 5K",
//     "color": "CHOCOLATE",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "3"
// },
// {
//     "id": "55",
//     "descripcion": "DEL CONSTRUCTOR - LECHADA",
//     "marca": "DEL CONSTRUCTOR",
//     "presentacion": "BOLSA 5K",
//     "color": "GRIS CLARO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "7"
// },
// {
//     "id": "56",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 5K",
//     "color": "BEIGE",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "5"
// },
// {
//     "id": "57",
//     "descripcion": "DEL CONSTRUCTOR - LECHADA",
//     "marca": "DEL CONSTRUCTOR",
//     "presentacion": "BOLSA 2K",
//     "color": "GRIS NEVADO",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "12"
// },
// {
//     "id": "58",
//     "descripcion": "DEL CONSTRUCTOR - LECHADA",
//     "marca": "DEL CONSTRUCTOR",
//     "presentacion": "BOLSA 2K",
//     "color": "BLANCO",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "59",
//     "descripcion": "DEL CONSTRUCTOR - LECHADA",
//     "marca": "DEL CONSTRUCTOR",
//     "presentacion": "BOLSA 2K",
//     "color": "CHOCOLATE",
//     "categoria": "CONSUMIBLES",
//     "cantidad": "12"
// },
// {
//     "id": "60",
//     "descripcion": "DEL CONSTRUCTOR - LECHADA",
//     "marca": "DEL CONSTRUCTOR",
//     "presentacion": "BOLSA 2K",
//     "color": "GRIS OSCURO",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "61",
//     "descripcion": "MURAL FRUTAL",
//     "marca": "CORONA",
//     "presentacion": "CAJA DE 2 UNIDADES",
//     "medidaunidad": "25X47X.72",
//     "color": "MULTIcolor",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "62",
//     "descripcion": "LISTON SALUT",
//     "marca": "CORONA",
//     "presentacion": "CAJA DE 17 UNIDADES",
//     "medidaunidad": "13.5X43X.79",
//     "color": "MULTIcolor",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "63",
//     "descripcion": "LISTON AGUA CLARA",
//     "marca": "CORONA",
//     "presentacion": "CAJA DE 17 UNIDADES",
//     "medidaunidad": "13.5X43X.79",
//     "color": "AZUL",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "64",
//     "descripcion": "BASE DECORADA AXIS",
//     "marca": "CORONA",
//     "presentacion": "CAJA DE 10 UNIDADES",
//     "medidaunidad": "30X45X.79",
//     "color": "MULTIcolor",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "65",
//     "descripcion": "LISTON AMAPOLA",
//     "marca": "CORONA",
//     "presentacion": "UNIDAD",
//     "medidaunidad": "15X45X.8",
//     "color": "MULTIcolor",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "66",
//     "descripcion": "LISTON MARACAIBO",
//     "marca": "CORONA",
//     "presentacion": "CAJA DE 20 UNIDADES",
//     "medidaunidad": "15X45X1",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "67",
//     "descripcion": "LISTON ESPARTA",
//     "marca": "CORONA",
//     "presentacion": "CAJA DE 20 UNIDADES",
//     "medidaunidad": "15X45X1",
//     "color": "MULTIcolor",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 9 UNIDADES + 16 BEIGE"
// },
// {
//     "id": "68",
//     "descripcion": "LISTON MONTECARLO",
//     "marca": "CORONA",
//     "presentacion": "CAJA DE 20 UNIDADES",
//     "medidaunidad": "15X45X1",
//     "color": "MULTIcolor",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 8 UNIDADES"
// },
// {
//     "id": "69",
//     "descripcion": "BASE DECORADA CAPUCHINO",
//     "marca": "CORONA",
//     "presentacion": "UNIDAD",
//     "medidaunidad": "30X60X.88",
//     "color": "BEIGE",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "70",
//     "descripcion": "MURAL COLONNA",
//     "marca": "CORONA",
//     "presentacion": "UNIDAD",
//     "medidaunidad": "30X60X.88",
//     "color": "MULTIcolor",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "71",
//     "descripcion": "BASE DECORADA CHIPRE",
//     "marca": "CORONA",
//     "presentacion": "UNIDAD",
//     "medidaunidad": "20.5X60X1",
//     "color": "NEGRO",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "72",
//     "descripcion": "BASE DECORADA DOMINICA",
//     "marca": "CORONA",
//     "presentacion": "UNIDAD",
//     "medidaunidad": "30X60X.92",
//     "color": "MULTIcolor",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 2 UNIDADES"
// },
// {
//     "id": "73",
//     "descripcion": "MURAL CAZORLA",
//     "marca": "CORONA",
//     "presentacion": "UNIDAD ",
//     "medidaunidad": "30X60X.92",
//     "color": "MULTIcolor",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "74",
//     "descripcion": "BASE DECORADA COFFE TIME",
//     "marca": "CORONA",
//     "presentacion": "UNIDAD",
//     "medidaunidad": "30X60X,88",
//     "color": "NEGRO",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "75",
//     "descripcion": "BASE DECORADA BROOKLYN",
//     "marca": "CORONA",
//     "presentacion": "CAJA DE 6 UNIDADES",
//     "medidaunidad": "30X60X.92",
//     "color": "NEGRO",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "76",
//     "descripcion": "BASE DECORADA VERANO",
//     "marca": "CORONA",
//     "presentacion": "CAJA DE 6 UNIDADES",
//     "color": "MULTIcolor",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "77",
//     "descripcion": "BALDOZA CERÁMICA ESMALTADA",
//     "marca": "EURO CERÁMICA",
//     "presentacion": "CAJA DE 8 UNIDADES",
//     "medidaunidad": "32.3X56",
//     "color": "BLANCO",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "78",
//     "descripcion": "CONcolor PORCELANATO - LECHADA",
//     "marca": "CORONA",
//     "presentacion": "CAJA 2K",
//     "color": "BLANCO ANTIGUO",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "79",
//     "descripcion": "CONcolor PORCELANATO - LECHADA",
//     "marca": "CORONA",
//     "presentacion": "CAJA 2K",
//     "color": "GRIS CLARO",
//     "categoria": "CONSUMIBLES",
//     "REMISIÓN": "1707-0881",
//     "cantidad": "2"
// },
// {
//     "id": "80",
//     "descripcion": "CONcolor PORCELANATO - LECHADA",
//     "marca": "CORONA",
//     "presentacion": "CAJA 5K",
//     "costo": " $ 19,664.00 ",
//     "color": "TABACO",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "81",
//     "descripcion": "BASE DECORADA CHIPRE",
//     "marca": "CORONA",
//     "presentacion": "CAJA DE 9 UNIDADES",
//     "medidaunidad": "20.5X60X1",
//     "color": "TAUPE",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 5 UNIDADES"
// },
// {
//     "id": "82",
//     "descripcion": "OASIS CRETA",
//     "marca": "SAVANE CERÁMICA",
//     "presentacion": "CAJA DE 9 UNIDADES",
//     "medidaunidad": "31X54",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 1 UNIDAD"
// },
// {
//     "id": "83",
//     "descripcion": "OASIS NAVARRA",
//     "marca": "SAVANE CERÁMICA",
//     "presentacion": "CAJA DE 9 UNIDADES",
//     "medidaunidad": "31X54",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "84",
//     "descripcion": "PRISMA CARRACA",
//     "marca": "SAVANE CERÁMICA",
//     "presentacion": "CAJA DE 9 UNIDADES",
//     "medidaunidad": "31X54",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "85",
//     "descripcion": "PRISMA CIANITA",
//     "marca": "SAVANE CERÁMICA",
//     "presentacion": "CAJA DE 9 UNIDADES",
//     "medidaunidad": "31X54",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "86",
//     "descripcion": "OASIS VIENA",
//     "marca": "SAVANE CERÁMICA",
//     "presentacion": "CAJA DE 9 UNIDADES",
//     "medidaunidad": "31X54",
//     "categoria": "CERAMICOS"
// },
// {
//     "id": "87",
//     "descripcion": "OASIS TROIA",
//     "marca": "SAVANE CERÁMICA",
//     "presentacion": "CAJA DE 9 UNIDADES",
//     "medidaunidad": "31X54",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 1 UNIDAD"
// },
// {
//     "id": "88",
//     "descripcion": "OASIS SEVILLA",
//     "marca": "SAVANE CERÁMICA",
//     "presentacion": "CAJA DE 9 UNIDADES",
//     "medidaunidad": "31X54",
//     "costo": " $ 37,000.00 ",
//     "categoria": "CERAMICOS",
//     "notas": "MAS 1 UNIDAD"
// },
// {
//     "id": "89",
//     "descripcion": "CONcolor PORCELANATO - LECHADA",
//     "marca": "CORONA",
//     "presentacion": "CAJA 5K",
//     "costo": " $ 19,664.00 ",
//     "color": "CHOCOLATE",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "90",
//     "descripcion": "MEGAPEGA PORCELANATO INTERIOR",
//     "marca": "MEGAPEGA",
//     "presentacion": "BULTO 25K",
//     "color": "GRIS",
//     "categoria": "CONSUMIBLES"
// },
// {
//     "id": "91",
//     "descripcion": "FACHADA PETRA GRAFITO MATE",
//     "marca": "PALO ROSA",
//     "presentacion": "MTR",
//     "medidaunidad": "34X50",
//     "piezascaja": "6 UNIDADES X CAJA",
//     "mxcaja": "1.02",
//     "costo": " $ 41,899.90 ",
//     "precioventa": " $ 55,900.00 ",
//     "descuento": " $ 54,000.00 ",
//     "notas": "más 4 unidades JuanPa partió dos unidades"
// },
// {
//     "id": "92",
//     "descripcion": "ORDINO MIX UNICO",
//     "marca": "PALO ROSA",
//     "presentacion": "UND",
//     "medidaunidad": "34X50",
//     "piezascaja": "6 UNIDADES X CAJA",
//     "mxcaja": "1.02",
//     "costo": " $ 41,899.90 ",
//     "precioventa": " $ 55,900.00 ",
//     "descuento": " $ 54,900.00 "
// },
// {
//     "id": "93",
//     "descripcion": "FACHADA ANDRES NEGRO",
//     "marca": "PALO ROSA",
//     "presentacion": "UND",
//     "medidaunidad": "34X50",
//     "piezascaja": "6 UNIDADES X CAJA",
//     "mxcaja": "1.02",
//     "costo": " $ 41,899.90 ",
//     "precioventa": " $ 55,900.00 ",
//     "descuento": " $ 54,900.00 ",
//     "notas": "SE PRESTARON POR ORDEN DEL JEFE 3 CAJAS A SICHAR"
// },
// {
//     "id": "94",
//     "descripcion": "FACHADA ANDRES BLANCO",
//     "marca": "PALO ROSA",
//     "presentacion": "UND",
//     "medidaunidad": "34X50",
//     "piezascaja": "6 UNIDADES X CAJA",
//     "mxcaja": "1.02",
//     "costo": " $ 41,899.90 ",
//     "precioventa": " $ 55,900.00 ",
//     "descuento": " $ 54,900.00 "
// },
// {
//     "id": "95",
//     "descripcion": "PARED BOTANICOCIMENTO",
//     "marca": "MEGAGRESS",
//     "presentacion": "UNIDAD",
//     "medidaunidad": "45X90",
//     "piezascaja": "UNIDAD",
//     "mxcaja": "0.4",
//     "costo": " $ 17,910.54 ",
//     "precioventa": " $ -   ",
//     "descuento": " $ -   ",
//     "notas": "1 UNIDAD EN CADA TIENDA, 1 EN BODEGA"
// },
// {
//     "id": "96",
//     "descripcion": "PARED PERLATO",
//     "marca": "MEGAGRESS",
//     "presentacion": "UNIDAD",
//     "medidaunidad": "45X90",
//     "piezascaja": "UNIDAD",
//     "mxcaja": "0.4",
//     "costo": " $ 17,910.54 ",
//     "precioventa": " $ -   ",
//     "descuento": " $ -   "
// },
// {
//     "id": "97",
//     "descripcion": "PARED OXFORD",
//     "marca": "MEGAGRESS",
//     "presentacion": "UNIDAD",
//     "medidaunidad": "45X90",
//     "piezascaja": "UNIDAD",
//     "mxcaja": "0.4",
//     "costo": " $ 17,910.54 ",
//     "precioventa": " $ -   ",
//     "descuento": " $ -   "
// },
// {
//     "id": "98",
//     "descripcion": "UNI PARED LEXUS",
//     "marca": "MEGAGRESS",
//     "presentacion": "UNIDAD",
//     "medidaunidad": "45X90",
//     "piezascaja": "UNIDAD",
//     "mxcaja": "0.4",
//     "costo": " $ 17,910.54 ",
//     "precioventa": " $ -   ",
//     "descuento": " $ -   "
// },
// {
//     "id": "99",
//     "descripcion": "UNI PARED LOFT",
//     "marca": "MEGAGRESS",
//     "presentacion": "UNIDAD",
//     "medidaunidad": "45X90",
//     "piezascaja": "UNIDAD",
//     "mxcaja": "0.4",
//     "costo": " $ 17,910.54 ",
//     "precioventa": " $ -   ",
//     "descuento": " $ -   "
// },
// {
//     "id": "100",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 2K",
//     "color": "AZUL CLARO",
//     "cantidad": "5"
// },
// {
//     "id": "101",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 1K",
//     "color": "BEIGE",
//     "cantidad": "8"
// },
// {
//     "id": "102",
//     "descripcion": "DURAcolor - LECHADA",
//     "marca": "DURAcolor",
//     "presentacion": "BOLSA 1K",
//     "color": "BLANCO",
//     "cantidad": "6"
// },
// {
//     "id": "103",
//     "descripcion": "PEGA DE INTERIOR ",
//     "marca": "HOME GRUPO",
//     "presentacion": "BULTO 25K",
//     "color": "GRIS",
//     "cantidad": "387"
// }
// ]

// function writeUserData() {
//   const db = getDatabase();

//     inv.forEach(element => {
//       const { id, descripcion, marca, presentacion, color, medidaunidad, piezascaja, mxcaja, costo, precioventa, descuento, notas, imagen, cantidad } = element;
//       console.log( id, descripcion, marca, presentacion, color, medidaunidad, piezascaja, mxcaja, costo, precioventa, descuento, notas, imagen, cantidad );



      




//       set(ref(db, 'Inventario/' + id), {
//         id: id,
//         descripcion: descripcion ? descripcion : "XXXXXXXXXX",
//         marca: marca ? marca : "XXXXXXXXXX",
//         presentacion: presentacion ? presentacion : "XXXXXXXXXX", 
//         color: color ? color : "XXXXXXXXXX", 
//         medidaunidad: medidaunidad ? medidaunidad : "XXXXXXXXXX", 
//         piezascaja: piezascaja ? piezascaja : "XXXXXXXXXX", 
//         mxcaja: mxcaja ? mxcaja : "XXXXXXXXXX", 
//         costo: costo ? costo : 0.00, 
//         precioventa: precioventa ? precioventa : 0.00, 
//         descuento: descuento ? descuento : 0.00, 
//         notas: notas ? notas : "XXXXXXXXXX",
//         imagen: imagen ? imagen : "homegroup.png",
//         cantidad: cantidad > 0 ? cantidad : 0
//       });
//     })


// }

// writeUserData();

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
