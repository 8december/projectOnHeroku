var NodeRSA = require('node-rsa');
var key = new NodeRSA();

var keyData = '-----BEGIN PRIVATE KEY-----\n'+'PFJTQUtleVZhbHVlPjxNb2R1bHVzPjFvRUl3cmsrY1lDayt4b3BnYTBxM3c5K0l1UWlVZllSZ3dWS1A5dHpOL003WDFnK0NWREJnelExdjVqKzgydGtYYnNpQ2RWc3VoNFdiYWNteUM4Rlgybk51QWVwenhybUtvNEp2OTFYMGc1SnRGZzd5NzNIYlhpcWpVVW1jd1MwZ2dRdGh2bnNZcTBuYkFId0NSSkMxakhIMVRObDFIOVhsVEJpRzVweFVCVT08L01vZHVsdXM+PEV4cG9uZW50PkFRQUI8L0V4cG9uZW50PjwvUlNBS2V5VmFsdWU+\n'+'-----END PRIVATE KEY-----';

key.importKey(keyData, 'pkcs8');

let sec = `{
  "Version": "1.01",
  "TranDtls": {
    "TaxSch": "GST",
    "SupTyp": "B2B",
    "RegRev": "Y",
    "EcmGstin": null,
    "IgstOnIntra": "N"
  },
  "DocDtls": {
    "Typ": "INV",
    "No": "DOC22/001",
    "Dt": "15/08/2020"
  },
  "SellerDtls": {
    "Gstin": "09AACCK6999B1Z6",
    "LglNm": "NIC company pvt ltd",
    "TrdNm": "NIC Industries",
    "Addr1": "5th block, kuvempu layout",
    "Addr2": "kuvempu layout",
    "Loc": "GANDHINAGAR",
    "Pin": 243122,
    "Stcd": "09",
    "Ph": "9000000000",
    "Em": "abc@gmail.com"
  },
  "BuyerDtls": {
    "Gstin": "29AWGPV7107B1Z1",
    "LglNm": "XYZ company pvt ltd",
    "TrdNm": "XYZ Industries",
    "Pos": "12",
    "Addr1": "7th block, kuvempu layout",
    "Addr2": "kuvempu layout",
    "Loc": "GANDHINAGAR",
    "Pin": 562160,
    "Stcd": "29",
    "Ph": "91111111111",
    "Em": "xyz@yahoo.com"
  },
  "DispDtls": {
    "Nm": "ABC company pvt ltd",
    "Addr1": "7th block, kuvempu layout",
    "Addr2": "kuvempu layout",
    "Loc": "Banagalore",
    "Pin": 562160,
    "Stcd": "29"
  },
  "ShipDtls": {
    "Gstin": "29AWGPV7107B1Z1",
    "LglNm": "CBE company pvt ltd",
    "TrdNm": "kuvempu layout",
    "Addr1": "7th block, kuvempu layout",
    "Addr2": "kuvempu layout",
    "Loc": "Banagalore",
    "Pin": 562160,
    "Stcd": "29"
  },
  "ItemList": [
    {
      "SlNo": "1",
      "PrdDesc": "Rice",
      "IsServc": "N",
      "HsnCd": "1001",
      "Barcde": "123456",
      "Qty": 100.345,
      "FreeQty": 10,
      "Unit": "BAG",
      "UnitPrice": 99.545,
      "TotAmt": 9988.84,
      "Discount": 10,
      "PreTaxVal": 1,
      "AssAmt": 9978.84,
      "GstRt": 12.0,
      "IgstAmt": 1197.46,
      "CgstAmt": 0,
      "SgstAmt": 0,
      "CesRt": 5,
      "CesAmt": 498.94,
      "CesNonAdvlAmt": 10,
      "StateCesRt": 12,
      "StateCesAmt": 1197.46,
      "StateCesNonAdvlAmt": 5,
      "OthChrg": 10,
      "TotItemVal": 12897.7,
      "OrdLineRef": "3256",
      "OrgCntry": "AG",
      "PrdSlNo": "12345",
      "BchDtls": {
        "Nm": "123456",
        "ExpDt": "01/08/2020",
        "WrDt": "01/09/2020"
      },
      "AttribDtls": [
        {
          "Nm": "Rice",
          "Val": "10000"
        }
      ]
    }
  ],
  "ValDtls": {
    "AssVal": 9978.84,
    "CgstVal": 0,
    "SgstVal": 0,
    "IgstVal": 1197.46,
    "CesVal": 508.94,
    "StCesVal": 1202.46,
    "Discount": 10,
    "OthChrg": 20,
    "RndOffAmt": 0.3,
    "TotInvVal": 12908,
    "TotInvValFc": 12897.7
  },
  "PayDtls": {
    "Nm": "ABCDE",
    "AccDet": "5697389713210",
    "Mode": "Cash",
    "FinInsBr": "SBIN11000",
    "PayTerm": "100",
    "PayInstr": "Gift",
    "CrTrn": "test",
    "DirDr": "test",
    "CrDay": 100,
    "PaidAmt": 10000,
    "PaymtDue": 5000
  },
  "RefDtls": {
    "InvRm": "TEST",
    "DocPerdDtls": {
      "InvStDt": "01/08/2020",
      "InvEndDt": "01/09/2020"
    },
    "PrecDocDtls": [
      {
        "InvNo": "DOC/002",
        "InvDt": "01/08/2020",
        "OthRefNo": "123456"
      }
    ],
    "ContrDtls": [
      {
        "RecAdvRefr": "Doc/003",
        "RecAdvDt": "01/08/2020",
        "TendRefr": "Abc001",
        "ContrRefr": "Co123",
        "ExtRefr": "Yo456",
        "ProjRefr": "Doc-456",
        "PORefr": "Doc-789",
        "PORefDt": "01/08/2020"
      }
    ]
  },
  "AddlDocDtls": [
    {
      "Url": "https://einv-apisandbox.nic.in",
      "Docs": "Test Doc",
      "Info": "Document Test"
    }
  ],
  "ExpDtls": {
    "ShipBNo": "A-248",
    "ShipBDt": "01/08/2020",
    "Port": "INABG1",
    "RefClm": "N",
    "ForCur": "AED",
    "CntCode": "AE",
    "ExpDuty": null
  },
  "EwbDtls": {
    "TransId": "12AWGPV7107B1Z1",
    "TransName": "XYZ EXPORTS",
    "Distance": 100,
    "TransDocNo": "DOC01",
    "TransDocDt": "18/08/2020",
    "VehNo": "ka123456",
    "VehType": "R",
    "TransMode": "1"
  }
}
`;

// let PUBLIC_KEY = key.exportKey('public');
// let PRIVATE_KEY = key.exportKey('private');

// let PUBLIC_KEY =  `6L0Zzn42HhVvBPDdr8Xl`;

// let public_key = new rsa(PUBLIC_KEY, {b: 512});
// let private_key = new rsa([PRIVATE_KEY]);

// var enc = public_key.encrypt(sec, 'base64');
// console.log(key);

// var public_key = key.exportKey('public')
// var private_key = key.exportKey('private')

// console.log(public_key +'\n'+ private_key)
