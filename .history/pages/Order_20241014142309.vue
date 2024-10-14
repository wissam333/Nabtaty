<template>
  <div>
    <Order
      v-if="allcities && countries"
      :allcities="allcities.data"
      :countries="countries.data"
    ></Order>
  </div>
</template>

<script setup>
const allcities = ref({
  data: [
    {
      id: 1,
      nameAr: "دبي",
      nameEn: "Dubai",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 4,
      nameAr: "أبوظبي",
      nameEn: "Abu Dhabi",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 5,
      nameAr: "الشارقة",
      nameEn: "\tSharjah",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 6,
      nameAr: "عجمان",
      nameEn: "Ajman",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 7,
      nameAr: "أم القيوين",
      nameEn: "Umm Al Quwain",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 8,
      nameAr: "رأس الخيمة",
      nameEn: "Ras Al-Khaimah",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 9,
      nameAr: "الفجيرة",
      nameEn: "Fujairah",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 10,
      nameAr: "rrrrrrr",
      nameEn: "rrrrrr",
      nationId: 1,
      nation: null,
      shippingCost: 130.0,
      parentPrincedomId: 1,
      parentPrincedom: null,
    },
  ],
  messages: [],
  succeeded: true,
});

const countries = ref({
    "data": [
        {
            "id": 1,
            "nameAr": "الإمارات العربية المتحدة",
            "nameEn": "United Arab Emirates",
            "nameIso": "AE",
            "phoneCode": "+971",
            "available": true
        },
        {
            "id": 2,
            "nameAr": "المملكة العربية السعودية",
            "nameEn": "Kingdom of Saudi Arabia",
            "nameIso": "SA",
            "phoneCode": null,
            "available": false
        },
        {
            "id": 3,
            "nameAr": "مصر",
            "nameEn": "Egypt",
            "nameIso": "EG",
            "phoneCode": "+20",
            "available": false
        },
        {
            "id": 4,
            "nameAr": "إقليم المحيط البريطاني الهندي",
            "nameEn": "British Indian Ocean Territory",
            "nameIso": "IO",
            "phoneCode": "+246",
            "available": false
        },
        {
            "id": 5,
            "nameAr": "الجمهورية العربية الليبية",
            "nameEn": "Libyan Arab Jamahiriya",
            "nameIso": "LY",
            "phoneCode": "+218",
            "available": false
        },
        {
            "id": 6,
            "nameAr": "ميانمار",
            "nameEn": "Myanmar",
            "nameIso": "MM",
            "phoneCode": "+95",
            "available": false
        },
        {
            "id": 7,
            "nameAr": "أثيوبيا",
            "nameEn": "Ethiopia",
            "nameIso": "ET",
            "phoneCode": "+291",
            "available": false
        },
        {
            "id": 8,
            "nameAr": "أذربيجان",
            "nameEn": "Azerbaijan",
            "nameIso": "AZ",
            "phoneCode": "+994",
            "available": false
        },
        {
            "id": 9,
            "nameAr": "أرمينيا",
            "nameEn": "Armenia",
            "nameIso": "AM",
            "phoneCode": "+374",
            "available": false
        },
        {
            "id": 10,
            "nameAr": "أروبا",
            "nameEn": "Aruba",
            "nameIso": "AW",
            "phoneCode": "+297",
            "available": false
        },
        {
            "id": 11,
            "nameAr": "أستراليا",
            "nameEn": "Australia",
            "nameIso": "AU",
            "phoneCode": "+61",
            "available": false
        },
        {
            "id": 12,
            "nameAr": "ألبانيا",
            "nameEn": "Albania",
            "nameIso": "AL",
            "phoneCode": "+355",
            "available": false
        },
        {
            "id": 13,
            "nameAr": "ألمانيا",
            "nameEn": "Germany",
            "nameIso": "DE",
            "phoneCode": "+49",
            "available": false
        },
        {
            "id": 14,
            "nameAr": "أنتيغوا وبربودا",
            "nameEn": "Antigua And Barbuda",
            "nameIso": "AG",
            "phoneCode": "+1-268",
            "available": false
        },
        {
            "id": 15,
            "nameAr": "أندورا",
            "nameEn": "Andorra",
            "nameIso": "AD",
            "phoneCode": "+376",
            "available": false
        },
        {
            "id": 16,
            "nameAr": "أندونيسيا",
            "nameEn": "Indonesia",
            "nameIso": "ID",
            "phoneCode": "+62",
            "available": false
        },
        {
            "id": 17,
            "nameAr": "أنغولا",
            "nameEn": "Angola",
            "nameIso": "AO",
            "phoneCode": "+244",
            "available": false
        },
        {
            "id": 18,
            "nameAr": "أنغيلا",
            "nameEn": "Anguilla",
            "nameIso": "AI",
            "phoneCode": null,
            "available": false
        },
        {
            "id": 19,
            "nameAr": "أوزبكستان",
            "nameEn": "Uzbekistan",
            "nameIso": "UZ",
            "phoneCode": "+998",
            "available": false
        },
        {
            "id": 20,
            "nameAr": "أوغندا",
            "nameEn": "Uganda",
            "nameIso": "UG",
            "phoneCode": "+256",
            "available": false
        },
        {
            "id": 21,
            "nameAr": "أوكرانيا",
            "nameEn": "Ukraine",
            "nameIso": "UA",
            "phoneCode": "+380",
            "available": false
        },
        {
            "id": 22,
            "nameAr": "أيرلندا",
            "nameEn": "Ireland",
            "nameIso": "IE",
            "phoneCode": "+353",
            "available": false
        },
        {
            "id": 23,
            "nameAr": "أيسلندا",
            "nameEn": "Iceland",
            "nameIso": "IS",
            "phoneCode": "+354",
            "available": false
        },
        {
            "id": 24,
            "nameAr": "إريتريا",
            "nameEn": "Eritrea",
            "nameIso": "ER",
            "phoneCode": "+291",
            "available": false
        },
        {
            "id": 25,
            "nameAr": "إسبانيا",
            "nameEn": "Spain",
            "nameIso": "ES",
            "phoneCode": "+34",
            "available": false
        },
        {
            "id": 26,
            "nameAr": "إيران",
            "nameEn": "Iran",
            "nameIso": "IR",
            "phoneCode": "+98",
            "available": false
        },
        {
            "id": 27,
            "nameAr": "إيطاليا",
            "nameEn": "Italy",
            "nameIso": "IT",
            "phoneCode": "+39",
            "available": false
        },
        {
            "id": 28,
            "nameAr": "استونيا",
            "nameEn": "Estonia",
            "nameIso": "EE",
            "phoneCode": "+372",
            "available": false
        },
        {
            "id": 29,
            "nameAr": "الأرجنتين",
            "nameEn": "Argentina",
            "nameIso": "AR",
            "phoneCode": "+54",
            "available": false
        },
        {
            "id": 30,
            "nameAr": "الأردن",
            "nameEn": "Jordan",
            "nameIso": "JO",
            "phoneCode": "+962",
            "available": false
        },
        {
            "id": 31,
            "nameAr": "الأرض الخضراء",
            "nameEn": "Greenland",
            "nameIso": "GL",
            "phoneCode": "+299",
            "available": false
        },
        {
            "id": 32,
            "nameAr": "الأوروغواي",
            "nameEn": "Uruguay",
            "nameIso": "UY",
            "phoneCode": "+598",
            "available": false
        },
        {
            "id": 33,
            "nameAr": "الإكوادور",
            "nameEn": "Ecuador",
            "nameIso": "EC",
            "phoneCode": "+593",
            "available": false
        },
        {
            "id": 34,
            "nameAr": "الباهاما",
            "nameEn": "Bahamas",
            "nameIso": "BS",
            "phoneCode": "+1-242",
            "available": false
        },
        {
            "id": 35,
            "nameAr": "البحرين",
            "nameEn": "Bahrain",
            "nameIso": "BH",
            "phoneCode": "+973",
            "available": false
        },
        {
            "id": 36,
            "nameAr": "البرازيل",
            "nameEn": "Brazil",
            "nameIso": "BR",
            "phoneCode": "+55",
            "available": false
        },
        {
            "id": 37,
            "nameAr": "البرتغال",
            "nameEn": "Portugal",
            "nameIso": "PT",
            "phoneCode": "+351",
            "available": false
        },
        {
            "id": 38,
            "nameAr": "البوسنة والهرسك",
            "nameEn": "Bosnia And Herzegowina",
            "nameIso": "BA",
            "phoneCode": "+387",
            "available": false
        },
        {
            "id": 39,
            "nameAr": "الجزائر",
            "nameEn": "Algeria",
            "nameIso": "DZ",
            "phoneCode": "+213",
            "available": false
        },
        {
            "id": 40,
            "nameAr": "الدنمارك",
            "nameEn": "Denmark",
            "nameIso": "DK",
            "phoneCode": "+45",
            "available": false
        },
        {
            "id": 41,
            "nameAr": "الرأس الأخضر",
            "nameEn": "Cape Verde",
            "nameIso": "CV",
            "phoneCode": "+238",
            "available": false
        },
        {
            "id": 42,
            "nameAr": "الس وفوتونا",
            "nameEn": "Wallis And Futuna Islands",
            "nameIso": "WF",
            "phoneCode": "+681",
            "available": false
        },
        {
            "id": 43,
            "nameAr": "السلفادور",
            "nameEn": "El Salvador",
            "nameIso": "SV",
            "phoneCode": "+503",
            "available": false
        },
        {
            "id": 44,
            "nameAr": "السنغال",
            "nameEn": "Senegal",
            "nameIso": "SN",
            "phoneCode": "+221",
            "available": false
        },
        {
            "id": 46,
            "nameAr": "السويد",
            "nameEn": "Sweden",
            "nameIso": "SE",
            "phoneCode": "+46",
            "available": false
        },
        {
            "id": 47,
            "nameAr": "الصحراء الغربية",
            "nameEn": "Western Sahara",
            "nameIso": "EH",
            "phoneCode": "+212",
            "available": false
        },
        {
            "id": 49,
            "nameAr": "الصين",
            "nameEn": "China",
            "nameIso": "CN",
            "phoneCode": "+86",
            "available": false
        },
        {
            "id": 51,
            "nameAr": "الغابون",
            "nameEn": "Gabon",
            "nameIso": "GA",
            "phoneCode": "+241",
            "available": false
        },
        {
            "id": 52,
            "nameAr": "الفاتيكان",
            "nameEn": "Vatican City State",
            "nameIso": "VA",
            "phoneCode": "+379",
            "available": false
        },
        {
            "id": 53,
            "nameAr": "الفلبين",
            "nameEn": "Philippines",
            "nameIso": "PH",
            "phoneCode": "+63",
            "available": false
        },
        {
            "id": 54,
            "nameAr": "الفيدرالية الروسية",
            "nameEn": "Russian Federation",
            "nameIso": "RU",
            "phoneCode": "+7",
            "available": false
        },
        {
            "id": 55,
            "nameAr": "القطب الجنوبي",
            "nameEn": "Antarctica",
            "nameIso": null,
            "phoneCode": "+672",
            "available": false
        },
        {
            "id": 56,
            "nameAr": "الكاميرون",
            "nameEn": "Cameroon",
            "nameIso": "CM",
            "phoneCode": "+237",
            "available": false
        },
        {
            "id": 58,
            "nameAr": "الكويت",
            "nameEn": "Kuwait",
            "nameIso": "KW",
            "phoneCode": "+965",
            "available": false
        },
        {
            "id": 59,
            "nameAr": "المغرب",
            "nameEn": "Morocco",
            "nameIso": "MA",
            "phoneCode": "+212",
            "available": false
        },
        {
            "id": 60,
            "nameAr": "المكسيك",
            "nameEn": "Mexico",
            "nameIso": "MX",
            "phoneCode": "+52",
            "available": false
        },
        {
            "id": 61,
            "nameAr": "المملكة المتحدة",
            "nameEn": "United Kingdom",
            "nameIso": "GB",
            "phoneCode": "+44",
            "available": false
        },
        {
            "id": 62,
            "nameAr": "المناطق الجنوبية لفرنسا",
            "nameEn": "French Southern Territories",
            "nameIso": null,
            "phoneCode": "+262",
            "available": false
        },
        {
            "id": 63,
            "nameAr": "النرويج",
            "nameEn": "Norway",
            "nameIso": "NO",
            "phoneCode": "+47",
            "available": false
        },
        {
            "id": 64,
            "nameAr": "النمسا",
            "nameEn": "Austria",
            "nameIso": "AT",
            "phoneCode": "+43",
            "available": false
        },
        {
            "id": 65,
            "nameAr": "النيجر",
            "nameEn": "Niger",
            "nameIso": "NE",
            "phoneCode": "+227",
            "available": false
        },
        {
            "id": 66,
            "nameAr": "الهند",
            "nameEn": "India",
            "nameIso": "IN",
            "phoneCode": "+91",
            "available": false
        },
        {
            "id": 67,
            "nameAr": "الولايات المتحدة",
            "nameEn": "United States",
            "nameIso": "US",
            "phoneCode": "+1",
            "available": false
        },
        {
            "id": 68,
            "nameAr": "اليابان",
            "nameEn": "Japan",
            "nameIso": "JP",
            "phoneCode": "+81",
            "available": false
        },
        {
            "id": 70,
            "nameAr": "اليونان",
            "nameEn": "Greece",
            "nameIso": "GR",
            "phoneCode": "+30",
            "available": false
        },
        {
            "id": 72,
            "nameAr": "باراغواي",
            "nameEn": "Paraguay",
            "nameIso": "PY",
            "phoneCode": "+595",
            "available": false
        },
        {
            "id": 73,
            "nameAr": "باكستان",
            "nameEn": "Pakistan",
            "nameIso": "PK",
            "phoneCode": "+92",
            "available": false
        },
        {
            "id": 74,
            "nameAr": "بالاو",
            "nameEn": "Palau",
            "nameIso": "PW",
            "phoneCode": "+680",
            "available": false
        },
        {
            "id": 75,
            "nameAr": "بربادوس",
            "nameEn": "Barbados",
            "nameIso": "BB",
            "phoneCode": "+1-246",
            "available": false
        },
        {
            "id": 76,
            "nameAr": "برمودا",
            "nameEn": "Bermuda",
            "nameIso": "BM",
            "phoneCode": "+1-441",
            "available": false
        },
        {
            "id": 77,
            "nameAr": "بروناي دار السلام",
            "nameEn": "Brunei Darussalam",
            "nameIso": "BN",
            "phoneCode": "+673",
            "available": false
        },
        {
            "id": 78,
            "nameAr": "بلجيكا",
            "nameEn": "Belgium",
            "nameIso": "BE",
            "phoneCode": "+32",
            "available": false
        },
        {
            "id": 79,
            "nameAr": "بلغاريا",
            "nameEn": "Bulgaria",
            "nameIso": "BG",
            "phoneCode": "+359",
            "available": false
        },
        {
            "id": 80,
            "nameAr": "بليز",
            "nameEn": "Belize",
            "nameIso": "BZ",
            "phoneCode": "+501",
            "available": false
        },
        {
            "id": 81,
            "nameAr": "بناما",
            "nameEn": "Panama",
            "nameIso": "PA",
            "phoneCode": "+507",
            "available": false
        },
        {
            "id": 82,
            "nameAr": "بنغلاديش",
            "nameEn": "Bangladesh",
            "nameIso": "BD",
            "phoneCode": "+880",
            "available": false
        },
        {
            "id": 83,
            "nameAr": "بنين",
            "nameEn": "Benin",
            "nameIso": "BJ",
            "phoneCode": "+229",
            "available": false
        },
        {
            "id": 84,
            "nameAr": "بوتان",
            "nameEn": "Bhutan",
            "nameIso": "BT",
            "phoneCode": "+975",
            "available": false
        },
        {
            "id": 85,
            "nameAr": "بوتسوانا",
            "nameEn": "Botswana",
            "nameIso": "BW",
            "phoneCode": "+267",
            "available": false
        },
        {
            "id": 86,
            "nameAr": "بورتوريكو",
            "nameEn": "Puerto Rico",
            "nameIso": "PR",
            "phoneCode": "+1-787 or +1-939",
            "available": false
        },
        {
            "id": 87,
            "nameAr": "بوركينا فاسو",
            "nameEn": "Burkina Faso",
            "nameIso": "BF",
            "phoneCode": "+226",
            "available": false
        },
        {
            "id": 88,
            "nameAr": "بوروندي",
            "nameEn": "Burundi",
            "nameIso": "BI",
            "phoneCode": "+257",
            "available": false
        },
        {
            "id": 89,
            "nameAr": "بولندا",
            "nameEn": "Poland",
            "nameIso": "PL",
            "phoneCode": "+48",
            "available": false
        },
        {
            "id": 90,
            "nameAr": "بوليفيا",
            "nameEn": "Bolivia",
            "nameIso": "BO",
            "phoneCode": "+591",
            "available": false
        },
        {
            "id": 91,
            "nameAr": "بولينيزيا الفرنسية",
            "nameEn": "French Polynesia",
            "nameIso": "PF",
            "phoneCode": "+689",
            "available": false
        },
        {
            "id": 92,
            "nameAr": "بيتكيرن",
            "nameEn": "Pitcairn",
            "nameIso": "PN",
            "phoneCode": "+64",
            "available": false
        },
        {
            "id": 93,
            "nameAr": "بيرو",
            "nameEn": "Peru",
            "nameIso": "PE",
            "phoneCode": "+51",
            "available": false
        },
        {
            "id": 94,
            "nameAr": "تايلاند",
            "nameEn": "Thailand",
            "nameIso": "TH",
            "phoneCode": "+66",
            "available": false
        },
        {
            "id": 95,
            "nameAr": "تايوان",
            "nameEn": "Taiwan",
            "nameIso": "TW",
            "phoneCode": "+886",
            "available": false
        },
        {
            "id": 96,
            "nameAr": "تركمانستان",
            "nameEn": "Turkmenistan",
            "nameIso": "TM",
            "phoneCode": "+993",
            "available": false
        },
        {
            "id": 97,
            "nameAr": "تركيا",
            "nameEn": "Turkey",
            "nameIso": "TR",
            "phoneCode": "+90",
            "available": false
        },
        {
            "id": 98,
            "nameAr": "ترينيداد وتوباغو",
            "nameEn": "Trinidad And Tobago",
            "nameIso": "TT",
            "phoneCode": "+1-868",
            "available": false
        },
        {
            "id": 99,
            "nameAr": "تشاد",
            "nameEn": "Chad",
            "nameIso": "TD",
            "phoneCode": "+235",
            "available": false
        },
        {
            "id": 100,
            "nameAr": "تشيلي",
            "nameEn": "Chile",
            "nameIso": "CL",
            "phoneCode": "+56",
            "available": false
        },
        {
            "id": 101,
            "nameAr": "تنزانيا",
            "nameEn": "Tanzania",
            "nameIso": "TZ",
            "phoneCode": "+255",
            "available": false
        },
        {
            "id": 102,
            "nameAr": "توغو",
            "nameEn": "Togo",
            "nameIso": "TG",
            "phoneCode": "+228",
            "available": false
        },
        {
            "id": 103,
            "nameAr": "توفالو",
            "nameEn": "Tuvalu",
            "nameIso": "TV",
            "phoneCode": "+688",
            "available": false
        },
        {
            "id": 104,
            "nameAr": "توكيلاو",
            "nameEn": "Tokelau",
            "nameIso": "TK",
            "phoneCode": "+690",
            "available": false
        },
        {
            "id": 105,
            "nameAr": "تونس",
            "nameEn": "Tunisia",
            "nameIso": "TN",
            "phoneCode": "+216",
            "available": false
        },
        {
            "id": 106,
            "nameAr": "تونغا",
            "nameEn": "Tonga",
            "nameIso": "TO",
            "phoneCode": "+676",
            "available": false
        },
        {
            "id": 107,
            "nameAr": "تيمور الشرقية",
            "nameEn": "East Timor",
            "nameIso": "TL",
            "phoneCode": "+670",
            "available": false
        },
        {
            "id": 108,
            "nameAr": "جامايكا",
            "nameEn": "Jamaica",
            "nameIso": "JM",
            "phoneCode": "+1-876",
            "available": false
        },
        {
            "id": 109,
            "nameAr": "جبل طارق",
            "nameEn": "Gibraltar",
            "nameIso": "GI",
            "phoneCode": "+350",
            "available": false
        },
        {
            "id": 110,
            "nameAr": "جزر العذراء الأمريكية",
            "nameEn": "Virgin Islands (U.S)",
            "nameIso": "VI",
            "phoneCode": "+1",
            "available": false
        },
        {
            "id": 111,
            "nameAr": "جزر العذراء البريطانية",
            "nameEn": "Virgin Islands (British)",
            "nameIso": "VG",
            "phoneCode": "+1",
            "available": false
        },
        {
            "id": 112,
            "nameAr": "جزر القمر",
            "nameEn": "Comoros",
            "nameIso": "KM",
            "phoneCode": "+269",
            "available": false
        },
        {
            "id": 113,
            "nameAr": "جزر توركس وكايكوس",
            "nameEn": "Turks And Caicos Islands",
            "nameIso": "TC",
            "phoneCode": "+1-649",
            "available": false
        },
        {
            "id": 114,
            "nameAr": "جزر سليمان",
            "nameEn": "Solomon Islands",
            "nameIso": "SB",
            "phoneCode": "+677",
            "available": false
        },
        {
            "id": 115,
            "nameAr": "جزر صناعية",
            "nameEn": "Faroe Islands",
            "nameIso": "FO",
            "phoneCode": "+298",
            "available": false
        },
        {
            "id": 116,
            "nameAr": "جزر فوكلاند",
            "nameEn": "Falkland Islands",
            "nameIso": "FK",
            "phoneCode": "+500",
            "available": false
        },
        {
            "id": 117,
            "nameAr": "جزر كايمان",
            "nameEn": "Cayman Islands",
            "nameIso": "KY",
            "phoneCode": "+1-345",
            "available": false
        },
        {
            "id": 118,
            "nameAr": "جزر كوك",
            "nameEn": "Cook Islands",
            "nameIso": "CK",
            "phoneCode": "+682",
            "available": false
        },
        {
            "id": 119,
            "nameAr": "جزر كوكوس (كيلينغ)",
            "nameEn": "Cocos (Keeling) Islands",
            "nameIso": "CC",
            "phoneCode": "+891",
            "available": false
        },
        {
            "id": 120,
            "nameAr": "جزر مارشال",
            "nameEn": "Marshall Islands",
            "nameIso": "MH",
            "phoneCode": "+692",
            "available": false
        },
        {
            "id": 121,
            "nameAr": "جزر مريانا الشمالية",
            "nameEn": "Northern Mariana Islands",
            "nameIso": "MP",
            "phoneCode": "+1-670",
            "available": false
        },
        {
            "id": 122,
            "nameAr": "جزيرة الكريسماس",
            "nameEn": "Christmas Island",
            "nameIso": "CX",
            "phoneCode": "+53",
            "available": false
        },
        {
            "id": 123,
            "nameAr": "جزيرة بوفيت",
            "nameEn": "Bouvet Island",
            "nameIso": null,
            "phoneCode": "+55",
            "available": false
        },
        {
            "id": 124,
            "nameAr": "جزيرة نورفولك",
            "nameEn": "Norfolk Island",
            "nameIso": "NF",
            "phoneCode": "+672",
            "available": false
        },
        {
            "id": 125,
            "nameAr": "جزيرة هيرد وجزر ماكدونالد",
            "nameEn": "Heard And Mc Donald Islands",
            "nameIso": null,
            "phoneCode": null,
            "available": false
        },
        {
            "id": 127,
            "nameAr": "جمهورية التشيك",
            "nameEn": "Czech Republic",
            "nameIso": "CZ",
            "phoneCode": "+420",
            "available": false
        },
        {
            "id": 128,
            "nameAr": "جمهورية الدومنيكان",
            "nameEn": "Dominican Republic",
            "nameIso": "DO",
            "phoneCode": "+1-809 and +1-829",
            "available": false
        },
        {
            "id": 129,
            "nameAr": "جمهورية لاو الشعبية",
            "nameEn": "Lao Peoples Republic",
            "nameIso": "LA",
            "phoneCode": "+856",
            "available": false
        },
        {
            "id": 130,
            "nameAr": "جنوب أفريقيا",
            "nameEn": "South Africa",
            "nameIso": "ZA",
            "phoneCode": "+27",
            "available": false
        },
        {
            "id": 131,
            "nameAr": "جوادلوب",
            "nameEn": "Guadeloupe",
            "nameIso": "GP",
            "phoneCode": "+590",
            "available": false
        },
        {
            "id": 132,
            "nameAr": "جورجيا",
            "nameEn": "Georgia",
            "nameIso": "GE",
            "phoneCode": "+995",
            "available": false
        },
        {
            "id": 133,
            "nameAr": "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
            "nameEn": "South Georgia And The South Sandwich Islands",
            "nameIso": null,
            "phoneCode": "+500",
            "available": false
        },
        {
            "id": 134,
            "nameAr": "جيبوتي",
            "nameEn": "Djibouti",
            "nameIso": "DJ",
            "phoneCode": "+253",
            "available": false
        },
        {
            "id": 135,
            "nameAr": "دومينيكا",
            "nameEn": "Dominica",
            "nameIso": "DM",
            "phoneCode": "+1-767",
            "available": false
        },
        {
            "id": 136,
            "nameAr": "رواندا",
            "nameEn": "Rwanda",
            "nameIso": "RW",
            "phoneCode": "+250",
            "available": false
        },
        {
            "id": 137,
            "nameAr": "بيلاروسيا",
            "nameEn": "Belarus",
            "nameIso": "BY",
            "phoneCode": "+375",
            "available": false
        },
        {
            "id": 138,
            "nameAr": "رومانيا",
            "nameEn": "Romania",
            "nameIso": "RO",
            "phoneCode": "+40",
            "available": false
        },
        {
            "id": 139,
            "nameAr": "ريونيون",
            "nameEn": "Reunion",
            "nameIso": "RE",
            "phoneCode": "+262",
            "available": false
        },
        {
            "id": 140,
            "nameAr": "زائير",
            "nameEn": "Zaire",
            "nameIso": null,
            "phoneCode": "+243",
            "available": false
        },
        {
            "id": 141,
            "nameAr": "زامبيا",
            "nameEn": "Zambia",
            "nameIso": "ZM",
            "phoneCode": "+260",
            "available": false
        },
        {
            "id": 142,
            "nameAr": "ساحل العاج",
            "nameEn": "Cote D-Ivoire",
            "nameIso": "CI",
            "phoneCode": "+225",
            "available": false
        },
        {
            "id": 143,
            "nameAr": "ساموا",
            "nameEn": "Samoa",
            "nameIso": "WS",
            "phoneCode": "+685",
            "available": false
        },
        {
            "id": 144,
            "nameAr": "ساموا الأمريكية",
            "nameEn": "American Samoa",
            "nameIso": "AS",
            "phoneCode": "+1-684",
            "available": false
        },
        {
            "id": 145,
            "nameAr": "سان بيير وميكلون",
            "nameEn": "St Pierre and Miquelon",
            "nameIso": "PM",
            "phoneCode": "+508",
            "available": false
        },
        {
            "id": 146,
            "nameAr": "سان مارينو",
            "nameEn": "San Marino",
            "nameIso": "SM",
            "phoneCode": "+378",
            "available": false
        },
        {
            "id": 147,
            "nameAr": "سانت فينسنت والغرينادين",
            "nameEn": "Saint Vincent And The Grenadines",
            "nameIso": "VC",
            "phoneCode": "+1-784",
            "available": false
        },
        {
            "id": 148,
            "nameAr": "سانت كيتس ونيفيس",
            "nameEn": "Saint Kitts And Nevis",
            "nameIso": "KN",
            "phoneCode": "+1-869",
            "available": false
        },
        {
            "id": 149,
            "nameAr": "سانت لوسيا",
            "nameEn": "Saint Lucia",
            "nameIso": "LC",
            "phoneCode": "+1-758",
            "available": false
        },
        {
            "id": 150,
            "nameAr": "سانت هيلينا",
            "nameEn": "St Helena",
            "nameIso": "SH",
            "phoneCode": "+290",
            "available": false
        },
        {
            "id": 151,
            "nameAr": "ساو تومي وبرينسيب",
            "nameEn": "Sao Tome And Principe",
            "nameIso": "ST",
            "phoneCode": "+239",
            "available": false
        },
        {
            "id": 152,
            "nameAr": "سريلانكا",
            "nameEn": "Sri Lanka",
            "nameIso": "LK",
            "phoneCode": "+94",
            "available": false
        },
        {
            "id": 153,
            "nameAr": "سفالبارد ويان ماين",
            "nameEn": "Svalbard And Jan Mayen Islands",
            "nameIso": null,
            "phoneCode": "+47",
            "available": false
        },
        {
            "id": 154,
            "nameAr": "سلوفاكيا",
            "nameEn": "Slovakia",
            "nameIso": "SK",
            "phoneCode": "+421",
            "available": false
        },
        {
            "id": 155,
            "nameAr": "سلوفينيا",
            "nameEn": "Slovenia",
            "nameIso": "SI",
            "phoneCode": "+386",
            "available": false
        },
        {
            "id": 156,
            "nameAr": "سنغافورة",
            "nameEn": "Singapore",
            "nameIso": "SG",
            "phoneCode": "+65",
            "available": false
        },
        {
            "id": 157,
            "nameAr": "سوازيلاند",
            "nameEn": "Swaziland",
            "nameIso": "SZ",
            "phoneCode": "+268",
            "available": false
        },
        {
            "id": 159,
            "nameAr": "سورينام",
            "nameEn": "Suriname",
            "nameIso": "SR",
            "phoneCode": "+597",
            "available": false
        },
        {
            "id": 160,
            "nameAr": "سويسرا",
            "nameEn": "Switzerland",
            "nameIso": "CH",
            "phoneCode": "+41",
            "available": false
        },
        {
            "id": 161,
            "nameAr": "سيراليون",
            "nameEn": "Sierra Leone",
            "nameIso": "SL",
            "phoneCode": "+232",
            "available": false
        },
        {
            "id": 162,
            "nameAr": "سيشل",
            "nameEn": "Seychelles",
            "nameIso": "SC",
            "phoneCode": "+248",
            "available": false
        },
        {
            "id": 163,
            "nameAr": "طاجيكستان",
            "nameEn": "Tajikistan",
            "nameIso": "TJ",
            "phoneCode": "+992",
            "available": false
        },
        {
            "id": 164,
            "nameAr": "عمان",
            "nameEn": "Oman",
            "nameIso": "OM",
            "phoneCode": "+968",
            "available": false
        },
        {
            "id": 165,
            "nameAr": "غانا",
            "nameEn": "Ghana",
            "nameIso": "GH",
            "phoneCode": "+233",
            "available": false
        },
        {
            "id": 166,
            "nameAr": "غرينادا",
            "nameEn": "Grenada",
            "nameIso": "GD",
            "phoneCode": "+1-473",
            "available": false
        },
        {
            "id": 167,
            "nameAr": "غواتيمالا",
            "nameEn": "Guatemala",
            "nameIso": "GT",
            "phoneCode": "+502",
            "available": false
        },
        {
            "id": 168,
            "nameAr": "غوام",
            "nameEn": "Guam",
            "nameIso": "GU",
            "phoneCode": "+1-671",
            "available": false
        },
        {
            "id": 169,
            "nameAr": "غيانا",
            "nameEn": "Guyana",
            "nameIso": "GY",
            "phoneCode": "+592",
            "available": false
        },
        {
            "id": 170,
            "nameAr": "غيانا الفرنسية",
            "nameEn": "French Guiana",
            "nameIso": "GF",
            "phoneCode": "+594",
            "available": false
        },
        {
            "id": 174,
            "nameAr": "فانواتو",
            "nameEn": "Vanuatu",
            "nameIso": "VU",
            "phoneCode": "+678",
            "available": false
        },
        {
            "id": 175,
            "nameAr": "فرنسا",
            "nameEn": "France",
            "nameIso": "FR",
            "phoneCode": "+33",
            "available": false
        },
        {
            "id": 176,
            "nameAr": "فرنسا، متروبوليتان",
            "nameEn": "France, Metropolitan",
            "nameIso": null,
            "phoneCode": null,
            "available": false
        },
        {
            "id": 177,
            "nameAr": "فلسطين",
            "nameEn": "Palestine",
            "nameIso": "PS",
            "phoneCode": "+970",
            "available": false
        },
        {
            "id": 178,
            "nameAr": "فنزويلا",
            "nameEn": "Venezuela",
            "nameIso": "VE",
            "phoneCode": "+58",
            "available": false
        },
        {
            "id": 179,
            "nameAr": "فنلندا",
            "nameEn": "Finland",
            "nameIso": "FI",
            "phoneCode": "+358",
            "available": false
        },
        {
            "id": 180,
            "nameAr": "فيتنام",
            "nameEn": "Viet Nam",
            "nameIso": "VN",
            "phoneCode": "+84",
            "available": false
        },
        {
            "id": 181,
            "nameAr": "فيجي",
            "nameEn": "Fiji",
            "nameIso": "FJ",
            "phoneCode": "+679",
            "available": false
        },
        {
            "id": 182,
            "nameAr": "قبرص",
            "nameEn": "Cyprus",
            "nameIso": "CY",
            "phoneCode": "+357",
            "available": false
        },
        {
            "id": 183,
            "nameAr": "قرغيزستان",
            "nameEn": "Kyrgyzstan",
            "nameIso": "KG",
            "phoneCode": "+996",
            "available": false
        },
        {
            "id": 185,
            "nameAr": "قطر",
            "nameEn": "Qatar",
            "nameIso": "QA",
            "phoneCode": "+974",
            "available": false
        },
        {
            "id": 186,
            "nameAr": "كاليدونيا الجديدة",
            "nameEn": "New Caledonia",
            "nameIso": "NC",
            "phoneCode": "+687",
            "available": false
        },
        {
            "id": 187,
            "nameAr": "كرواتيا",
            "nameEn": "Croatia",
            "nameIso": "HR",
            "phoneCode": "+385",
            "available": false
        },
        {
            "id": 188,
            "nameAr": "كمبوديا",
            "nameEn": "Cambodia",
            "nameIso": "KH",
            "phoneCode": "+855",
            "available": false
        },
        {
            "id": 189,
            "nameAr": "كندا",
            "nameEn": "Canada",
            "nameIso": "CA",
            "phoneCode": "+1",
            "available": false
        },
        {
            "id": 190,
            "nameAr": "كوبا",
            "nameEn": "Cuba",
            "nameIso": "CU",
            "phoneCode": "+53",
            "available": false
        },
        {
            "id": 193,
            "nameAr": "كوستا ريكا",
            "nameEn": "Costa Rica",
            "nameIso": "CR",
            "phoneCode": "+506",
            "available": false
        },
        {
            "id": 194,
            "nameAr": "كولومبيا",
            "nameEn": "Colombia",
            "nameIso": "CO",
            "phoneCode": "+57",
            "available": false
        },
        {
            "id": 195,
            "nameAr": "كيريباس",
            "nameEn": "Kiribati",
            "nameIso": "KI",
            "phoneCode": "+686",
            "available": false
        },
        {
            "id": 196,
            "nameAr": "كينيا",
            "nameEn": "Kenya",
            "nameIso": "KE",
            "phoneCode": "+254",
            "available": false
        },
        {
            "id": 197,
            "nameAr": "لاتفيا",
            "nameEn": "Latvia",
            "nameIso": "LV",
            "phoneCode": "+371",
            "available": false
        },
        {
            "id": 198,
            "nameAr": "لبنان",
            "nameEn": "Lebanon",
            "nameIso": "LB",
            "phoneCode": "+961",
            "available": false
        },
        {
            "id": 200,
            "nameAr": "ليبيريا",
            "nameEn": "Liberia",
            "nameIso": "LR",
            "phoneCode": "+231",
            "available": false
        },
        {
            "id": 201,
            "nameAr": "ليتوانيا",
            "nameEn": "Lithuania",
            "nameIso": "LT",
            "phoneCode": "+370",
            "available": false
        },
        {
            "id": 202,
            "nameAr": "جزر الأنتيل الهولندية",
            "nameEn": "Netherlands Antilles",
            "nameIso": "AN",
            "phoneCode": "+599",
            "available": false
        },
        {
            "id": 203,
            "nameAr": "ليختنشتاين",
            "nameEn": "Liechtenstein",
            "nameIso": "LI",
            "phoneCode": "+423",
            "available": false
        },
        {
            "id": 204,
            "nameAr": "ليسوتو",
            "nameEn": "Lesotho",
            "nameIso": "LS",
            "phoneCode": "+266",
            "available": false
        },
        {
            "id": 205,
            "nameAr": "مارتينيك",
            "nameEn": "Martinique",
            "nameIso": "MQ",
            "phoneCode": "+596",
            "available": false
        },
        {
            "id": 206,
            "nameAr": "ماكاو",
            "nameEn": "Macau",
            "nameIso": "MO",
            "phoneCode": "+853",
            "available": false
        },
        {
            "id": 207,
            "nameAr": "مالطا",
            "nameEn": "Malta",
            "nameIso": "MT",
            "phoneCode": "+356",
            "available": false
        },
        {
            "id": 208,
            "nameAr": "مالي",
            "nameEn": "Mali",
            "nameIso": "ML",
            "phoneCode": "+223",
            "available": false
        },
        {
            "id": 209,
            "nameAr": "ماليزيا",
            "nameEn": "Malaysia",
            "nameIso": "MY",
            "phoneCode": "+60",
            "available": false
        },
        {
            "id": 210,
            "nameAr": "مايوت",
            "nameEn": "Mayotte",
            "nameIso": "YT",
            "phoneCode": "+262",
            "available": false
        },
        {
            "id": 211,
            "nameAr": "مجلس التعاون الخليجي",
            "nameEn": "GCC",
            "nameIso": null,
            "phoneCode": null,
            "available": false
        },
        {
            "id": 212,
            "nameAr": "مدغشقر",
            "nameEn": "Madagascar",
            "nameIso": "MG",
            "phoneCode": "+261",
            "available": false
        },
        {
            "id": 213,
            "nameAr": "مقدونيا",
            "nameEn": "Macedonia",
            "nameIso": "MK",
            "phoneCode": "+389",
            "available": false
        },
        {
            "id": 214,
            "nameAr": "ملاوي",
            "nameEn": "Malawi",
            "nameIso": "MW",
            "phoneCode": "+265",
            "available": false
        },
        {
            "id": 215,
            "nameAr": "منظمة الدول الاميركية",
            "nameEn": "Organization of American States",
            "nameIso": null,
            "phoneCode": null,
            "available": false
        },
        {
            "id": 216,
            "nameAr": "منظمة المؤتمر الإسلامي",
            "nameEn": "OIC",
            "nameIso": null,
            "phoneCode": null,
            "available": false
        },
        {
            "id": 217,
            "nameAr": "منظمة الوحدة الافريقية",
            "nameEn": "Organization of African Unity",
            "nameIso": null,
            "phoneCode": null,
            "available": false
        },
        {
            "id": 218,
            "nameAr": "منغوليا",
            "nameEn": "Mongolia",
            "nameIso": "MN",
            "phoneCode": "+976",
            "available": false
        },
        {
            "id": 219,
            "nameAr": "موريتانيا",
            "nameEn": "Mauritania",
            "nameIso": "MR",
            "phoneCode": "+222",
            "available": false
        },
        {
            "id": 220,
            "nameAr": "موريشيوس",
            "nameEn": "Mauritius",
            "nameIso": "MU",
            "phoneCode": "+230",
            "available": false
        },
        {
            "id": 221,
            "nameAr": "موزمبيق",
            "nameEn": "Mozambique",
            "nameIso": "MZ",
            "phoneCode": "+258",
            "available": false
        },
        {
            "id": 222,
            "nameAr": "مولدوفا",
            "nameEn": "Moldova",
            "nameIso": "MD",
            "phoneCode": "+373",
            "available": false
        },
        {
            "id": 223,
            "nameAr": "موناكو",
            "nameEn": "Monaco",
            "nameIso": "MC",
            "phoneCode": "+377",
            "available": false
        },
        {
            "id": 224,
            "nameAr": "مونتسيرات",
            "nameEn": "Montserrat",
            "nameIso": "MS",
            "phoneCode": "+1-664",
            "available": false
        },
        {
            "id": 225,
            "nameAr": "ميكرونيزيا",
            "nameEn": "Micronesia",
            "nameIso": "FM",
            "phoneCode": "+691",
            "available": false
        },
        {
            "id": 226,
            "nameAr": "ناميبيا",
            "nameEn": "Namibia",
            "nameIso": "NA",
            "phoneCode": "+264",
            "available": false
        },
        {
            "id": 227,
            "nameAr": "ناورو",
            "nameEn": "Nauru",
            "nameIso": "NR",
            "phoneCode": "+674",
            "available": false
        },
        {
            "id": 228,
            "nameAr": "نيبال",
            "nameEn": "Nepal",
            "nameIso": "NP",
            "phoneCode": "+977",
            "available": false
        },
        {
            "id": 229,
            "nameAr": "نيجيريا",
            "nameEn": "Nigeria",
            "nameIso": "NG",
            "phoneCode": "+234",
            "available": false
        },
        {
            "id": 230,
            "nameAr": "نيكاراغوا",
            "nameEn": "Nicaragua",
            "nameIso": "NI",
            "phoneCode": "+505",
            "available": false
        },
        {
            "id": 231,
            "nameAr": "نيوزيلاندا",
            "nameEn": "New Zealand",
            "nameIso": "NZ",
            "phoneCode": "+64",
            "available": false
        },
        {
            "id": 232,
            "nameAr": "نيوي",
            "nameEn": "Niue",
            "nameIso": "NU",
            "phoneCode": "+683",
            "available": false
        },
        {
            "id": 233,
            "nameAr": "هايتي",
            "nameEn": "Haiti",
            "nameIso": "HT",
            "phoneCode": "+509",
            "available": false
        },
        {
            "id": 234,
            "nameAr": "هندوراس",
            "nameEn": "Honduras",
            "nameIso": "HN",
            "phoneCode": "+504",
            "available": false
        },
        {
            "id": 235,
            "nameAr": "هنغاريا",
            "nameEn": "Hungary",
            "nameIso": "HU",
            "phoneCode": "+36",
            "available": false
        },
        {
            "id": 236,
            "nameAr": "هولندا",
            "nameEn": "Netherlands",
            "nameIso": "NL",
            "phoneCode": "+31",
            "available": false
        },
        {
            "id": 237,
            "nameAr": "هونغ كونغ",
            "nameEn": "Hong Kong",
            "nameIso": "HK",
            "phoneCode": "+852",
            "available": false
        }
    ],
    "messages": [],
    "succeeded": true
});
</script>

<style lang="scss" scoped></style>
