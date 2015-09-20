angular
    .module('app')
    .factory('countries', countries);

function countries() {
    return {
            get : function(data){

                return [
    {
        "name": {
            "common": "Aruba",
            "official": "Aruba",
            "native": {
                "nld": {
                    "official": "Aruba",
                    "common": "Aruba"
                },
                "pap": {
                    "official": "Aruba",
                    "common": "Aruba"
                }
            }
        },
        "tld": [".aw"],
        "cca2": "AW",
        "ccn3": "533",
        "cca3": "ABW",
        "cioc": "ARU",
        "currency": ["AWG"],
        "callingCode": ["297"],
        "capital": "Oranjestad",
        "altSpellings": ["AW"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "nld": "Dutch",
            "pap": "Papiamento"
        },
        "translations": {
            "deu": {"official": "Aruba", "common": "Aruba"},
            "fra": {"official": "Aruba", "common": "Aruba"},
            "hrv": {"official": "Aruba", "common": "Aruba"},
            "ita": {"official": "Aruba", "common": "Aruba"},
            "jpn": {"official": "\u30a2\u30eb\u30d0", "common": "\u30a2\u30eb\u30d0"},
            "nld": {"official": "Aruba", "common": "Aruba"},
            "por": {"official": "Aruba", "common": "Aruba"},
            "rus": {"official": "\u0410\u0440\u0443\u0431\u0430", "common": "\u0410\u0440\u0443\u0431\u0430"},
            "spa": {"official": "Aruba", "common": "Aruba"},
            "fin": {"official": "Aruba", "common": "Aruba"}
        },
        "latlng": [12.5, -69.96666666],
        "demonym": "Aruban",
        "landlocked": false,
        "borders": [],
        "area": 180
    },
    {
        "name": {
            "common": "Afghanistan",
            "official": "Islamic Republic of Afghanistan",
            "native": {
                "prs": {
                    "official": "\u062c\u0645\u0647\u0648\u0631\u06cc \u0627\u0633\u0644\u0627\u0645\u06cc \u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646",
                    "common": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646"
                },
                "pus": {
                    "official": "\u062f \u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646 \u0627\u0633\u0644\u0627\u0645\u064a \u062c\u0645\u0647\u0648\u0631\u06cc\u062a",
                    "common": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646"
                },
                "tuk": {
                    "official": "Owganystan Yslam Respublikasy",
                    "common": "Owganystan"
                }
            }
        },
        "tld": [".af"],
        "cca2": "AF",
        "ccn3": "004",
        "cca3": "AFG",
        "cioc": "AFG",
        "currency": ["AFN"],
        "callingCode": ["93"],
        "capital": "Kabul",
        "altSpellings": ["AF", "Af\u0121\u0101nist\u0101n"],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "prs": "Dari",
            "pus": "Pashto",
            "tuk": "Turkmen"
        },
        "translations": {
            "cym": {"official": "Islamic Republic of Afghanistan", "common": "Affganistan"},
            "deu": {"official": "Islamische Republik Afghanistan", "common": "Afghanistan"},
            "fra": {"official": "R\u00e9publique islamique d'Afghanistan", "common": "Afghanistan"},
            "hrv": {"official": "Islamska Republika Afganistan", "common": "Afganistan"},
            "ita": {"official": "Repubblica islamica dell'Afghanistan", "common": "Afghanistan"},
            "jpn": {"official": "\u30a2\u30d5\u30ac\u30cb\u30b9\u30bf\u30f3\u00b7\u30a4\u30b9\u30e9\u30e0\u5171\u548c\u56fd", "common": "\u30a2\u30d5\u30ac\u30cb\u30b9\u30bf\u30f3"},
            "nld": {"official": "Islamitische Republiek Afghanistan", "common": "Afghanistan"},
            "por": {"official": "Rep\u00fablica Isl\u00e2mica do Afeganist\u00e3o", "common": "Afeganist\u00e3o"},
            "rus": {"official": "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0444\u0433\u0430\u043d\u0438\u0441\u0442\u0430\u043d", "common": "\u0410\u0444\u0433\u0430\u043d\u0438\u0441\u0442\u0430\u043d"},
            "spa": {"official": "Rep\u00fablica Isl\u00e1mica de Afganist\u00e1n", "common": "Afganist\u00e1n"},
            "fin": {"official": "Afganistanin islamilainen tasavalta", "common": "Afganistan"}
        },
        "latlng": [33, 65],
        "demonym": "Afghan",
        "landlocked": true,
        "borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
        "area": 652230
    },
    {
        "name": {
            "common": "Angola",
            "official": "Republic of Angola",
            "native": {
                "por": {
                    "official": "Rep\u00fablica de Angola",
                    "common": "Angola"
                }
            }
        },
        "tld": [".ao"],
        "cca2": "AO",
        "ccn3": "024",
        "cca3": "AGO",
        "cioc": "ANG",
        "currency": ["AOA"],
        "callingCode": ["244"],
        "capital": "Luanda",
        "altSpellings": ["AO", "Rep\u00fablica de Angola", "\u0281\u025bpublika de an'\u0261\u0254la"],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "cym": {"official": "Republic of Angola", "common": "Angola"},
            "deu": {"official": "Republik Angola", "common": "Angola"},
            "fra": {"official": "R\u00e9publique d'Angola", "common": "Angola"},
            "hrv": {"official": "Republika Angola", "common": "Angola"},
            "ita": {"official": "Repubblica dell'Angola", "common": "Angola"},
            "jpn": {"official": "\u30a2\u30f3\u30b4\u30e9\u5171\u548c\u56fd", "common": "\u30a2\u30f3\u30b4\u30e9"},
            "nld": {"official": "Republiek Angola", "common": "Angola"},
            "por": {"official": "Rep\u00fablica de Angola", "common": "Angola"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043d\u0433\u043e\u043b\u0430", "common": "\u0410\u043d\u0433\u043e\u043b\u0430"},
            "spa": {"official": "Rep\u00fablica de Angola", "common": "Angola"},
            "fin": {"official": "Angolan tasavalta", "common": "Angola"}
        },
        "latlng": [-12.5, 18.5],
        "demonym": "Angolan",
        "landlocked": false,
        "borders": ["COG", "COD", "ZMB", "NAM"],
        "area": 1246700
    },
    {
        "name": {
            "common": "Anguilla",
            "official": "Anguilla",
            "native": {
                "eng": {
                    "official": "Anguilla",
                    "common": "Anguilla"
                }
            }
        },
        "tld": [".ai"],
        "cca2": "AI",
        "ccn3": "660",
        "cca3": "AIA",
        "cioc": "",
        "currency": ["XCD"],
        "callingCode": ["1264"],
        "capital": "The Valley",
        "altSpellings": ["AI"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Anguilla", "common": "Anguilla"},
            "fra": {"official": "Anguilla", "common": "Anguilla"},
            "hrv": {"official": "Anguilla", "common": "Angvila"},
            "ita": {"official": "Anguilla", "common": "Anguilla"},
            "jpn": {"official": "\u30a2\u30f3\u30b0\u30a3\u30e9", "common": "\u30a2\u30f3\u30ae\u30e9"},
            "nld": {"official": "Anguilla", "common": "Anguilla"},
            "por": {"official": "Anguilla", "common": "Anguilla"},
            "rus": {"official": "\u0410\u043d\u0433\u0438\u043b\u044c\u044f", "common": "\u0410\u043d\u0433\u0438\u043b\u044c\u044f"},
            "spa": {"official": "Anguila", "common": "Anguilla"},
            "fin": {"official": "Anguilla", "common": "Anguilla"}
        },
        "latlng": [18.25, -63.16666666],
        "demonym": "Anguillian",
        "landlocked": false,
        "borders": [],
        "area": 91
    },
    {
        "name": {
            "common": "\u00c5land Islands",
            "official": "\u00c5land Islands",
            "native": {
                "swe": {
                    "official": "Landskapet \u00c5land",
                    "common": "\u00c5land"
                }
            }
        },
        "tld": [".ax"],
        "cca2": "AX",
        "ccn3": "248",
        "cca3": "ALA",
        "cioc": "",
        "currency": ["EUR"],
        "callingCode": ["358"],
        "capital": "Mariehamn",
        "altSpellings": ["AX", "Aaland", "Aland", "Ahvenanmaa"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "swe": "Swedish"
        },
        "translations": {
            "deu": {"official": "\u00c5land-Inseln", "common": "\u00c5land"},
            "fra": {"official": "\u00eeles \u00c5land", "common": "\u00c5land"},
            "hrv": {"official": "Aland Islands", "common": "\u00c5landski otoci"},
            "ita": {"official": "Isole \u00c5land", "common": "Isole Aland"},
            "jpn": {"official": "\u30aa\u30fc\u30e9\u30f3\u30c9\u8af8\u5cf6", "common": "\u30aa\u30fc\u30e9\u30f3\u30c9\u8af8\u5cf6"},
            "nld": {"official": "\u00c5land eilanden", "common": "\u00c5landeilanden"},
            "por": {"official": "Ilhas \u00c5land", "common": "Al\u00e2ndia"},
            "rus": {"official": "\u0410\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u0410\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "Islas \u00c5land", "common": "Alandia"},
            "fin": {"official": "Ahvenanmaan maakunta", "common": "Ahvenanmaa"}
        },
        "latlng": [60.116667, 19.9],
        "demonym": "\u00c5landish",
        "landlocked": false,
        "borders": [],
        "area": 1580
    },
    {
        "name": {
            "common": "Albania",
            "official": "Republic of Albania",
            "native": {
                "sqi": {
                    "official": "Republika e Shqip\u00ebris\u00eb",
                    "common": "Shqip\u00ebria"
                }
            }
        },
        "tld": [".al"],
        "cca2": "AL",
        "ccn3": "008",
        "cca3": "ALB",
        "cioc": "ALB",
        "currency": ["ALL"],
        "callingCode": ["355"],
        "capital": "Tirana",
        "altSpellings": ["AL", "Shqip\u00ebri", "Shqip\u00ebria", "Shqipnia"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "sqi": "Albanian"
        },
        "translations": {
            "cym": {"official": "Republic of Albania", "common": "Albania"},
            "deu": {"official": "Republik Albanien", "common": "Albanien"},
            "fra": {"official": "R\u00e9publique d'Albanie", "common": "Albanie"},
            "hrv": {"official": "Republika Albanija", "common": "Albanija"},
            "ita": {"official": "Repubblica d' Albania", "common": "Albania"},
            "jpn": {"official": "\u30a2\u30eb\u30d0\u30cb\u30a2\u5171\u548c\u56fd", "common": "\u30a2\u30eb\u30d0\u30cb\u30a2"},
            "nld": {"official": "Republiek Albani\u00eb", "common": "Albani\u00eb"},
            "por": {"official": "Rep\u00fablica da Alb\u00e2nia", "common": "Alb\u00e2nia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0431\u0430\u043d\u0438\u044f", "common": "\u0410\u043b\u0431\u0430\u043d\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Albania", "common": "Albania"},
            "fin": {"official": "Albanian tasavalta", "common": "Albania"}
        },
        "latlng": [41, 20],
        "demonym": "Albanian",
        "landlocked": false,
        "borders": ["MNE", "GRC", "MKD", "KOS"],
        "area": 28748
    },
    {
        "name": {
            "common": "Andorra",
            "official": "Principality of Andorra",
            "native": {
                "cat": {
                    "official": "Principat d'Andorra",
                    "common": "Andorra"
                }
            }
        },
        "tld": [".ad"],
        "cca2": "AD",
        "ccn3": "020",
        "cca3": "AND",
        "cioc": "AND",
        "currency": ["EUR"],
        "callingCode": ["376"],
        "capital": "Andorra la Vella",
        "altSpellings": ["AD", "Principality of Andorra", "Principat d'Andorra"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "cat": "Catalan"
        },
        "translations": {
            "cym": {"official": "Principality of Andorra", "common": "Andorra"},
            "deu": {"official": "F\u00fcrstentum Andorra", "common": "Andorra"},
            "fra": {"official": "Principaut\u00e9 d'Andorre", "common": "Andorre"},
            "hrv": {"official": "Kne\u017eevina Andora", "common": "Andora"},
            "ita": {"official": "Principato di Andorra", "common": "Andorra"},
            "jpn": {"official": "\u30a2\u30f3\u30c9\u30e9\u516c\u56fd", "common": "\u30a2\u30f3\u30c9\u30e9"},
            "nld": {"official": "Prinsdom Andorra", "common": "Andorra"},
            "por": {"official": "Principado de Andorra", "common": "Andorra"},
            "rus": {"official": "\u041a\u043d\u044f\u0436\u0435\u0441\u0442\u0432\u043e \u0410\u043d\u0434\u043e\u0440\u0440\u0430", "common": "\u0410\u043d\u0434\u043e\u0440\u0440\u0430"},
            "spa": {"official": "Principado de Andorra", "common": "Andorra"},
            "fin": {"official": "Andorran ruhtinaskunta", "common": "Andorra"}
        },
        "latlng": [42.5, 1.5],
        "demonym": "Andorran",
        "landlocked": true,
        "borders": ["FRA", "ESP"],
        "area": 468
    },
    {
        "name": {
            "common": "United Arab Emirates",
            "official": "United Arab Emirates",
            "native": {
                "ara": {
                    "official": "\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629",
                    "common": "\u062f\u0648\u0644\u0629 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629"
                }
            }
        },
        "tld": [".ae", "\u0627\u0645\u0627\u0631\u0627\u062a."],
        "cca2": "AE",
        "ccn3": "784",
        "cca3": "ARE",
        "cioc": "UAE",
        "currency": ["AED"],
        "callingCode": ["971"],
        "capital": "Abu Dhabi",
        "altSpellings": ["AE", "UAE", "Emirates"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "deu": {"official": "Vereinigte Arabische Emirate", "common": "Vereinigte Arabische Emirate"},
            "fra": {"official": "\u00c9mirats arabes unis", "common": "\u00c9mirats arabes unis"},
            "hrv": {"official": "Ujedinjeni Arapski Emirati", "common": "Ujedinjeni Arapski Emirati"},
            "ita": {"official": "Emirati Arabi Uniti", "common": "Emirati Arabi Uniti"},
            "jpn": {"official": "\u30a2\u30e9\u30d6\u9996\u9577\u56fd\u9023\u90a6", "common": "\u30a2\u30e9\u30d6\u9996\u9577\u56fd\u9023\u90a6"},
            "nld": {"official": "Verenigde Arabische Emiraten", "common": "Verenigde Arabische Emiraten"},
            "por": {"official": "Emirados \u00c1rabes Unidos", "common": "Emirados \u00c1rabes Unidos"},
            "rus": {"official": "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0435 \u0410\u0440\u0430\u0431\u0441\u043a\u0438\u0435 \u042d\u043c\u0438\u0440\u0430\u0442\u044b", "common": "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0451\u043d\u043d\u044b\u0435 \u0410\u0440\u0430\u0431\u0441\u043a\u0438\u0435 \u042d\u043c\u0438\u0440\u0430\u0442\u044b"},
            "spa": {"official": "Emiratos \u00c1rabes Unidos", "common": "Emiratos \u00c1rabes Unidos"},
            "fin": {"official": "Yhdistyneet arabiemiirikunnat", "common": "Arabiemiraatit"}
        },
        "latlng": [24, 54],
        "demonym": "Emirati",
        "landlocked": false,
        "borders": ["OMN", "SAU"],
        "area": 83600
    },
    {
        "name": {
            "common": "Argentina",
            "official": "Argentine Republic",
            "native": {
                "grn": {
                    "official": "Argentine Republic",
                    "common": "Argentina"
                },
                "spa": {
                    "official": "Rep\u00fablica Argentina",
                    "common": "Argentina"
                }
            }
        },
        "tld": [".ar"],
        "cca2": "AR",
        "ccn3": "032",
        "cca3": "ARG",
        "cioc": "ARG",
        "currency": ["ARS"],
        "callingCode": ["54"],
        "capital": "Buenos Aires",
        "altSpellings": ["AR", "Argentine Republic", "Rep\u00fablica Argentina"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "grn": "Guaran\u00ed",
            "spa": "Spanish"
        },
        "translations": {
            "cym": {"official": "Argentine Republic", "common": "Ariannin"},
            "deu": {"official": "Argentinische Republik", "common": "Argentinien"},
            "fra": {"official": "R\u00e9publique argentine", "common": "Argentine"},
            "hrv": {"official": "Argentinski Republika", "common": "Argentina"},
            "ita": {"official": "Repubblica Argentina", "common": "Argentina"},
            "jpn": {"official": "\u30a2\u30eb\u30bc\u30f3\u30c1\u30f3\u5171\u548c\u56fd", "common": "\u30a2\u30eb\u30bc\u30f3\u30c1\u30f3"},
            "nld": {"official": "Argentijnse Republiek", "common": "Argentini\u00eb"},
            "por": {"official": "Rep\u00fablica Argentina", "common": "Argentina"},
            "rus": {"official": "\u0410\u0440\u0433\u0435\u043d\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0410\u0440\u0433\u0435\u043d\u0442\u0438\u043d\u0430"},
            "spa": {"official": "Rep\u00fablica Argentina", "common": "Argentina"},
            "fin": {"official": "Argentiinan tasavalta", "common": "Argentiina"}
        },
        "latlng": [-34, -64],
        "demonym": "Argentinean",
        "landlocked": false,
        "borders": ["BOL", "BRA", "CHL", "PRY", "URY"],
        "area": 2780400
    },
    {
        "name": {
            "common": "Armenia",
            "official": "Republic of Armenia",
            "native": {
                "hye": {
                    "official": "\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576\u056b \u0540\u0561\u0576\u0580\u0561\u057a\u0565\u057f\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
                    "common": "\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576"
                },
                "rus": {
                    "official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0440\u043c\u0435\u043d\u0438\u044f",
                    "common": "\u0410\u0440\u043c\u0435\u043d\u0438\u044f"
                }
            }
        },
        "tld": [".am"],
        "cca2": "AM",
        "ccn3": "051",
        "cca3": "ARM",
        "cioc": "ARM",
        "currency": ["AMD"],
        "callingCode": ["374"],
        "capital": "Yerevan",
        "altSpellings": ["AM", "Hayastan", "Republic of Armenia", "\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576\u056b \u0540\u0561\u0576\u0580\u0561\u057a\u0565\u057f\u0578\u0582\u0569\u0575\u0578\u0582\u0576"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "hye": "Armenian",
            "rus": "Russian"
        },
        "translations": {
            "cym": {"official": "Republic of Armenia", "common": "Armenia"},
            "deu": {"official": "Republik Armenien", "common": "Armenien"},
            "fra": {"official": "R\u00e9publique d'Arm\u00e9nie", "common": "Arm\u00e9nie"},
            "hrv": {"official": "Republika Armenija", "common": "Armenija"},
            "ita": {"official": "Repubblica di Armenia", "common": "Armenia"},
            "jpn": {"official": "\u30a2\u30eb\u30e1\u30cb\u30a2\u5171\u548c\u56fd", "common": "\u30a2\u30eb\u30e1\u30cb\u30a2"},
            "nld": {"official": "Republiek Armeni\u00eb", "common": "Armeni\u00eb"},
            "por": {"official": "Rep\u00fablica da Arm\u00e9nia", "common": "Arm\u00e9nia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0440\u043c\u0435\u043d\u0438\u044f", "common": "\u0410\u0440\u043c\u0435\u043d\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Armenia", "common": "Armenia"},
            "fin": {"official": "Armenian tasavalta", "common": "Armenia"}
        },
        "latlng": [40, 45],
        "demonym": "Armenian",
        "landlocked": true,
        "borders": ["AZE", "GEO", "IRN", "TUR"],
        "area": 29743
    },
    {
        "name": {
            "common": "American Samoa",
            "official": "American Samoa",
            "native": {
                "eng": {
                    "official": "American Samoa",
                    "common": "American Samoa"
                },
                "smo": {
                    "official": "S\u0101moa Amelika",
                    "common": "S\u0101moa Amelika"
                }
            }
        },
        "tld": [".as"],
        "cca2": "AS",
        "ccn3": "016",
        "cca3": "ASM",
        "cioc": "ASA",
        "currency": ["USD"],
        "callingCode": ["1684"],
        "capital": "Pago Pago",
        "altSpellings": ["AS", "Amerika S\u0101moa", "Amelika S\u0101moa", "S\u0101moa Amelika"],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "smo": "Samoan"
        },
        "translations": {
            "deu": {"official": "Amerikanisch-Samoa", "common": "Amerikanisch-Samoa"},
            "fra": {"official": "Samoa am\u00e9ricaines", "common": "Samoa am\u00e9ricaines"},
            "hrv": {"official": "ameri\u010dka Samoa", "common": "Ameri\u010dka Samoa"},
            "ita": {"official": "Samoa americane", "common": "Samoa Americane"},
            "jpn": {"official": "\u7c73\u30b5\u30e2\u30a2", "common": "\u30a2\u30e1\u30ea\u30ab\u9818\u30b5\u30e2\u30a2"},
            "nld": {"official": "Amerikaans Samoa", "common": "Amerikaans Samoa"},
            "por": {"official": "Samoa americana", "common": "Samoa Americana"},
            "rus": {"official": "\u0430\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0435 \u0421\u0430\u043c\u043e\u0430", "common": "\u0410\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0435 \u0421\u0430\u043c\u043e\u0430"},
            "spa": {"official": "Samoa Americana", "common": "Samoa Americana"},
            "fin": {"official": "Amerikan Samoa", "common": "Amerikan Samoa"}
        },
        "latlng": [-14.33333333, -170],
        "demonym": "American Samoan",
        "landlocked": false,
        "borders": [],
        "area": 199
    },
    {
        "name": {
            "common": "Antarctica",
            "official": "Antarctica",
            "native": {}
        },
        "tld": [".aq"],
        "cca2": "AQ",
        "ccn3": "010",
        "cca3": "ATA",
        "cioc": "",
        "currency": [],
        "callingCode": [],
        "capital": "",
        "altSpellings": ["AQ"],
        "region": "",
        "subregion": "",
        "languages": {},
        "translations": {
            "cym": {"official": "Antarctica", "common": "Antarctica"},
            "deu": {"official": "Antarktika", "common": "Antarktis"},
            "fra": {"official": "Antarctique", "common": "Antarctique"},
            "hrv": {"official": "Antarktika", "common": "Antarktika"},
            "ita": {"official": "Antartide", "common": "Antartide"},
            "jpn": {"official": "\u5357\u6975\u5927\u9678", "common": "\u5357\u6975"},
            "nld": {"official": "Antarctica", "common": "Antarctica"},
            "por": {"official": "Ant\u00e1rtica", "common": "Ant\u00e1rtida"},
            "rus": {"official": "\u0410\u043d\u0442\u0430\u0440\u043a\u0442\u0438\u0434\u0430", "common": "\u0410\u043d\u0442\u0430\u0440\u043a\u0442\u0438\u0434\u0430"},
            "spa": {"official": "Ant\u00e1rtida", "common": "Ant\u00e1rtida"},
            "fin": {"official": "Etel\u00e4manner", "common": "Etel\u00e4manner"}
        },
        "latlng": [-90, 0],
        "demonym": "Antarctican",
        "landlocked": false,
        "borders": [],
        "area": 14000000
    },
    {
        "name": {
            "common": "French Southern and Antarctic Lands",
            "official": "Territory of the French Southern and Antarctic Lands",
            "native": {
                "fra": {
                    "official": "Territoire du Sud fran\u00e7aises et des terres de l'Antarctique",
                    "common": "Territoire des Terres australes et antarctiques fran\u00e7aises"
                }
            }
        },
        "tld": [".tf"],
        "cca2": "TF",
        "ccn3": "260",
        "cca3": "ATF",
        "cioc": "",
        "currency": ["EUR"],
        "callingCode": [],
        "capital": "Port-aux-Fran\u00e7ais",
        "altSpellings": ["TF", "French Southern Territories"],
        "region": "",
        "subregion": "",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Gebiet der Franz\u00f6sisch S\u00fcd- und Antarktisgebiete", "common": "Franz\u00f6sische S\u00fcd- und Antarktisgebiete"},
            "fra": {"official": "Territoire de la Fran\u00e7aise Terres australes et antarctiques", "common": "Terres australes et antarctiques fran\u00e7aises"},
            "hrv": {"official": "Teritoriju Francuski ju\u017eni i antarkti\u010dki teritoriji", "common": "Francuski ju\u017eni i antarkti\u010dki teritoriji"},
            "ita": {"official": "Territorio della australi e antartiche francesi Terre", "common": "Territori Francesi del Sud"},
            "jpn": {"official": "\u30d5\u30e9\u30f3\u30b9\u9818\u5357\u65b9\u00b7\u5357\u6975\u5730\u57df\u306e\u9818\u571f", "common": "\u30d5\u30e9\u30f3\u30b9\u9818\u5357\u65b9\u30fb\u5357\u6975\u5730\u57df"},
            "nld": {"official": "Grondgebied van de Franse Zuidelijke en Antarctische gebieden", "common": "Franse Gebieden in de zuidelijke Indische Oceaan"},
            "por": {"official": "Territ\u00f3rio do Sul e Ant\u00e1rtica Francesa", "common": "Terras Austrais e Ant\u00e1rticas Francesas"},
            "rus": {"official": "\u0422\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044f \u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0435 \u042e\u0436\u043d\u044b\u0435 \u0438 \u0410\u043d\u0442\u0430\u0440\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u0435\u043c\u043b\u0438", "common": "\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0435 \u042e\u0436\u043d\u044b\u0435 \u0438 \u0410\u043d\u0442\u0430\u0440\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438"},
            "spa": {"official": "Territorio del Franc\u00e9s Tierras australes y ant\u00e1rticas", "common": "Tierras Australes y Ant\u00e1rticas Francesas"},
            "fin": {"official": "Ranskan etel\u00e4iset ja antarktiset alueet", "common": "Ranskan etel\u00e4iset ja antarktiset alueet"}
        },
        "latlng": [-49.25, 69.167],
        "demonym": "French",
        "landlocked": false,
        "borders": [],
        "area": 7747
    },
    {
        "name": {
            "common": "Antigua and Barbuda",
            "official": "Antigua and Barbuda",
            "native": {
                "eng": {
                    "official": "Antigua and Barbuda",
                    "common": "Antigua and Barbuda"
                }
            }
        },
        "tld": [".ag"],
        "cca2": "AG",
        "ccn3": "028",
        "cca3": "ATG",
        "cioc": "ANT",
        "currency": ["XCD"],
        "callingCode": ["1268"],
        "capital": "Saint John's",
        "altSpellings": ["AG"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "cym": {"official": "Antigua and Barbuda", "common": "Antigwa a Barbiwda"},
            "deu": {"official": "Antigua und Barbuda", "common": "Antigua und Barbuda"},
            "fra": {"official": "Antigua -et-Barbuda", "common": "Antigua-et-Barbuda"},
            "hrv": {"official": "Antigva i Barbuda", "common": "Antigva i Barbuda"},
            "ita": {"official": "Antigua e Barbuda", "common": "Antigua e Barbuda"},
            "jpn": {"official": "\u30a2\u30f3\u30c1\u30b0\u30a2\u30d0\u30fc\u30d6\u30fc\u30c0", "common": "\u30a2\u30f3\u30c6\u30a3\u30b0\u30a2\u30fb\u30d0\u30fc\u30d6\u30fc\u30c0"},
            "nld": {"official": "Antigua en Barbuda", "common": "Antigua en Barbuda"},
            "por": {"official": "Antigua e Barbuda", "common": "Ant\u00edgua e Barbuda"},
            "rus": {"official": "\u0410\u043d\u0442\u0438\u0433\u0443\u0430 \u0438 \u0411\u0430\u0440\u0431\u0443\u0434\u0430", "common": "\u0410\u043d\u0442\u0438\u0433\u0443\u0430 \u0438 \u0411\u0430\u0440\u0431\u0443\u0434\u0430"},
            "spa": {"official": "Antigua y Barbuda", "common": "Antigua y Barbuda"},
            "fin": {"official": "Antigua ja Barbuda", "common": "Antigua ja Barbuda"}
        },
        "latlng": [17.05, -61.8],
        "demonym": "Antiguan, Barbudan",
        "landlocked": false,
        "borders": [],
        "area": 442
    },
    {
        "name": {
            "common": "Australia",
            "official": "Commonwealth of Australia",
            "native": {
                "eng": {
                    "official": "Commonwealth of Australia",
                    "common": "Australia"
                }
            }
        },
        "tld": [".au"],
        "cca2": "AU",
        "ccn3": "036",
        "cca3": "AUS",
        "cioc": "AUS",
        "currency": ["AUD"],
        "callingCode": ["61"],
        "capital": "Canberra",
        "altSpellings": ["AU"],
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "cym": {"official": "Commonwealth of Australia", "common": "Awstralia"},
            "deu": {"official": "Commonwealth Australien", "common": "Australien"},
            "fra": {"official": "Commonwealth d'Australie", "common": "Australie"},
            "hrv": {"official": "Commonwealth of Australia", "common": "Australija"},
            "ita": {"official": "Commonwealth of Australia", "common": "Australia"},
            "jpn": {"official": "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u9023\u90a6", "common": "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2"},
            "nld": {"official": "Gemenebest van Australi\u00eb", "common": "Australi\u00eb"},
            "por": {"official": "Comunidade da Austr\u00e1lia", "common": "Austr\u00e1lia"},
            "rus": {"official": "\u0421\u043e\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043e \u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u0438", "common": "\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u044f"},
            "spa": {"official": "Mancomunidad de Australia", "common": "Australia"},
            "fin": {"official": "Australian liittovaltio", "common": "Australia"}
        },
        "latlng": [-27, 133],
        "demonym": "Australian",
        "landlocked": false,
        "borders": [],
        "area": 7692024
    },
    {
        "name": {
            "common": "Austria",
            "official": "Republic of Austria",
            "native": {
                "bar": {
                    "official": "Republik \u00d6sterreich",
                    "common": "\u00d6sterreich"
                }
            }
        },
        "tld": [".at"],
        "cca2": "AT",
        "ccn3": "040",
        "cca3": "AUT",
        "cioc": "AUT",
        "currency": ["EUR"],
        "callingCode": ["43"],
        "capital": "Vienna",
        "altSpellings": ["AT", "Osterreich", "Oesterreich"],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "bar": "Austro-Bavarian German"
        },
        "translations": {
            "cym": {"official": "Republic of Austria", "common": "Awstria"},
            "deu": {"official": "Republik \u00d6sterreich", "common": "\u00d6sterreich"},
            "fra": {"official": "R\u00e9publique d'Autriche", "common": "Autriche"},
            "hrv": {"official": "Republika Austrija", "common": "Austrija"},
            "ita": {"official": "Repubblica d'Austria", "common": "Austria"},
            "jpn": {"official": "\u30aa\u30fc\u30b9\u30c8\u30ea\u30a2\u5171\u548c\u56fd", "common": "\u30aa\u30fc\u30b9\u30c8\u30ea\u30a2"},
            "nld": {"official": "Republiek Oostenrijk", "common": "Oostenrijk"},
            "por": {"official": "Rep\u00fablica da \u00c1ustria", "common": "\u00c1ustria"},
            "rus": {"official": "\u0410\u0432\u0441\u0442\u0440\u0438\u0439\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0410\u0432\u0441\u0442\u0440\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Austria", "common": "Austria"},
            "fin": {"official": "It\u00e4vallan tasavalta", "common": "It\u00e4valta"}
        },
        "latlng": [47.33333333, 13.33333333],
        "demonym": "Austrian",
        "landlocked": true,
        "borders": ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"],
        "area": 83871
    },
    {
        "name": {
            "common": "Azerbaijan",
            "official": "Republic of Azerbaijan",
            "native": {
                "aze": {
                    "official": "Az\u0259rbaycan Respublikas\u0131",
                    "common": "Az\u0259rbaycan"
                },
                "rus": {
                    "official": "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                    "common": "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d"
                }
            }
        },
        "tld": [".az"],
        "cca2": "AZ",
        "ccn3": "031",
        "cca3": "AZE",
        "cioc": "AZE",
        "currency": ["AZN"],
        "callingCode": ["994"],
        "capital": "Baku",
        "altSpellings": ["AZ", "Republic of Azerbaijan", "Az\u0259rbaycan Respublikas\u0131"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "aze": "Azerbaijani",
            "rus": "Russian"
        },
        "translations": {
            "cym": {"official": "Republic of Azerbaijan", "common": "Aserbaijan"},
            "deu": {"official": "Republik Aserbaidschan", "common": "Aserbaidschan"},
            "fra": {"official": "R\u00e9publique d'Azerba\u00efdjan", "common": "Azerba\u00efdjan"},
            "hrv": {"official": "Republika Azerbajd\u017ean", "common": "Azerbajd\u017ean"},
            "ita": {"official": "Repubblica dell'Azerbaigian", "common": "Azerbaijan"},
            "jpn": {"official": "\u30a2\u30bc\u30eb\u30d0\u30a4\u30b8\u30e3\u30f3\u5171\u548c\u56fd", "common": "\u30a2\u30bc\u30eb\u30d0\u30a4\u30b8\u30e3\u30f3"},
            "nld": {"official": "Republiek Azerbeidzjan", "common": "Azerbeidzjan"},
            "por": {"official": "Rep\u00fablica do Azerbaij\u00e3o", "common": "Azerbeij\u00e3o"},
            "rus": {"official": "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d"},
            "spa": {"official": "Rep\u00fablica de Azerbaiy\u00e1n", "common": "Azerbaiy\u00e1n"},
            "fin": {"official": "Azerbaidzanin tasavalta", "common": "Azerbaidzan"}
        },
        "latlng": [40.5, 47.5],
        "demonym": "Azerbaijani",
        "landlocked": true,
        "borders": ["ARM", "GEO", "IRN", "RUS", "TUR"],
        "area": 86600
    },
    {
        "name": {
            "common": "Burundi",
            "official": "Republic of Burundi",
            "native": {
                "fra": {
                    "official": "R\u00e9publique du Burundi",
                    "common": "Burundi"
                },
                "run": {
                    "official": "Republika y'Uburundi ",
                    "common": "Uburundi"
                }
            }
        },
        "tld": [".bi"],
        "cca2": "BI",
        "ccn3": "108",
        "cca3": "BDI",
        "cioc": "BDI",
        "currency": ["BIF"],
        "callingCode": ["257"],
        "capital": "Bujumbura",
        "altSpellings": ["BI", "Republic of Burundi", "Republika y'Uburundi", "R\u00e9publique du Burundi"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "fra": "French",
            "run": "Kirundi"
        },
        "translations": {
            "cym": {"official": "Republic of Burundi", "common": "Bwrwndi"},
            "deu": {"official": "Republik Burundi", "common": "Burundi"},
            "fra": {"official": "R\u00e9publique du Burundi", "common": "Burundi"},
            "hrv": {"official": "Burundi", "common": "Burundi"},
            "ita": {"official": "Repubblica del Burundi", "common": "Burundi"},
            "jpn": {"official": "\u30d6\u30eb\u30f3\u30b8\u5171\u548c\u56fd", "common": "\u30d6\u30eb\u30f3\u30b8"},
            "nld": {"official": "Republiek Burundi", "common": "Burundi"},
            "por": {"official": "Rep\u00fablica do Burundi", "common": "Burundi"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0443\u0440\u0443\u043d\u0434\u0438", "common": "\u0411\u0443\u0440\u0443\u043d\u0434\u0438"},
            "spa": {"official": "Rep\u00fablica de Burundi", "common": "Burundi"},
            "fin": {"official": "Burundin tasavalta", "common": "Burundi"}
        },
        "latlng": [-3.5, 30],
        "demonym": "Burundian",
        "landlocked": true,
        "borders": ["COD", "RWA", "TZA"],
        "area": 27834
    },
    {
        "name": {
            "common": "Belgium",
            "official": "Kingdom of Belgium",
            "native": {
                "deu": {
                    "official": "K\u00f6nigreich Belgien",
                    "common": "Belgien"
                },
                "fra": {
                    "official": "Royaume de Belgique",
                    "common": "Belgique"
                },
                "nld": {
                    "official": "Koninkrijk Belgi\u00eb",
                    "common": "Belgi\u00eb"
                }
            }
        },
        "tld": [".be"],
        "cca2": "BE",
        "ccn3": "056",
        "cca3": "BEL",
        "cioc": "BEL",
        "currency": ["EUR"],
        "callingCode": ["32"],
        "capital": "Brussels",
        "altSpellings": ["BE", "Belgi\u00eb", "Belgie", "Belgien", "Belgique", "Kingdom of Belgium", "Koninkrijk Belgi\u00eb", "Royaume de Belgique", "K\u00f6nigreich Belgien"],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "deu": "German",
            "fra": "French",
            "nld": "Dutch"
        },
        "translations": {
            "cym": {"official": "Kingdom of Belgium", "common": "Gwlad Belg"},
            "deu": {"official": "K\u00f6nigreich Belgien", "common": "Belgien"},
            "fra": {"official": "Royaume de Belgique", "common": "Belgique"},
            "hrv": {"official": "Kraljevina Belgija", "common": "Belgija"},
            "ita": {"official": "Regno del Belgio", "common": "Belgio"},
            "jpn": {"official": "\u30d9\u30eb\u30ae\u30fc\u738b\u56fd", "common": "\u30d9\u30eb\u30ae\u30fc"},
            "nld": {"official": "Koninkrijk Belgi\u00eb", "common": "Belgi\u00eb"},
            "por": {"official": "Reino da B\u00e9lgica", "common": "B\u00e9lgica"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u0411\u0435\u043b\u044c\u0433\u0438\u044f", "common": "\u0411\u0435\u043b\u044c\u0433\u0438\u044f"},
            "spa": {"official": "Reino de B\u00e9lgica", "common": "B\u00e9lgica"},
            "fin": {"official": "Belgian kuningaskunta", "common": "Belgia"}
        },
        "latlng": [50.83333333, 4],
        "demonym": "Belgian",
        "landlocked": false,
        "borders": ["FRA", "DEU", "LUX", "NLD"],
        "area": 30528
    },
    {
        "name": {
            "common": "Benin",
            "official": "Republic of Benin",
            "native": {
                "fra": {
                    "official": "R\u00e9publique du B\u00e9nin",
                    "common": "B\u00e9nin"
                }
            }
        },
        "tld": [".bj"],
        "cca2": "BJ",
        "ccn3": "204",
        "cca3": "BEN",
        "cioc": "BEN",
        "currency": ["XOF"],
        "callingCode": ["229"],
        "capital": "Porto-Novo",
        "altSpellings": ["BJ", "Republic of Benin", "R\u00e9publique du B\u00e9nin"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "cym": {"official": "Republic of Benin", "common": "Benin"},
            "deu": {"official": "Republik Benin", "common": "Benin"},
            "fra": {"official": "R\u00e9publique du B\u00e9nin", "common": "B\u00e9nin"},
            "hrv": {"official": "Republika Benin", "common": "Benin"},
            "ita": {"official": "Repubblica del Benin", "common": "Benin"},
            "jpn": {"official": "\u30d9\u30ca\u30f3\u5171\u548c\u56fd", "common": "\u30d9\u30ca\u30f3"},
            "nld": {"official": "Republiek Benin", "common": "Benin"},
            "por": {"official": "Rep\u00fablica do Benin", "common": "Benin"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0435\u043d\u0438\u043d", "common": "\u0411\u0435\u043d\u0438\u043d"},
            "spa": {"official": "Rep\u00fablica de Benin", "common": "Ben\u00edn"},
            "fin": {"official": "Beninin tasavalta", "common": "Benin"}
        },
        "latlng": [9.5, 2.25],
        "demonym": "Beninese",
        "landlocked": false,
        "borders": ["BFA", "NER", "NGA", "TGO"],
        "area": 112622
    },
    {
        "name": {
            "common": "Burkina Faso",
            "official": "Burkina Faso",
            "native": {
                "fra": {
                    "official": "Burkina Faso",
                    "common": "Burkina Faso"
                }
            }
        },
        "tld": [".bf"],
        "cca2": "BF",
        "ccn3": "854",
        "cca3": "BFA",
        "cioc": "BUR",
        "currency": ["XOF"],
        "callingCode": ["226"],
        "capital": "Ouagadougou",
        "altSpellings": ["BF"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "cym": {"official": "Burkina Faso", "common": "Burkina Faso"},
            "deu": {"official": "Burkina Faso", "common": "Burkina Faso"},
            "fra": {"official": "Burkina Faso", "common": "Burkina Faso"},
            "hrv": {"official": "Burkina Faso", "common": "Burkina Faso"},
            "ita": {"official": "Burkina Faso", "common": "Burkina Faso"},
            "jpn": {"official": "\u30d6\u30eb\u30ad\u30ca\u30d5\u30a1\u30bd", "common": "\u30d6\u30eb\u30ad\u30ca\u30d5\u30a1\u30bd"},
            "nld": {"official": "Burkina Faso", "common": "Burkina Faso"},
            "por": {"official": "Burkina Faso", "common": "Burkina Faso"},
            "rus": {"official": "\u0411\u0443\u0440\u043a\u0438\u043d\u0430 -\u0424\u0430\u0441\u043e", "common": "\u0411\u0443\u0440\u043a\u0438\u043d\u0430-\u0424\u0430\u0441\u043e"},
            "spa": {"official": "Burkina Faso", "common": "Burkina Faso"},
            "fin": {"official": "Burkina Faso", "common": "Burkina Faso"}
        },
        "latlng": [13, -2],
        "demonym": "Burkinabe",
        "landlocked": true,
        "borders": ["BEN", "CIV", "GHA", "MLI", "NER", "TGO"],
        "area": 272967
    },
    {
        "name": {
            "common": "Bangladesh",
            "official": "People's Republic of Bangladesh",
            "native": {
                "ben": {
                    "official": "\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6 \u0997\u09a3\u09aa\u09cd\u09b0\u099c\u09be\u09a4\u09a8\u09cd\u09a4\u09cd\u09b0\u09c0",
                    "common": "\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6"
                }
            }
        },
        "tld": [".bd"],
        "cca2": "BD",
        "ccn3": "050",
        "cca3": "BGD",
        "cioc": "BAN",
        "currency": ["BDT"],
        "callingCode": ["880"],
        "capital": "Dhaka",
        "altSpellings": ["BD", "People's Republic of Bangladesh", "G\u00f4n\u00f4pr\u00f4jat\u00f4ntri Bangladesh"],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "ben": "Bengali"
        },
        "translations": {
            "cym": {"official": "People's Republic of Bangladesh", "common": "Bangladesh"},
            "deu": {"official": "Volksrepublik Bangladesch", "common": "Bangladesch"},
            "fra": {"official": "La R\u00e9publique populaire du Bangladesh", "common": "Bangladesh"},
            "hrv": {"official": "Narodna Republika Banglade\u0161", "common": "Banglade\u0161"},
            "ita": {"official": "Repubblica popolare del Bangladesh", "common": "Bangladesh"},
            "jpn": {"official": "\u30d0\u30f3\u30b0\u30e9\u30c7\u30b7\u30e5\u4eba\u6c11\u5171\u548c\u56fd", "common": "\u30d0\u30f3\u30b0\u30e9\u30c7\u30b7\u30e5"},
            "nld": {"official": "Volksrepubliek Bangladesh", "common": "Bangladesh"},
            "por": {"official": "Rep\u00fablica Popular do Bangladesh", "common": "Bangladesh"},
            "rus": {"official": "\u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u043d\u0433\u043b\u0430\u0434\u0435\u0448", "common": "\u0411\u0430\u043d\u0433\u043b\u0430\u0434\u0435\u0448"},
            "spa": {"official": "Rep\u00fablica Popular de Bangladesh", "common": "Bangladesh"},
            "fin": {"official": "Bangladeshin kansantasavalta", "common": "Bangladesh"}
        },
        "latlng": [24, 90],
        "demonym": "Bangladeshi",
        "landlocked": false,
        "borders": ["MMR", "IND"],
        "area": 147570
    },
    {
        "name": {
            "common": "Bulgaria",
            "official": "Republic of Bulgaria",
            "native": {
                "bul": {
                    "official": "\u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f",
                    "common": "\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f"
                }
            }
        },
        "tld": [".bg"],
        "cca2": "BG",
        "ccn3": "100",
        "cca3": "BGR",
        "cioc": "BUL",
        "currency": ["BGN"],
        "callingCode": ["359"],
        "capital": "Sofia",
        "altSpellings": ["BG", "Republic of Bulgaria", "\u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f"],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "bul": "Bulgarian"
        },
        "translations": {
            "cym": {"official": "Republic of Bulgaria", "common": "Bwlgaria"},
            "deu": {"official": "Republik Bulgarien", "common": "Bulgarien"},
            "fra": {"official": "R\u00e9publique de Bulgarie", "common": "Bulgarie"},
            "hrv": {"official": "Republika Bugarska", "common": "Bugarska"},
            "ita": {"official": "Repubblica di Bulgaria", "common": "Bulgaria"},
            "jpn": {"official": "\u30d6\u30eb\u30ac\u30ea\u30a2\u5171\u548c\u56fd", "common": "\u30d6\u30eb\u30ac\u30ea\u30a2"},
            "nld": {"official": "Republiek Bulgarije", "common": "Bulgarije"},
            "por": {"official": "Rep\u00fablica da Bulg\u00e1ria", "common": "Bulg\u00e1ria"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u043e\u043b\u0433\u0430\u0440\u0438\u044f", "common": "\u0411\u043e\u043b\u0433\u0430\u0440\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Bulgaria", "common": "Bulgaria"},
            "fin": {"official": "Bulgarian tasavalta", "common": "Bulgaria"}
        },
        "latlng": [43, 25],
        "demonym": "Bulgarian",
        "landlocked": false,
        "borders": ["GRC", "MKD", "ROU", "SRB", "TUR"],
        "area": 110879
    },
    {
        "name": {
            "common": "Bahrain",
            "official": "Kingdom of Bahrain",
            "native": {
                "ara": {
                    "official": "\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0628\u062d\u0631\u064a\u0646",
                    "common": "\u200f\u0627\u0644\u0628\u062d\u0631\u064a\u0646"
                }
            }
        },
        "tld": [".bh"],
        "cca2": "BH",
        "ccn3": "048",
        "cca3": "BHR",
        "cioc": "BRN",
        "currency": ["BHD"],
        "callingCode": ["973"],
        "capital": "Manama",
        "altSpellings": ["BH", "Kingdom of Bahrain", "Mamlakat al-Ba\u1e25rayn"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "cym": {"official": "Kingdom of Bahrain", "common": "Bahrain"},
            "deu": {"official": "K\u00f6nigreich Bahrain", "common": "Bahrain"},
            "fra": {"official": "Royaume de Bahre\u00efn", "common": "Bahre\u00efn"},
            "hrv": {"official": "Kraljevina Bahrein", "common": "Bahrein"},
            "ita": {"official": "Regno del Bahrain", "common": "Bahrein"},
            "jpn": {"official": "\u30d0\u30fc\u30ec\u30fc\u30f3\u738b\u56fd", "common": "\u30d0\u30fc\u30ec\u30fc\u30f3"},
            "nld": {"official": "Koninkrijk Bahrein", "common": "Bahrein"},
            "por": {"official": "Reino do Bahrein", "common": "Bahrein"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u0411\u0430\u0445\u0440\u0435\u0439\u043d", "common": "\u0411\u0430\u0445\u0440\u0435\u0439\u043d"},
            "spa": {"official": "Reino de Bahrein", "common": "Bahrein"},
            "fin": {"official": "Bahrainin kuningaskunta", "common": "Bahrain"}
        },
        "latlng": [26, 50.55],
        "demonym": "Bahraini",
        "landlocked": false,
        "borders": [],
        "area": 765
    },
    {
        "name": {
            "common": "Bahamas",
            "official": "Commonwealth of the Bahamas",
            "native": {
                "eng": {
                    "official": "Commonwealth of the Bahamas",
                    "common": "Bahamas"
                }
            }
        },
        "tld": [".bs"],
        "cca2": "BS",
        "ccn3": "044",
        "cca3": "BHS",
        "cioc": "BAH",
        "currency": ["BSD"],
        "callingCode": ["1242"],
        "capital": "Nassau",
        "altSpellings": ["BS", "Commonwealth of the Bahamas"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "cym": {"official": "Commonwealth of the Bahamas", "common": "Bahamas"},
            "deu": {"official": "Commonwealth der Bahamas", "common": "Bahamas"},
            "fra": {"official": "Commonwealth des Bahamas", "common": "Bahamas"},
            "hrv": {"official": "Zajednica Bahama", "common": "Bahami"},
            "ita": {"official": "Commonwealth delle Bahamas", "common": "Bahamas"},
            "jpn": {"official": "\u30d0\u30cf\u30de", "common": "\u30d0\u30cf\u30de"},
            "nld": {"official": "Gemenebest van de Bahama's", "common": "Bahama\u2019s"},
            "por": {"official": "Comunidade das Bahamas", "common": "Bahamas"},
            "rus": {"official": "\u0421\u043e\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043e \u0411\u0430\u0433\u0430\u043c\u0441\u043a\u0438\u0445 \u041e\u0441\u0442\u0440\u043e\u0432\u043e\u0432", "common": "\u0411\u0430\u0433\u0430\u043c\u0441\u043a\u0438\u0435 \u041e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "Commonwealth de las Bahamas", "common": "Bahamas"},
            "fin": {"official": "Bahaman liittovaltio", "common": "Bahamasaaret"}
        },
        "latlng": [24.25, -76],
        "demonym": "Bahamian",
        "landlocked": false,
        "borders": [],
        "area": 13943
    },
    {
        "name": {
            "common": "Bosnia and Herzegovina",
            "official": "Bosnia and Herzegovina",
            "native": {
                "bos": {
                    "official": "Bosna i Hercegovina",
                    "common": "Bosna i Hercegovina"
                },
                "hrv": {
                    "official": "Bosna i Hercegovina",
                    "common": "Bosna i Hercegovina"
                },
                "srp": {
                    "official": "\u0411\u043e\u0441\u043da \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430",
                    "common": "\u0411\u043e\u0441\u043da \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430"
                }
            }
        },
        "tld": [".ba"],
        "cca2": "BA",
        "ccn3": "070",
        "cca3": "BIH",
        "cioc": "BIH",
        "currency": ["BAM"],
        "callingCode": ["387"],
        "capital": "Sarajevo",
        "altSpellings": ["BA", "Bosnia-Herzegovina", "\u0411\u043e\u0441\u043d\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "bos": "Bosnian",
            "hrv": "Croatian",
            "srp": "Serbian"
        },
        "translations": {
            "cym": {"official": "Bosnia and Herzegovina", "common": "Bosnia a Hercegovina"},
            "deu": {"official": "Bosnien und Herzegowina", "common": "Bosnien und Herzegowina"},
            "fra": {"official": "Bosnie- Herz\u00e9govine", "common": "Bosnie-Herz\u00e9govine"},
            "hrv": {"official": "Bosna i Hercegovina", "common": "Bosna i Hercegovina"},
            "ita": {"official": "Bosnia-Erzegovina", "common": "Bosnia ed Erzegovina"},
            "jpn": {"official": "\u30dc\u30b9\u30cb\u30a2\u00b7\u30d8\u30eb\u30c4\u30a7\u30b4\u30d3\u30ca", "common": "\u30dc\u30b9\u30cb\u30a2\u30fb\u30d8\u30eb\u30c4\u30a7\u30b4\u30d3\u30ca"},
            "nld": {"official": "Bosni\u00eb-Herzegovina", "common": "Bosni\u00eb en Herzegovina"},
            "por": {"official": "B\u00f3snia e Herzegovina", "common": "B\u00f3snia e Herzegovina"},
            "rus": {"official": "\u0411\u043e\u0441\u043d\u0438\u044f \u0438 \u0413\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430", "common": "\u0411\u043e\u0441\u043d\u0438\u044f \u0438 \u0413\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430"},
            "spa": {"official": "Bosnia y Herzegovina", "common": "Bosnia y Herzegovina"},
            "fin": {"official": "Bosnia ja Hertsegovina", "common": "Bosnia ja Hertsegovina"}
        },
        "latlng": [44, 18],
        "demonym": "Bosnian, Herzegovinian",
        "landlocked": false,
        "borders": ["HRV", "MNE", "SRB"],
        "area": 51209
    },
    {
        "name": {
            "common": "Saint Barth\u00e9lemy",
            "official": "Collectivity of Saint Barth\u00e9lemySaint Barth\u00e9lemy",
            "native": {
                "fra": {
                    "official": "Collectivit\u00e9 de Saint Barth\u00e9lemy Barth\u00e9lemySaint",
                    "common": "Saint-Barth\u00e9lemy"
                }
            }
        },
        "tld": [".bl"],
        "cca2": "BL",
        "ccn3": "652",
        "cca3": "BLM",
        "cioc": "",
        "currency": ["EUR"],
        "callingCode": ["590"],
        "capital": "Gustavia",
        "altSpellings": ["BL", "St. Barthelemy", "Collectivity of Saint Barth\u00e9lemy", "Collectivit\u00e9 de Saint-Barth\u00e9lemy"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Gebietsk\u00f6rperschaft Saint -Barth\u00e9lemy Barth\u00e9lemySaint", "common": "Saint-Barth\u00e9lemy"},
            "fra": {"official": "Collectivit\u00e9 de Saint Barth\u00e9lemy Barth\u00e9lemySaint", "common": "Saint-Barth\u00e9lemy"},
            "hrv": {"official": "Kolektivnost sv Barth\u00e9lemySaint Barth\u00e9lemy", "common": "Saint Barth\u00e9lemy"},
            "ita": {"official": "Collettivit\u00e0 di Saint Barth\u00e9lemy Barth\u00e9lemySaint", "common": "Antille Francesi"},
            "jpn": {"official": "\u30b5\u30f3\u00b7\u30d0\u30eb\u30c6\u30eb\u30df\u30fc\u5cf6Barth\u00e9lemySaint\u306e\u96c6\u5408\u4f53", "common": "\u30b5\u30f3\u30fb\u30d0\u30eb\u30c6\u30eb\u30df\u30fc"},
            "nld": {"official": "Gemeenschap Saint Barth\u00e9lemySaint Barth\u00e9lemy", "common": "Saint Barth\u00e9lemy"},
            "por": {"official": "Coletividade de Saint Barth\u00e9lemy Barth\u00e9lemySaint", "common": "S\u00e3o Bartolomeu"},
            "rus": {"official": "\u041a\u043e\u043b\u043b\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0421\u0430\u043d\u043a\u0442 -\u0411\u0430\u0440\u0442\u0435\u043b\u044c\u043c\u0438\u0421\u0435\u043d\u0442 \u0411\u0430\u0440\u0442\u0435\u043b\u0435\u043c\u0438", "common": "\u0421\u0435\u043d-\u0411\u0430\u0440\u0442\u0435\u043b\u0435\u043c\u0438"},
            "spa": {"official": "Colectividad de San Barth\u00e9lemySaint Barth\u00e9lemy", "common": "San Bartolom\u00e9"},
            "fin": {"official": "Saint-Barth\u00e9lemyn yhteis\u00f6", "common": "Saint-Barth\u00e9lemy"}
        },
        "latlng": [18.5, -63.41666666],
        "demonym": "Saint Barth\u00e9lemy Islander",
        "landlocked": false,
        "borders": [],
        "area": 21
    },
    {
        "name": {
            "common": "Belarus",
            "official": "Republic of Belarus",
            "native": {
                "bel": {
                    "official": "\u0420\u044d\u0441\u043f\u0443\u0431\u043b\u0456\u043a\u0430 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c",
                    "common": "\u0411\u0435\u043b\u0430\u0440\u0443\u0301\u0441\u044c"
                },
                "rus": {
                    "official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c",
                    "common": "\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u0438\u044f"
                }
            }
        },
        "tld": [".by"],
        "cca2": "BY",
        "ccn3": "112",
        "cca3": "BLR",
        "cioc": "BLR",
        "currency": ["BYR"],
        "callingCode": ["375"],
        "capital": "Minsk",
        "altSpellings": ["BY", "Bielaru\u015b", "Republic of Belarus", "\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u0438\u044f", "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c", "Belorussiya", "Respublika Belarus\u2019"],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "bel": "Belarusian",
            "rus": "Russian"
        },
        "translations": {
            "cym": {"official": "Republic of Belarus", "common": "Belarws"},
            "deu": {"official": "Republik Belarus", "common": "Wei\u00dfrussland"},
            "fra": {"official": "R\u00e9publique du B\u00e9larus", "common": "Bi\u00e9lorussie"},
            "hrv": {"official": "Republika Bjelorusija", "common": "Bjelorusija"},
            "ita": {"official": "Repubblica di Belarus", "common": "Bielorussia"},
            "jpn": {"official": "\u30d9\u30e9\u30eb\u30fc\u30b7\u5171\u548c\u56fd", "common": "\u30d9\u30e9\u30eb\u30fc\u30b7"},
            "nld": {"official": "Republiek Belarus", "common": "Wit-Rusland"},
            "por": {"official": "Rep\u00fablica da Bielorr\u00fassia", "common": "Bielor\u00fassia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c", "common": "\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Belar\u00fas", "common": "Bielorrusia"},
            "fin": {"official": "Valko-Ven\u00e4j\u00e4n tasavalta", "common": "Valko-Ven\u00e4j\u00e4"}
        },
        "latlng": [53, 28],
        "demonym": "Belarusian",
        "landlocked": true,
        "borders": ["LVA", "LTU", "POL", "RUS", "UKR"],
        "area": 207600
    },
    {
        "name": {
            "common": "Belize",
            "official": "Belize",
            "native": {
                "bjz": {
                    "official": "Belize",
                    "common": "Belize"
                },
                "eng": {
                    "official": "Belize",
                    "common": "Belize"
                },
                "spa": {
                    "official": "Belice",
                    "common": "Belice"
                }
            }
        },
        "tld": [".bz"],
        "cca2": "BZ",
        "ccn3": "084",
        "cca3": "BLZ",
        "cioc": "BIZ",
        "currency": ["BZD"],
        "callingCode": ["501"],
        "capital": "Belmopan",
        "altSpellings": ["BZ"],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "bjz": "Belizean Creole",
            "eng": "English",
            "spa": "Spanish"
        },
        "translations": {
            "cym": {"official": "Belize", "common": "Belize"},
            "deu": {"official": "Belize", "common": "Belize"},
            "fra": {"official": "Belize", "common": "Belize"},
            "hrv": {"official": "Belize", "common": "Belize"},
            "ita": {"official": "Belize", "common": "Belize"},
            "jpn": {"official": "\u30d9\u30ea\u30fc\u30ba", "common": "\u30d9\u30ea\u30fc\u30ba"},
            "nld": {"official": "Belize", "common": "Belize"},
            "por": {"official": "Belize", "common": "Belize"},
            "rus": {"official": "\u0411\u0435\u043b\u0438\u0437", "common": "\u0411\u0435\u043b\u0438\u0437"},
            "spa": {"official": "Belice", "common": "Belice"},
            "fin": {"official": "Belize", "common": "Belize"}
        },
        "latlng": [17.25, -88.75],
        "demonym": "Belizean",
        "landlocked": false,
        "borders": ["GTM", "MEX"],
        "area": 22966
    },
    {
        "name": {
            "common": "Bermuda",
            "official": "Bermuda",
            "native": {
                "eng": {
                    "official": "Bermuda",
                    "common": "Bermuda"
                }
            }
        },
        "tld": [".bm"],
        "cca2": "BM",
        "ccn3": "060",
        "cca3": "BMU",
        "cioc": "BER",
        "currency": ["BMD"],
        "callingCode": ["1441"],
        "capital": "Hamilton",
        "altSpellings": ["BM", "The Islands of Bermuda", "The Bermudas", "Somers Isles"],
        "region": "Americas",
        "subregion": "Northern America",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "cym": {"official": "Bermuda", "common": "Bermiwda"},
            "deu": {"official": "Bermuda", "common": "Bermuda"},
            "fra": {"official": "Bermudes", "common": "Bermudes"},
            "hrv": {"official": "Bermuda", "common": "Bermudi"},
            "ita": {"official": "Bermuda", "common": "Bermuda"},
            "jpn": {"official": "\u30d0\u30df\u30e5\u30fc\u30c0", "common": "\u30d0\u30df\u30e5\u30fc\u30c0"},
            "nld": {"official": "Bermuda", "common": "Bermuda"},
            "por": {"official": "Bermudas", "common": "Bermudas"},
            "rus": {"official": "\u0411\u0435\u0440\u043c\u0443\u0434\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u0411\u0435\u0440\u043c\u0443\u0434\u0441\u043a\u0438\u0435 \u041e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "Bermuda", "common": "Bermudas"},
            "fin": {"official": "Bermuda", "common": "Bermuda"}
        },
        "latlng": [32.33333333, -64.75],
        "demonym": "Bermudian",
        "landlocked": false,
        "borders": [],
        "area": 54
    },
    {
        "name": {
            "common": "Bolivia",
            "official": "Plurinational State of Bolivia",
            "native": {
                "aym": {
                    "official": "Wuliwya Suyu",
                    "common": "Wuliwya"
                },
                "grn": {
                    "official": "Tet\u00e3 Vol\u00edvia",
                    "common": "Vol\u00edvia"
                },
                "que": {
                    "official": "Buliwya Mamallaqta",
                    "common": "Buliwya"
                },
                "spa": {
                    "official": "Estado Plurinacional de Bolivia",
                    "common": "Bolivia"
                }
            }
        },
        "tld": [".bo"],
        "cca2": "BO",
        "ccn3": "068",
        "cca3": "BOL",
        "cioc": "BOL",
        "currency": ["BOB", "BOV"],
        "callingCode": ["591"],
        "capital": "Sucre",
        "altSpellings": ["BO", "Buliwya", "Wuliwya", "Bolivia, Plurinational State of", "Plurinational State of Bolivia", "Estado Plurinacional de Bolivia", "Buliwya Mamallaqta", "Wuliwya Suyu", "Tet\u00e3 Vol\u00edvia"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "aym": "Aymara",
            "grn": "Guaran\u00ed",
            "que": "Quechua",
            "spa": "Spanish"
        },
        "translations": {
            "cym": {"official": "Plurinational State of Bolivia", "common": "Bolifia"},
            "deu": {"official": "Multinationaler Staat von Bolivien", "common": "Bolivien"},
            "fra": {"official": "\u00c9tat plurinational de Bolivie", "common": "Bolivie"},
            "hrv": {"official": "Plurinational State of Bolivia", "common": "Bolivija"},
            "ita": {"official": "Stato Plurinazionale della Bolivia", "common": "Bolivia"},
            "jpn": {"official": "\u30dc\u30ea\u30d3\u30a2\u306e\u591a\u6c11\u65cf\u56fd", "common": "\u30dc\u30ea\u30d3\u30a2\u591a\u6c11\u65cf\u56fd"},
            "nld": {"official": "Plurinationale Staat van Bolivia", "common": "Bolivia"},
            "por": {"official": "Estado Plurinacional da Bol\u00edvia", "common": "Bol\u00edvia"},
            "rus": {"official": "\u041c\u043d\u043e\u0433\u043e\u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u0411\u043e\u043b\u0438\u0432\u0438\u044f", "common": "\u0411\u043e\u043b\u0438\u0432\u0438\u044f"},
            "spa": {"official": "Estado Plurinacional de Bolivia", "common": "Bolivia"},
            "fin": {"official": "Bolivian monikansainen valtio", "common": "Bolivia"}
        },
        "latlng": [-17, -65],
        "demonym": "Bolivian",
        "landlocked": true,
        "borders": ["ARG", "BRA", "CHL", "PRY", "PER"],
        "area": 1098581
    },
    {
        "name": {
            "common": "Brazil",
            "official": "Federative Republic of Brazil",
            "native": {
                "por": {
                    "official": "Rep\u00fablica Federativa do Brasil",
                    "common": "Brasil"
                }
            }
        },
        "tld": [".br"],
        "cca2": "BR",
        "ccn3": "076",
        "cca3": "BRA",
        "cioc": "BRA",
        "currency": ["BRL"],
        "callingCode": ["55"],
        "capital": "Bras\u00edlia",
        "altSpellings": ["BR", "Brasil", "Federative Republic of Brazil", "Rep\u00fablica Federativa do Brasil"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "cym": {"official": "Federative Republic of Brazil", "common": "Brasil"},
            "deu": {"official": "F\u00f6derative Republik Brasilien", "common": "Brasilien"},
            "fra": {"official": "R\u00e9publique f\u00e9d\u00e9rative du Br\u00e9sil", "common": "Br\u00e9sil"},
            "hrv": {"official": "Savezne Republike Brazil", "common": "Brazil"},
            "ita": {"official": "Repubblica federativa del Brasile", "common": "Brasile"},
            "jpn": {"official": "\u30d6\u30e9\u30b8\u30eb\u9023\u90a6\u5171\u548c\u56fd", "common": "\u30d6\u30e9\u30b8\u30eb"},
            "nld": {"official": "Federale Republiek Brazili\u00eb", "common": "Brazili\u00eb"},
            "por": {"official": "Rep\u00fablica Federativa do Brasil", "common": "Brasil"},
            "rus": {"official": "\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0440\u0430\u0437\u0438\u043b\u0438\u044f", "common": "\u0411\u0440\u0430\u0437\u0438\u043b\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica Federativa del Brasil", "common": "Brasil"},
            "fin": {"official": "Brasilian liittotasavalta", "common": "Brasilia"}
        },
        "latlng": [-10, -55],
        "demonym": "Brazilian",
        "landlocked": false,
        "borders": ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"],
        "area": 8515767
    },
    {
        "name": {
            "common": "Barbados",
            "official": "Barbados",
            "native": {
                "eng": {
                    "official": "Barbados",
                    "common": "Barbados"
                }
            }
        },
        "tld": [".bb"],
        "cca2": "BB",
        "ccn3": "052",
        "cca3": "BRB",
        "cioc": "BAR",
        "currency": ["BBD"],
        "callingCode": ["1246"],
        "capital": "Bridgetown",
        "altSpellings": ["BB"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "cym": {"official": "Barbados", "common": "Barbados"},
            "deu": {"official": "Barbados", "common": "Barbados"},
            "fra": {"official": "Barbade", "common": "Barbade"},
            "hrv": {"official": "Barbados", "common": "Barbados"},
            "ita": {"official": "Barbados", "common": "Barbados"},
            "jpn": {"official": "\u30d0\u30eb\u30d0\u30c9\u30b9", "common": "\u30d0\u30eb\u30d0\u30c9\u30b9"},
            "nld": {"official": "Barbados", "common": "Barbados"},
            "por": {"official": "Barbados", "common": "Barbados"},
            "rus": {"official": "\u0411\u0430\u0440\u0431\u0430\u0434\u043e\u0441", "common": "\u0411\u0430\u0440\u0431\u0430\u0434\u043e\u0441"},
            "spa": {"official": "Barbados", "common": "Barbados"},
            "fin": {"official": "Barbados", "common": "Barbados"}
        },
        "latlng": [13.16666666, -59.53333333],
        "demonym": "Barbadian",
        "landlocked": false,
        "borders": [],
        "area": 430
    },
    {
        "name": {
            "common": "Brunei",
            "official": "Nation of Brunei, Abode of Peace",
            "native": {
                "msa": {
                    "official": "Nation of Brunei, Abode Damai",
                    "common": "Negara Brunei Darussalam"
                }
            }
        },
        "tld": [".bn"],
        "cca2": "BN",
        "ccn3": "096",
        "cca3": "BRN",
        "cioc": "BRU",
        "currency": ["BND"],
        "callingCode": ["673"],
        "capital": "Bandar Seri Begawan",
        "altSpellings": ["BN", "Brunei Darussalam", "Nation of Brunei", "the Abode of Peace"],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "msa": "Malay"
        },
        "translations": {
            "cym": {"official": "Nation of Brunei, Abode of Peace", "common": "Brunei"},
            "deu": {"official": "Nation von Brunei, Wohnung des Friedens", "common": "Brunei"},
            "fra": {"official": "Nation de Brunei, demeure de la paix", "common": "Brunei"},
            "hrv": {"official": "Nacija od Bruneja, Ku\u0107u Mira", "common": "Brunej"},
            "ita": {"official": "Nazione di Brunei, Dimora della Pace", "common": "Brunei"},
            "jpn": {"official": "\u30d6\u30eb\u30cd\u30a4\u3001\u5e73\u548c\u306e\u7cbe\u820e\u306e\u56fd\u5bb6", "common": "\u30d6\u30eb\u30cd\u30a4\u30fb\u30c0\u30eb\u30b5\u30e9\u30fc\u30e0"},
            "nld": {"official": "Natie van Brunei, de verblijfplaats van de Vrede", "common": "Brunei"},
            "por": {"official": "Na\u00e7\u00e3o do Brunei, Morada da Paz", "common": "Brunei"},
            "rus": {"official": "\u041d\u0430\u0446\u0438\u044f \u0411\u0440\u0443\u043d\u0435\u0439, \u043e\u0431\u0438\u0442\u0435\u043b\u044c \u043c\u0438\u0440\u0430", "common": "\u0411\u0440\u0443\u043d\u0435\u0439"},
            "spa": {"official": "Naci\u00f3n de Brunei, Morada de la Paz", "common": "Brunei"},
            "fin": {"official": "Brunei Darussalamin valtio", "common": "Brunei"}
        },
        "latlng": [4.5, 114.66666666],
        "demonym": "Bruneian",
        "landlocked": false,
        "borders": ["MYS"],
        "area": 5765
    },
    {
        "name": {
            "common": "Bhutan",
            "official": "Kingdom of Bhutan",
            "native": {
                "dzo": {
                    "official": "\u0f60\u0f56\u0fb2\u0f74\u0f42\u0f0b\u0f62\u0f92\u0fb1\u0f63\u0f0b\u0f41\u0f56\u0f0b",
                    "common": "\u0f60\u0f56\u0fb2\u0f74\u0f42\u0f0b\u0f61\u0f74\u0f63\u0f0b"
                }
            }
        },
        "tld": [".bt"],
        "cca2": "BT",
        "ccn3": "064",
        "cca3": "BTN",
        "cioc": "BHU",
        "currency": ["BTN", "INR"],
        "callingCode": ["975"],
        "capital": "Thimphu",
        "altSpellings": ["BT", "Kingdom of Bhutan"],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "dzo": "Dzongkha"
        },
        "translations": {
            "cym": {"official": "Kingdom of Bhutan", "common": "Bhwtan"},
            "deu": {"official": "K\u00f6nigreich Bhutan", "common": "Bhutan"},
            "fra": {"official": "Royaume du Bhoutan", "common": "Bhoutan"},
            "hrv": {"official": "Kraljevina Butan", "common": "Butan"},
            "ita": {"official": "Regno del Bhutan", "common": "Bhutan"},
            "jpn": {"official": "\u30d6\u30fc\u30bf\u30f3\u738b\u56fd", "common": "\u30d6\u30fc\u30bf\u30f3"},
            "nld": {"official": "Koninkrijk Bhutan", "common": "Bhutan"},
            "por": {"official": "Reino do But\u00e3o", "common": "But\u00e3o"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u0411\u0443\u0442\u0430\u043d", "common": "\u0411\u0443\u0442\u0430\u043d"},
            "spa": {"official": "Reino de But\u00e1n", "common": "But\u00e1n"},
            "fin": {"official": "Bhutanin kuningaskunta", "common": "Bhutan"}
        },
        "latlng": [27.5, 90.5],
        "demonym": "Bhutanese",
        "landlocked": true,
        "borders": ["CHN", "IND"],
        "area": 38394
    },
    {
        "name": {
            "common": "Bouvet Island",
            "official": "Bouvet Island",
            "native": {
                "nor": {
                    "official": "Bouvet\u00f8ya",
                    "common": "Bouvet\u00f8ya"
                }
            }
        },
        "tld": [".bv"],
        "cca2": "BV",
        "ccn3": "074",
        "cca3": "BVT",
        "cioc": "",
        "currency": ["NOK"],
        "callingCode": [],
        "capital": "",
        "altSpellings": ["BV", "Bouvet\u00f8ya", "Bouvet-\u00f8ya"],
        "region": "",
        "subregion": "",
        "languages": {
            "nor": "Norwegian"
        },
        "translations": {
            "deu": {"official": "Bouvet-Insel", "common": "Bouvetinsel"},
            "fra": {"official": "\u00cele Bouvet", "common": "\u00cele Bouvet"},
            "hrv": {"official": "Bouvet Island", "common": "Otok Bouvet"},
            "ita": {"official": "Isola Bouvet", "common": "Isola Bouvet"},
            "jpn": {"official": "\u30d6\u30fc\u30f4\u30a7\u5cf6", "common": "\u30d6\u30fc\u30d9\u5cf6"},
            "nld": {"official": "Bouvet Island", "common": "Bouveteiland"},
            "por": {"official": "Ilha Bouvet", "common": "Ilha Bouvet"},
            "rus": {"official": "\u041e\u0441\u0442\u0440\u043e\u0432 \u0411\u0443\u0432\u0435", "common": "\u041e\u0441\u0442\u0440\u043e\u0432 \u0411\u0443\u0432\u0435"},
            "spa": {"official": "Isla Bouvet", "common": "Isla Bouvet"},
            "fin": {"official": "Bouvet'nsaari", "common": "Bouvet'nsaari"}
        },
        "latlng": [-54.43333333, 3.4],
        "demonym": "",
        "landlocked": false,
        "borders": [],
        "area": 49
    },
    {
        "name": {
            "common": "Botswana",
            "official": "Republic of Botswana",
            "native": {
                "eng": {
                    "official": "Republic of Botswana",
                    "common": "Botswana"
                },
                "tsn": {
                    "official": "Lefatshe la Botswana",
                    "common": "Botswana"
                }
            }
        },
        "tld": [".bw"],
        "cca2": "BW",
        "ccn3": "072",
        "cca3": "BWA",
        "cioc": "BOT",
        "currency": ["BWP"],
        "callingCode": ["267"],
        "capital": "Gaborone",
        "altSpellings": ["BW", "Republic of Botswana", "Lefatshe la Botswana"],
        "region": "Africa",
        "subregion": "Southern Africa",
        "languages": {
            "eng": "English",
            "tsn": "Tswana"
        },
        "translations": {
            "deu": {"official": "Republik Botsuana", "common": "Botswana"},
            "fra": {"official": "R\u00e9publique du Botswana", "common": "Botswana"},
            "hrv": {"official": "Republika Bocvana", "common": "Bocvana"},
            "ita": {"official": "Repubblica del Botswana", "common": "Botswana"},
            "jpn": {"official": "\u30dc\u30c4\u30ef\u30ca\u5171\u548c\u56fd", "common": "\u30dc\u30c4\u30ef\u30ca"},
            "nld": {"official": "Republiek Botswana", "common": "Botswana"},
            "por": {"official": "Rep\u00fablica do Botswana", "common": "Botswana"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u043e\u0442\u0441\u0432\u0430\u043d\u0430", "common": "\u0411\u043e\u0442\u0441\u0432\u0430\u043d\u0430"},
            "spa": {"official": "Rep\u00fablica de Botswana", "common": "Botswana"},
            "fin": {"official": "Botswanan tasavalta", "common": "Botswana"}
        },
        "latlng": [-22, 24],
        "demonym": "Motswana",
        "landlocked": true,
        "borders": ["NAM", "ZAF", "ZMB", "ZWE"],
        "area": 582000
    },
    {
        "name": {
            "common": "Central African Republic",
            "official": "Central African Republic",
            "native": {
                "fra": {
                    "official": "R\u00e9publique centrafricaine",
                    "common": "R\u00e9publique centrafricaine"
                },
                "sag": {
                    "official": "K\u00f6d\u00f6r\u00f6s\u00ease t\u00ee B\u00eaafr\u00eeka",
                    "common": "B\u00eaafr\u00eeka"
                }
            }
        },
        "tld": [".cf"],
        "cca2": "CF",
        "ccn3": "140",
        "cca3": "CAF",
        "cioc": "CAF",
        "currency": ["XAF"],
        "callingCode": ["236"],
        "capital": "Bangui",
        "altSpellings": ["CF", "Central African Republic", "R\u00e9publique centrafricaine"],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "fra": "French",
            "sag": "Sango"
        },
        "translations": {
            "cym": {"official": "Central African Republic", "common": "Gweriniaeth Canolbarth Affrica"},
            "deu": {"official": "Zentralafrikanische Republik", "common": "Zentralafrikanische Republik"},
            "fra": {"official": "R\u00e9publique centrafricaine", "common": "R\u00e9publique centrafricaine"},
            "hrv": {"official": "Centralna Afri\u010dka Republika", "common": "Srednjoafri\u010dka Republika"},
            "ita": {"official": "Repubblica Centrafricana", "common": "Repubblica Centrafricana"},
            "jpn": {"official": "\u4e2d\u592e\u30a2\u30d5\u30ea\u30ab\u5171\u548c\u56fd", "common": "\u4e2d\u592e\u30a2\u30d5\u30ea\u30ab\u5171\u548c\u56fd"},
            "nld": {"official": "Centraal-Afrikaanse Republiek", "common": "Centraal-Afrikaanse Republiek"},
            "por": {"official": "Rep\u00fablica Centro- Africano", "common": "Rep\u00fablica Centro-Africana"},
            "rus": {"official": "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e-\u0410\u0444\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0430\u0444\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430"},
            "spa": {"official": "Rep\u00fablica Centroafricana", "common": "Rep\u00fablica Centroafricana"},
            "fin": {"official": "Keski-Afrikan tasavalta", "common": "Keski-Afrikan tasavalta"}
        },
        "latlng": [7, 21],
        "demonym": "Central African",
        "landlocked": true,
        "borders": ["CMR", "TCD", "COD", "COG", "SSD", "SDN"],
        "area": 622984
    },
    {
        "name": {
            "common": "Canada",
            "official": "Canada",
            "native": {
                "eng": {
                    "official": "Canada",
                    "common": "Canada"
                },
                "fra": {
                    "official": "Canada",
                    "common": "Canada"
                }
            }
        },
        "tld": [".ca"],
        "cca2": "CA",
        "ccn3": "124",
        "cca3": "CAN",
        "cioc": "CAN",
        "currency": ["CAD"],
        "callingCode": ["1"],
        "capital": "Ottawa",
        "altSpellings": ["CA"],
        "region": "Americas",
        "subregion": "Northern America",
        "languages": {
            "eng": "English",
            "fra": "French"
        },
        "translations": {
            "cym": {"official": "Canada", "common": "Canada"},
            "deu": {"official": "Kanada", "common": "Kanada"},
            "fra": {"official": "Canada", "common": "Canada"},
            "hrv": {"official": "Kanada", "common": "Kanada"},
            "ita": {"official": "Canada", "common": "Canada"},
            "jpn": {"official": "\u30ab\u30ca\u30c0", "common": "\u30ab\u30ca\u30c0"},
            "nld": {"official": "Canada", "common": "Canada"},
            "por": {"official": "Canad\u00e1", "common": "Canad\u00e1"},
            "rus": {"official": "\u041a\u0430\u043d\u0430\u0434\u0430", "common": "\u041a\u0430\u043d\u0430\u0434\u0430"},
            "spa": {"official": "Canad\u00e1", "common": "Canad\u00e1"},
            "fin": {"official": "Kanada", "common": "Kanada"}
        },
        "latlng": [60, -95],
        "demonym": "Canadian",
        "landlocked": false,
        "borders": ["USA"],
        "area": 9984670
    },
    {
        "name": {
            "common": "Cocos (Keeling) Islands",
            "official": "Territory of the Cocos (Keeling) Islands",
            "native": {
                "eng": {
                    "official": "Territory of the Cocos (Keeling) Islands",
                    "common": "Cocos (Keeling) Islands"
                }
            }
        },
        "tld": [".cc"],
        "cca2": "CC",
        "ccn3": "166",
        "cca3": "CCK",
        "cioc": "",
        "currency": ["AUD"],
        "callingCode": ["61"],
        "capital": "West Island",
        "altSpellings": ["CC", "Territory of the Cocos (Keeling) Islands", "Keeling Islands"],
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "cym": {"official": "Territory of the Cocos (Keeling) Islands", "common": "Ynysoedd Cocos"},
            "deu": {"official": "Gebiet der Cocos (Keeling) Islands", "common": "Kokosinseln"},
            "fra": {"official": "Territoire des (Keeling) \u00eeles Cocos", "common": "\u00celes Cocos"},
            "hrv": {"official": "Teritoriju Kokosovi (Keeling) Islands", "common": "Kokosovi Otoci"},
            "ita": {"official": "Territorio della ( Keeling) Isole Cocos", "common": "Isole Cocos e Keeling"},
            "jpn": {"official": "\u30b3\u30b3\u30b9\u8af8\u5cf6\u306e\u9818\u571f", "common": "\u30b3\u30b3\u30b9\uff08\u30ad\u30fc\u30ea\u30f3\u30b0\uff09\u8af8\u5cf6"},
            "nld": {"official": "Grondgebied van de Eilanden Cocos ( Keeling )", "common": "Cocoseilanden"},
            "por": {"official": "Territ\u00f3rio dos Cocos (Keeling)", "common": "Ilhas Cocos (Keeling)"},
            "rus": {"official": "\u0422\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044f \u041a\u043e\u043a\u043e\u0441\u043e\u0432\u044b\u0435 (\u041a\u0438\u043b\u0438\u043d\u0433) \u043e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u041a\u043e\u043a\u043e\u0441\u043e\u0432\u044b\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "Territorio de los (Keeling) Islas Cocos", "common": "Islas Cocos o Islas Keeling"},
            "fin": {"official": "Kookossaaret", "common": "Kookossaaret"}
        },
        "latlng": [-12.5, 96.83333333],
        "demonym": "Cocos Islander",
        "landlocked": false,
        "borders": [],
        "area": 14
    },
    {
        "name": {
            "common": "Switzerland",
            "official": "Swiss Confederation",
            "native": {
                "fra": {
                    "official": "Conf\u00e9d\u00e9ration suisse",
                    "common": "Suisse"
                },
                "gsw": {
                    "official": "Schweizerische Eidgenossenschaft",
                    "common": "Schweiz"
                },
                "ita": {
                    "official": "Confederazione Svizzera",
                    "common": "Svizzera"
                },
                "roh": {
                    "official": "Confederaziun svizra",
                    "common": "Svizra"
                }
            }
        },
        "tld": [".ch"],
        "cca2": "CH",
        "ccn3": "756",
        "cca3": "CHE",
        "cioc": "SUI",
        "currency": ["CHE", "CHF", "CHW"],
        "callingCode": ["41"],
        "capital": "Bern",
        "altSpellings": ["CH", "Swiss Confederation", "Schweiz", "Suisse", "Svizzera", "Svizra"],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "fra": "French",
            "gsw": "Swiss German",
            "ita": "Italian",
            "roh": "Romansh"
        },
        "translations": {
            "deu": {"official": "Schweizerische Eidgenossenschaft", "common": "Schweiz"},
            "fra": {"official": "Conf\u00e9d\u00e9ration suisse", "common": "Suisse"},
            "hrv": {"official": "\u0161vicarska Konfederacija", "common": "\u0160vicarska"},
            "ita": {"official": "Confederazione svizzera", "common": "Svizzera"},
            "jpn": {"official": "\u30b9\u30a4\u30b9\u9023\u90a6", "common": "\u30b9\u30a4\u30b9"},
            "nld": {"official": "Zwitserse Confederatie", "common": "Zwitserland"},
            "por": {"official": "Confedera\u00e7\u00e3o Su\u00ed\u00e7a", "common": "Su\u00ed\u00e7a"},
            "rus": {"official": "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043a\u0430\u044f \u041a\u043e\u043d\u0444\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044f", "common": "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044f"},
            "spa": {"official": "Confederaci\u00f3n Suiza", "common": "Suiza"},
            "fin": {"official": "Sveitsin valaliitto", "common": "Sveitsi"}
        },
        "latlng": [47, 8],
        "demonym": "Swiss",
        "landlocked": true,
        "borders": ["AUT", "FRA", "ITA", "LIE", "DEU"],
        "area": 41284
    },
    {
        "name": {
            "common": "Chile",
            "official": "Republic of Chile",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica de Chile",
                    "common": "Chile"
                }
            }
        },
        "tld": [".cl"],
        "cca2": "CL",
        "ccn3": "152",
        "cca3": "CHL",
        "cioc": "CHI",
        "currency": ["CLF", "CLP"],
        "callingCode": ["56"],
        "capital": "Santiago",
        "altSpellings": ["CL", "Republic of Chile", "Rep\u00fablica de Chile"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "cym": {"official": "Republic of Chile", "common": "Chile"},
            "deu": {"official": "Republik Chile", "common": "Chile"},
            "fra": {"official": "R\u00e9publique du Chili", "common": "Chili"},
            "hrv": {"official": "Republika \u010cile", "common": "\u010cile"},
            "ita": {"official": "Repubblica del Cile", "common": "Cile"},
            "jpn": {"official": "\u30c1\u30ea\u5171\u548c\u56fd", "common": "\u30c1\u30ea"},
            "nld": {"official": "Republiek Chili", "common": "Chili"},
            "por": {"official": "Rep\u00fablica do Chile", "common": "Chile"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0427\u0438\u043b\u0438", "common": "\u0427\u0438\u043b\u0438"},
            "spa": {"official": "Rep\u00fablica de Chile", "common": "Chile"},
            "fin": {"official": "Chilen tasavalta", "common": "Chile"}
        },
        "latlng": [-30, -71],
        "demonym": "Chilean",
        "landlocked": false,
        "borders": ["ARG", "BOL", "PER"],
        "area": 756102
    },
    {
        "name": {
            "common": "China",
            "official": "People's Republic of China",
            "native": {
                "cmn": {
                    "official": "\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd",
                    "common": "\u4e2d\u56fd"
                }
            }
        },
        "tld": [".cn", ".\u4e2d\u56fd", ".\u4e2d\u570b", ".\u516c\u53f8", ".\u7f51\u7edc"],
        "cca2": "CN",
        "ccn3": "156",
        "cca3": "CHN",
        "cioc": "CHN",
        "currency": ["CNY"],
        "callingCode": ["86"],
        "capital": "Beijing",
        "altSpellings": ["CN", "Zh\u014dnggu\u00f3", "Zhongguo", "Zhonghua", "People's Republic of China", "\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd", "Zh\u014dnghu\u00e1 R\u00e9nm\u00edn G\u00f2ngh\u00e9gu\u00f3"],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "cmn": "Mandarin"
        },
        "translations": {
            "cym": {"official": "People's Republic of China", "common": "Tsieina"},
            "deu": {"official": "Volksrepublik China", "common": "China"},
            "fra": {"official": "R\u00e9publique populaire de Chine", "common": "Chine"},
            "hrv": {"official": "Narodna Republika Kina", "common": "Kina"},
            "ita": {"official": "Repubblica popolare cinese", "common": "Cina"},
            "jpn": {"official": "\u4e2d\u83ef\u4eba\u6c11\u5171\u548c\u56fd", "common": "\u4e2d\u56fd"},
            "nld": {"official": "Volksrepubliek China", "common": "China"},
            "por": {"official": "Rep\u00fablica Popular da China", "common": "China"},
            "rus": {"official": "\u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0438\u0442\u0430\u0439", "common": "\u041a\u0438\u0442\u0430\u0439"},
            "spa": {"official": "Rep\u00fablica Popular de China", "common": "China"},
            "fin": {"official": "Kiinan kansantasavalta", "common": "Kiina"}
        },
        "latlng": [35, 105],
        "demonym": "Chinese",
        "landlocked": false,
        "borders": ["AFG", "BTN", "MMR", "HKG", "IND", "KAZ", "PRK", "KGZ", "LAO", "MAC", "MNG", "PAK", "RUS", "TJK", "VNM"],
        "area": 9706961
    },
    {
        "name": {
            "common": "Ivory Coast",
            "official": "Republic of C\u00f4te d'Ivoire",
            "native": {
                "fra": {
                    "official": "R\u00e9publique de C\u00f4te d'Ivoire",
                    "common": "C\u00f4te d'Ivoire"
                }
            }
        },
        "tld": [".ci"],
        "cca2": "CI",
        "ccn3": "384",
        "cca3": "CIV",
        "cioc": "CIV",
        "currency": ["XOF"],
        "callingCode": ["225"],
        "capital": "Yamoussoukro",
        "altSpellings": ["CI", "C\u00f4te d'Ivoire", "Ivory Coast", "Republic of C\u00f4te d'Ivoire", "R\u00e9publique de C\u00f4te d'Ivoire"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Republik C\u00f4te d'Ivoire", "common": "Elfenbeink\u00fcste"},
            "fra": {"official": "R\u00e9publique de C\u00f4te d' Ivoire", "common": "C\u00f4te d'Ivoire"},
            "hrv": {"official": "Republika C\u00f4te d' Ivoire", "common": "Obala Bjelokosti"},
            "ita": {"official": "Repubblica della Costa d' Avorio", "common": "Costa D'Avorio"},
            "jpn": {"official": "\u30b3\u30fc\u30c8\u30b8\u30dc\u30ef\u30fc\u30eb\u5171\u548c\u56fd", "common": "\u30b3\u30fc\u30c8\u30b8\u30dc\u30ef\u30fc\u30eb"},
            "nld": {"official": "Republiek Ivoorkust", "common": "Ivoorkust"},
            "por": {"official": "Rep\u00fablica da C\u00f4te d' Ivoire", "common": "Costa do Marfim"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u0442- \u0434'\u0418\u0432\u0443\u0430\u0440\u0435", "common": "\u041a\u043e\u0442-\u0434\u2019\u0418\u0432\u0443\u0430\u0440"},
            "spa": {"official": "Rep\u00fablica de C\u00f4te d' Ivoire", "common": "Costa de Marfil"},
            "fin": {"official": "Norsunluurannikon tasavalta", "common": "Norsunluurannikko"}
        },
        "latlng": [8, -5],
        "demonym": "Ivorian",
        "landlocked": false,
        "borders": ["BFA", "GHA", "GIN", "LBR", "MLI"],
        "area": 322463
    },
    {
        "name": {
            "common": "Cameroon",
            "official": "Republic of Cameroon",
            "native": {
                "eng": {
                    "official": "Republic of Cameroon",
                    "common": "Cameroon"
                },
                "fra": {
                    "official": "R\u00e9publique du Cameroun",
                    "common": "Cameroun"
                }
            }
        },
        "tld": [".cm"],
        "cca2": "CM",
        "ccn3": "120",
        "cca3": "CMR",
        "cioc": "CMR",
        "currency": ["XAF"],
        "callingCode": ["237"],
        "capital": "Yaound\u00e9",
        "altSpellings": ["CM", "Republic of Cameroon", "R\u00e9publique du Cameroun"],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "eng": "English",
            "fra": "French"
        },
        "translations": {
            "cym": {"official": "Republic of Cameroon", "common": "Camer\u0175n"},
            "deu": {"official": "Republik Kamerun", "common": "Kamerun"},
            "fra": {"official": "R\u00e9publique du Cameroun", "common": "Cameroun"},
            "hrv": {"official": "Republika Kamerun", "common": "Kamerun"},
            "ita": {"official": "Repubblica del Camerun", "common": "Camerun"},
            "jpn": {"official": "\u30ab\u30e1\u30eb\u30fc\u30f3\u5171\u548c\u56fd", "common": "\u30ab\u30e1\u30eb\u30fc\u30f3"},
            "nld": {"official": "Republiek Kameroen", "common": "Kameroen"},
            "por": {"official": "Rep\u00fablica dos Camar\u00f5es", "common": "Camar\u00f5es"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u043c\u0435\u0440\u0443\u043d", "common": "\u041a\u0430\u043c\u0435\u0440\u0443\u043d"},
            "spa": {"official": "Rep\u00fablica de Camer\u00fan", "common": "Camer\u00fan"},
            "fin": {"official": "Kamerunin tasavalta", "common": "Kamerun"}
        },
        "latlng": [6, 12],
        "demonym": "Cameroonian",
        "landlocked": false,
        "borders": ["CAF", "TCD", "COG", "GNQ", "GAB", "NGA"],
        "area": 475442
    },
    {
        "name": {
            "common": "DR Congo",
            "official": "Democratic Republic of the Congo",
            "native": {
                "fra": {
                    "official": "R\u00e9publique d\u00e9mocratique du Congo",
                    "common": "RD Congo"
                },
                "kon": {
                    "official": "Repubilika ya Kongo Demokratiki",
                    "common": "Repubilika ya Kongo Demokratiki"
                },
                "lin": {
                    "official": "Republiki ya Kong\u00f3 Demokratiki",
                    "common": "Republiki ya Kong\u00f3 Demokratiki"
                },
                "lua": {
                    "official": "Ditunga dia Kongu wa Mungalaata",
                    "common": "Ditunga dia Kongu wa Mungalaata"
                },
                "swa": {
                    "official": "Jamhuri ya Kidemokrasia ya Kongo",
                    "common": "Jamhuri ya Kidemokrasia ya Kongo"
                }
            }
        },
        "tld": [".cd"],
        "cca2": "CD",
        "ccn3": "180",
        "cca3": "COD",
        "cioc": "COD",
        "currency": ["CDF"],
        "callingCode": ["243"],
        "capital": "Kinshasa",
        "altSpellings": ["CD", "DR Congo", "Congo-Kinshasa", "Congo, the Democratic Republic of the", "DRC"],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "fra": "French",
            "kon": "Kikongo",
            "lin": "Lingala",
            "lua": "Tshiluba",
            "swa": "Swahili"
        },
        "translations": {
            "cym": {"official": "Democratic Republic of the Congo", "common": "Gweriniaeth Ddemocrataidd Congo"},
            "deu": {"official": "Demokratische Republik Kongo", "common": "Kongo (Dem. Rep.)"},
            "fra": {"official": "R\u00e9publique d\u00e9mocratique du Congo", "common": "Congo (R\u00e9p. d\u00e9m.)"},
            "hrv": {"official": "Demokratska Republika Kongo", "common": "Kongo, Demokratska Republika"},
            "ita": {"official": "Repubblica Democratica del Congo", "common": "Congo (Rep. Dem.)"},
            "jpn": {"official": "\u30b3\u30f3\u30b4\u6c11\u4e3b\u5171\u548c\u56fd", "common": "\u30b3\u30f3\u30b4\u6c11\u4e3b\u5171\u548c\u56fd"},
            "nld": {"official": "Democratische Republiek Congo", "common": "Congo (DRC)"},
            "por": {"official": "Rep\u00fablica Democr\u00e1tica do Congo", "common": "Rep\u00fablica Democr\u00e1tica do Congo"},
            "rus": {"official": "\u0414\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043d\u0433\u043e", "common": "\u0414\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043d\u0433\u043e"},
            "spa": {"official": "Rep\u00fablica Democr\u00e1tica del Congo", "common": "Congo (Rep. Dem.)"},
            "fin": {"official": "Kongon demokraattinen tasavalta", "common": "Kongon demokraattinen tasavalta"}
        },
        "latlng": [0, 25],
        "demonym": "Congolese",
        "landlocked": false,
        "borders": ["AGO", "BDI", "CAF", "COG", "RWA", "SSD", "TZA", "UGA", "ZMB"],
        "area": 2344858
    },
    {
        "name": {
            "common": "Republic of the Congo",
            "official": "Republic of the Congo",
            "native": {
                "fra": {
                    "official": "R\u00e9publique du Congo",
                    "common": "R\u00e9publique du Congo"
                },
                "kon": {
                    "official": "Repubilika ya Kongo",
                    "common": "Repubilika ya Kongo"
                },
                "lin": {
                    "official": "Republ\u00edki ya Kong\u00f3",
                    "common": "Republ\u00edki ya Kong\u00f3"
                }
            }
        },
        "tld": [".cg"],
        "cca2": "CG",
        "ccn3": "178",
        "cca3": "COG",
        "cioc": "CGO",
        "currency": ["XAF"],
        "callingCode": ["242"],
        "capital": "Brazzaville",
        "altSpellings": ["CG", "Congo", "Congo-Brazzaville"],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "fra": "French",
            "kon": "Kikongo",
            "lin": "Lingala"
        },
        "translations": {
            "cym": {"official": "Republic of the Congo", "common": "Gweriniaeth y Congo"},
            "deu": {"official": "Republik Kongo", "common": "Kongo"},
            "fra": {"official": "R\u00e9publique du Congo", "common": "Congo"},
            "hrv": {"official": "Republika Kongo", "common": "Kongo"},
            "ita": {"official": "Repubblica del Congo", "common": "Congo"},
            "jpn": {"official": "\u30b3\u30f3\u30b4\u5171\u548c\u56fd", "common": "\u30b3\u30f3\u30b4\u5171\u548c\u56fd"},
            "nld": {"official": "Republiek Congo", "common": "Congo"},
            "por": {"official": "Rep\u00fablica do Congo", "common": "Congo"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043d\u0433\u043e", "common": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043d\u0433\u043e"},
            "spa": {"official": "Rep\u00fablica del Congo", "common": "Congo"},
            "fin": {"official": "Kongon tasavalta", "common": "Kongo-Brazzaville"}
        },
        "latlng": [-1, 15],
        "demonym": "Congolese",
        "landlocked": false,
        "borders": ["AGO", "CMR", "CAF", "COD", "GAB"],
        "area": 342000
    },
    {
        "name": {
            "common": "Cook Islands",
            "official": "Cook Islands",
            "native": {
                "eng": {
                    "official": "Cook Islands",
                    "common": "Cook Islands"
                },
                "rar": {
                    "official": "K\u016bki '\u0100irani",
                    "common": "K\u016bki '\u0100irani"
                }
            }
        },
        "tld": [".ck"],
        "cca2": "CK",
        "ccn3": "184",
        "cca3": "COK",
        "cioc": "COK",
        "currency": ["NZD"],
        "callingCode": ["682"],
        "capital": "Avarua",
        "altSpellings": ["CK", "K\u016bki '\u0100irani"],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "rar": "Cook Islands M\u0101ori"
        },
        "translations": {
            "cym": {"official": "Cook Islands", "common": "Ynysoedd Cook"},
            "deu": {"official": "Cook-Inseln", "common": "Cookinseln"},
            "fra": {"official": "Iles Cook", "common": "\u00celes Cook"},
            "hrv": {"official": "Cook Islands", "common": "Cookovo Oto\u010dje"},
            "ita": {"official": "Isole Cook", "common": "Isole Cook"},
            "jpn": {"official": "\u30af\u30c3\u30af\u8af8\u5cf6", "common": "\u30af\u30c3\u30af\u8af8\u5cf6"},
            "nld": {"official": "Cook eilanden", "common": "Cookeilanden"},
            "por": {"official": "Ilhas Cook", "common": "Ilhas Cook"},
            "rus": {"official": "\u043e\u0441\u0442\u0440\u043e\u0432\u0430 \u041a\u0443\u043a\u0430", "common": "\u041e\u0441\u0442\u0440\u043e\u0432\u0430 \u041a\u0443\u043a\u0430"},
            "spa": {"official": "Islas Cook", "common": "Islas Cook"},
            "fin": {"official": "Cookinsaaret", "common": "Cookinsaaret"}
        },
        "latlng": [-21.23333333, -159.76666666],
        "demonym": "Cook Islander",
        "landlocked": false,
        "borders": [],
        "area": 236
    },
    {
        "name": {
            "common": "Colombia",
            "official": "Republic of Colombia",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica de Colombia",
                    "common": "Colombia"
                }
            }
        },
        "tld": [".co"],
        "cca2": "CO",
        "ccn3": "170",
        "cca3": "COL",
        "cioc": "COL",
        "currency": ["COP"],
        "callingCode": ["57"],
        "capital": "Bogot\u00e1",
        "altSpellings": ["CO", "Republic of Colombia", "Rep\u00fablica de Colombia"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "cym": {"official": "Republic of Colombia", "common": "Colombia"},
            "deu": {"official": "Republik Kolumbien", "common": "Kolumbien"},
            "fra": {"official": "R\u00e9publique de Colombie", "common": "Colombie"},
            "hrv": {"official": "Republika Kolumbija", "common": "Kolumbija"},
            "ita": {"official": "Repubblica di Colombia", "common": "Colombia"},
            "jpn": {"official": "\u30b3\u30ed\u30f3\u30d3\u30a2\u5171\u548c\u56fd", "common": "\u30b3\u30ed\u30f3\u30d3\u30a2"},
            "nld": {"official": "Republiek Colombia", "common": "Colombia"},
            "por": {"official": "Rep\u00fablica da Col\u00f4mbia", "common": "Col\u00f4mbia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043b\u0443\u043c\u0431\u0438\u044f", "common": "\u041a\u043e\u043b\u0443\u043c\u0431\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Colombia", "common": "Colombia"},
            "fin": {"official": "Kolumbian tasavalta", "common": "Kolumbia"}
        },
        "latlng": [4, -72],
        "demonym": "Colombian",
        "landlocked": false,
        "borders": ["BRA", "ECU", "PAN", "PER", "VEN"],
        "area": 1141748
    },
    {
        "name": {
            "common": "Comoros",
            "official": "Union of the Comoros",
            "native": {
                "ara": {
                    "official": "\u0627\u0644\u0627\u062a\u062d\u0627\u062f \u0627\u0644\u0642\u0645\u0631\u064a",
                    "common": "\u0627\u0644\u0642\u0645\u0631\u200e"
                },
                "fra": {
                    "official": "Union des Comores",
                    "common": "Comores"
                },
                "zdj": {
                    "official": "Udzima wa Komori",
                    "common": "Komori"
                }
            }
        },
        "tld": [".km"],
        "cca2": "KM",
        "ccn3": "174",
        "cca3": "COM",
        "cioc": "COM",
        "currency": ["KMF"],
        "callingCode": ["269"],
        "capital": "Moroni",
        "altSpellings": ["KM", "Union of the Comoros", "Union des Comores", "Udzima wa Komori", "al-Itti\u1e25\u0101d al-Qumur\u012b"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "ara": "Arabic",
            "fra": "French",
            "zdj": "Comorian"
        },
        "translations": {
            "cym": {"official": "Union of the Comoros", "common": "Comoros"},
            "deu": {"official": "Union der Komoren", "common": "Union der Komoren"},
            "fra": {"official": "Union des Comores", "common": "Comores"},
            "hrv": {"official": "Savez Komori", "common": "Komori"},
            "ita": {"official": "Unione delle Comore", "common": "Comore"},
            "jpn": {"official": "\u30b3\u30e2\u30ed\u9023\u5408", "common": "\u30b3\u30e2\u30ed"},
            "nld": {"official": "Unie van de Comoren", "common": "Comoren"},
            "por": {"official": "Uni\u00e3o das Comores", "common": "Comores"},
            "rus": {"official": "\u0421\u043e\u044e\u0437 \u041a\u043e\u043c\u043e\u0440\u0441\u043a\u0438\u0445 \u041e\u0441\u0442\u0440\u043e\u0432\u043e\u0432", "common": "\u041a\u043e\u043c\u043e\u0440\u044b"},
            "spa": {"official": "Uni\u00f3n de las Comoras", "common": "Comoras"},
            "fin": {"official": "Komorien liitto", "common": "Komorit"}
        },
        "latlng": [-12.16666666, 44.25],
        "demonym": "Comoran",
        "landlocked": false,
        "borders": [],
        "area": 1862
    },
    {
        "name": {
            "common": "Cape Verde",
            "official": "Republic of Cabo Verde",
            "native": {
                "por": {
                    "official": "Rep\u00fablica de Cabo Verde",
                    "common": "Cabo Verde"
                }
            }
        },
        "tld": [".cv"],
        "cca2": "CV",
        "ccn3": "132",
        "cca3": "CPV",
        "cioc": "CPV",
        "currency": ["CVE"],
        "callingCode": ["238"],
        "capital": "Praia",
        "altSpellings": ["CV", "Republic of Cabo Verde", "Rep\u00fablica de Cabo Verde"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "cym": {"official": "Republic of Cabo Verde", "common": "Cape Verde"},
            "deu": {"official": "Republik Cabo Verde", "common": "Kap Verde"},
            "fra": {"official": "R\u00e9publique du Cap -Vert", "common": "Cap Vert"},
            "hrv": {"official": "Republika Cabo Verde", "common": "Zelenortska Republika"},
            "ita": {"official": "Repubblica di Capo Verde", "common": "Capo Verde"},
            "jpn": {"official": "\u30ab\u30fc\u30dc\u30d9\u30eb\u30c7\u5171\u548c\u56fd", "common": "\u30ab\u30fc\u30dc\u30d9\u30eb\u30c7"},
            "nld": {"official": "Republiek van Cabo Verde", "common": "Kaapverdi\u00eb"},
            "por": {"official": "Rep\u00fablica de Cabo Verde", "common": "Cabo Verde"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0431\u043e -\u0412\u0435\u0440\u0434\u0435", "common": "\u041a\u0430\u0431\u043e-\u0412\u0435\u0440\u0434\u0435"},
            "spa": {"official": "Rep\u00fablica de Cabo Verde", "common": "Cabo Verde"},
            "fin": {"official": "Kap Verden tasavalta", "common": "Kap Verde"}
        },
        "latlng": [16, -24],
        "demonym": "Cape Verdian",
        "landlocked": false,
        "borders": [],
        "area": 4033
    },
    {
        "name": {
            "common": "Costa Rica",
            "official": "Republic of Costa Rica",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica de Costa Rica",
                    "common": "Costa Rica"
                }
            }
        },
        "tld": [".cr"],
        "cca2": "CR",
        "ccn3": "188",
        "cca3": "CRI",
        "cioc": "CRC",
        "currency": ["CRC"],
        "callingCode": ["506"],
        "capital": "San Jos\u00e9",
        "altSpellings": ["CR", "Republic of Costa Rica", "Rep\u00fablica de Costa Rica"],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "cym": {"official": "Republic of Costa Rica", "common": "Costa Rica"},
            "deu": {"official": "Republik Costa Rica", "common": "Costa Rica"},
            "fra": {"official": "R\u00e9publique du Costa Rica", "common": "Costa Rica"},
            "hrv": {"official": "Republika Kostarika", "common": "Kostarika"},
            "ita": {"official": "Repubblica di Costa Rica", "common": "Costa Rica"},
            "jpn": {"official": "\u30b3\u30b9\u30bf\u30ea\u30ab\u5171\u548c\u56fd", "common": "\u30b3\u30b9\u30bf\u30ea\u30ab"},
            "nld": {"official": "Republiek Costa Rica", "common": "Costa Rica"},
            "por": {"official": "Rep\u00fablica da Costa Rica", "common": "Costa Rica"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u0441\u0442\u0430-\u0420\u0438\u043a\u0430", "common": "\u041a\u043e\u0441\u0442\u0430-\u0420\u0438\u043a\u0430"},
            "spa": {"official": "Rep\u00fablica de Costa Rica", "common": "Costa Rica"},
            "fin": {"official": "Costa Rican tasavalta", "common": "Costa Rica"}
        },
        "latlng": [10, -84],
        "demonym": "Costa Rican",
        "landlocked": false,
        "borders": ["NIC", "PAN"],
        "area": 51100
    },
    {
        "name": {
            "common": "Cuba",
            "official": "Republic of Cuba",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica de Cuba",
                    "common": "Cuba"
                }
            }
        },
        "tld": [".cu"],
        "cca2": "CU",
        "ccn3": "192",
        "cca3": "CUB",
        "cioc": "CUB",
        "currency": ["CUC", "CUP"],
        "callingCode": ["53"],
        "capital": "Havana",
        "altSpellings": ["CU", "Republic of Cuba", "Rep\u00fablica de Cuba"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "cym": {"official": "Republic of Cuba", "common": "Ciwba"},
            "deu": {"official": "Republik Kuba", "common": "Kuba"},
            "fra": {"official": "R\u00e9publique de Cuba", "common": "Cuba"},
            "hrv": {"official": "Republika Kuba", "common": "Kuba"},
            "ita": {"official": "Repubblica di Cuba", "common": "Cuba"},
            "jpn": {"official": "\u30ad\u30e5\u30fc\u30d0\u5171\u548c\u56fd", "common": "\u30ad\u30e5\u30fc\u30d0"},
            "nld": {"official": "Republiek Cuba", "common": "Cuba"},
            "por": {"official": "Rep\u00fablica de Cuba", "common": "Cuba"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0443\u0431\u0430", "common": "\u041a\u0443\u0431\u0430"},
            "spa": {"official": "Rep\u00fablica de Cuba", "common": "Cuba"},
            "fin": {"official": "Kuuban tasavalta", "common": "Kuuba"}
        },
        "latlng": [21.5, -80],
        "demonym": "Cuban",
        "landlocked": false,
        "borders": [],
        "area": 109884
    },
    {
        "name": {
            "common": "Cura\u00e7ao",
            "official": "Country of Cura\u00e7ao",
            "native": {
                "eng": {
                    "official": "Country of Cura\u00e7ao",
                    "common": "Cura\u00e7ao"
                },
                "nld": {
                    "official": "Land Cura\u00e7ao",
                    "common": "Cura\u00e7ao"
                },
                "pap": {
                    "official": "Pais K\u00f2rsou",
                    "common": "Pais K\u00f2rsou"
                }
            }
        },
        "tld": [".cw"],
        "cca2": "CW",
        "ccn3": "531",
        "cca3": "CUW",
        "cioc": "",
        "currency": ["ANG"],
        "callingCode": ["5999"],
        "capital": "Willemstad",
        "altSpellings": ["CW", "Curacao", "K\u00f2rsou", "Country of Cura\u00e7ao", "Land Cura\u00e7ao", "Pais K\u00f2rsou"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English",
            "nld": "Dutch",
            "pap": "Papiamento"
        },
        "translations": {
            "nld": {"official": "Land Cura\u00e7ao", "common": "Cura\u00e7ao"},
            "por": {"official": "Pa\u00eds de Cura\u00e7ao", "common": "ilha da Cura\u00e7\u00e3o"},
            "rus": {"official": "\u0421\u0442\u0440\u0430\u043d\u0430 \u041a\u044e\u0440\u0430\u0441\u0430\u043e", "common": "\u041a\u044e\u0440\u0430\u0441\u0430\u043e"},
            "spa": {"official": "Pa\u00eds de Curazao", "common": "Curazao"},
            "fin": {"official": "Cura\u00e7ao", "common": "Cura\u00e7ao"}
        },
        "latlng": [12.116667, -68.933333],
        "demonym": "Dutch",
        "landlocked": false,
        "borders": [],
        "area": 444
    },
    {
        "name": {
            "common": "Christmas Island",
            "official": "Territory of Christmas Island",
            "native": {
                "eng": {
                    "official": "Territory of Christmas Island",
                    "common": "Christmas Island"
                }
            }
        },
        "tld": [".cx"],
        "cca2": "CX",
        "ccn3": "162",
        "cca3": "CXR",
        "cioc": "",
        "currency": ["AUD"],
        "callingCode": ["61"],
        "capital": "Flying Fish Cove",
        "altSpellings": ["CX", "Territory of Christmas Island"],
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "cym": {"official": "Territory of Christmas Island", "common": "Ynys y Nadolig"},
            "deu": {"official": "Gebiet der Weihnachtsinsel", "common": "Weihnachtsinsel"},
            "fra": {"official": "Territoire de l'\u00eele Christmas", "common": "\u00cele Christmas"},
            "hrv": {"official": "Teritorij Bo\u017ei\u0107ni otok", "common": "Bo\u017ei\u0107ni otok"},
            "ita": {"official": "Territorio di Christmas Island", "common": "Isola di Natale"},
            "jpn": {"official": "\u30af\u30ea\u30b9\u30de\u30b9\u5cf6\u306e\u9818\u571f", "common": "\u30af\u30ea\u30b9\u30de\u30b9\u5cf6"},
            "nld": {"official": "Grondgebied van Christmas Island", "common": "Christmaseiland"},
            "por": {"official": "Territ\u00f3rio da Ilha Christmas", "common": "Ilha do Natal"},
            "rus": {"official": "\u0422\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044f \u043e\u0441\u0442\u0440\u043e\u0432\u0430 \u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0430", "common": "\u041e\u0441\u0442\u0440\u043e\u0432 \u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0430"},
            "spa": {"official": "Territorio de la Isla de Navidad", "common": "Isla de Navidad"},
            "fin": {"official": "Joulusaaren alue", "common": "Joulusaari"}
        },
        "latlng": [-10.5, 105.66666666],
        "demonym": "Christmas Island",
        "landlocked": false,
        "borders": [],
        "area": 135
    },
    {
        "name": {
            "common": "Cayman Islands",
            "official": "Cayman Islands",
            "native": {
                "eng": {
                    "official": "Cayman Islands",
                    "common": "Cayman Islands"
                }
            }
        },
        "tld": [".ky"],
        "cca2": "KY",
        "ccn3": "136",
        "cca3": "CYM",
        "cioc": "CAY",
        "currency": ["KYD"],
        "callingCode": ["1345"],
        "capital": "George Town",
        "altSpellings": ["KY"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "cym": {"official": "Cayman Islands", "common": "Ynysoedd_Cayman"},
            "deu": {"official": "Cayman-Inseln", "common": "Kaimaninseln"},
            "fra": {"official": "\u00celes Ca\u00efmans", "common": "\u00celes Ca\u00efmans"},
            "hrv": {"official": "Kajmanski otoci", "common": "Kajmanski otoci"},
            "ita": {"official": "Isole Cayman", "common": "Isole Cayman"},
            "jpn": {"official": "\u30b1\u30a4\u30de\u30f3\u8af8\u5cf6", "common": "\u30b1\u30a4\u30de\u30f3\u8af8\u5cf6"},
            "nld": {"official": "Caymaneilanden", "common": "Caymaneilanden"},
            "por": {"official": "Ilhas Cayman", "common": "Ilhas Caim\u00e3o"},
            "rus": {"official": "\u041a\u0430\u0439\u043c\u0430\u043d\u043e\u0432\u044b \u043e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u041a\u0430\u0439\u043c\u0430\u043d\u043e\u0432\u044b \u043e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "Islas Caim\u00e1n", "common": "Islas Caim\u00e1n"},
            "fin": {"official": "Caymansaaret", "common": "Caymansaaret"}
        },
        "latlng": [19.5, -80.5],
        "demonym": "Caymanian",
        "landlocked": false,
        "borders": [],
        "area": 264
    },
    {
        "name": {
            "common": "Cyprus",
            "official": "Republic of Cyprus",
            "native": {
                "ell": {
                    "official": "\u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03b7\u03c2 \u039a\u03cd\u03c0\u03c1\u03bf\u03c2",
                    "common": "\u039a\u03cd\u03c0\u03c1\u03bf\u03c2"
                },
                "tur": {
                    "official": "K\u0131br\u0131s Cumhuriyeti",
                    "common": "K\u0131br\u0131s"
                }
            }
        },
        "tld": [".cy"],
        "cca2": "CY",
        "ccn3": "196",
        "cca3": "CYP",
        "cioc": "CYP",
        "currency": ["EUR"],
        "callingCode": ["357"],
        "capital": "Nicosia",
        "altSpellings": ["CY", "K\u00fdpros", "K\u0131br\u0131s", "Republic of Cyprus", "\u039a\u03c5\u03c0\u03c1\u03b9\u03b1\u03ba\u03ae \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1", "K\u0131br\u0131s Cumhuriyeti"],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "ell": "Greek",
            "tur": "Turkish"
        },
        "translations": {
            "cym": {"official": "Republic of Cyprus", "common": "Cyprus"},
            "deu": {"official": "Republik Zypern", "common": "Zypern"},
            "fra": {"official": "R\u00e9publique de Chypre", "common": "Chypre"},
            "hrv": {"official": "Republika Cipar", "common": "Cipar"},
            "ita": {"official": "Repubblica di Cipro", "common": "Cipro"},
            "jpn": {"official": "\u30ad\u30d7\u30ed\u30b9\u5171\u548c\u56fd", "common": "\u30ad\u30d7\u30ed\u30b9"},
            "nld": {"official": "Republiek Cyprus", "common": "Cyprus"},
            "por": {"official": "Rep\u00fablica de Chipre", "common": "Chipre"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0438\u043f\u0440", "common": "\u041a\u0438\u043f\u0440"},
            "spa": {"official": "Rep\u00fablica de Chipre", "common": "Chipre"},
            "fin": {"official": "Kyproksen tasavalta", "common": "Kypros"}
        },
        "latlng": [35, 33],
        "demonym": "Cypriot",
        "landlocked": false,
        "borders": ["GBR"],
        "area": 9251
    },
    {
        "name": {
            "common": "Czech Republic",
            "official": "Czech Republic",
            "native": {
                "ces": {
                    "official": "\u010desk\u00e1 republika",
                    "common": "\u010cesk\u00e1 republika"
                },
                "slk": {
                    "official": "\u010cesk\u00e1 republika",
                    "common": "\u010cesk\u00e1 republika"
                }
            }
        },
        "tld": [".cz"],
        "cca2": "CZ",
        "ccn3": "203",
        "cca3": "CZE",
        "cioc": "CZE",
        "currency": ["CZK"],
        "callingCode": ["420"],
        "capital": "Prague",
        "altSpellings": ["CZ", "\u010cesk\u00e1 republika", "\u010cesko"],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "ces": "Czech",
            "slk": "Slovak"
        },
        "translations": {
            "cym": {"official": "Czech Republic", "common": "Y Weriniaeth Tsiec"},
            "deu": {"official": "Tschechische Republik", "common": "Tschechische Republik"},
            "fra": {"official": "R\u00e9publique Tch\u00e8que", "common": "R\u00e9publique tch\u00e8que"},
            "hrv": {"official": "\u010ce\u0161ka", "common": "\u010ce\u0161ka"},
            "ita": {"official": "Repubblica Ceca", "common": "Repubblica Ceca"},
            "jpn": {"official": "\u30c1\u30a7\u30b3\u5171\u548c\u56fd", "common": "\u30c1\u30a7\u30b3"},
            "nld": {"official": "Tsjechische Republiek", "common": "Tsjechi\u00eb"},
            "por": {"official": "Rep\u00fablica Checa", "common": "Rep\u00fablica Checa"},
            "rus": {"official": "\u0427\u0435\u0448\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0427\u0435\u0445\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica Checa", "common": "Rep\u00fablica Checa"},
            "fin": {"official": "T\u0161ekin tasavalta", "common": "T\u0161ekki"}
        },
        "latlng": [49.75, 15.5],
        "demonym": "Czech",
        "landlocked": true,
        "borders": ["AUT", "DEU", "POL", "SVK"],
        "area": 78865
    },
    {
        "name": {
            "common": "Germany",
            "official": "Federal Republic of Germany",
            "native": {
                "deu": {
                    "official": "Bundesrepublik Deutschland",
                    "common": "Deutschland"
                }
            }
        },
        "tld": [".de"],
        "cca2": "DE",
        "ccn3": "276",
        "cca3": "DEU",
        "cioc": "GER",
        "currency": ["EUR"],
        "callingCode": ["49"],
        "capital": "Berlin",
        "altSpellings": ["DE", "Federal Republic of Germany", "Bundesrepublik Deutschland"],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "deu": "German"
        },
        "translations": {
            "deu": {"official": "Bundesrepublik Deutschland", "common": "Deutschland"},
            "fra": {"official": "R\u00e9publique f\u00e9d\u00e9rale d'Allemagne", "common": "Allemagne"},
            "hrv": {"official": "Njema\u010dka Federativna Republika", "common": "Njema\u010dka"},
            "ita": {"official": "Repubblica federale di Germania", "common": "Germania"},
            "jpn": {"official": "\u30c9\u30a4\u30c4\u9023\u90a6\u5171\u548c\u56fd", "common": "\u30c9\u30a4\u30c4"},
            "nld": {"official": "Bondsrepubliek Duitsland", "common": "Duitsland"},
            "por": {"official": "Rep\u00fablica Federal da Alemanha", "common": "Alemanha"},
            "rus": {"official": "\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f", "common": "\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica Federal de Alemania", "common": "Alemania"},
            "fin": {"official": "Saksan liittotasavalta", "common": "Saksa"}
        },
        "latlng": [51, 9],
        "demonym": "German",
        "landlocked": false,
        "borders": ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
        "area": 357114
    },
    {
        "name": {
            "common": "Djibouti",
            "official": "Republic of Djibouti",
            "native": {
                "ara": {
                    "official": "\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u062c\u064a\u0628\u0648\u062a\u064a",
                    "common": "\u062c\u064a\u0628\u0648\u062a\u064a\u200e"
                },
                "fra": {
                    "official": "R\u00e9publique de Djibouti",
                    "common": "Djibouti"
                }
            }
        },
        "tld": [".dj"],
        "cca2": "DJ",
        "ccn3": "262",
        "cca3": "DJI",
        "cioc": "DJI",
        "currency": ["DJF"],
        "callingCode": ["253"],
        "capital": "Djibouti",
        "altSpellings": ["DJ", "Jabuuti", "Gabuuti", "Republic of Djibouti", "R\u00e9publique de Djibouti", "Gabuutih Ummuuno", "Jamhuuriyadda Jabuuti"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "ara": "Arabic",
            "fra": "French"
        },
        "translations": {
            "cym": {"official": "Republic of Djibouti", "common": "Djibouti"},
            "deu": {"official": "Republik Dschibuti", "common": "Dschibuti"},
            "fra": {"official": "R\u00e9publique de Djibouti", "common": "Djibouti"},
            "hrv": {"official": "Republika D\u017eibuti", "common": "D\u017eibuti"},
            "ita": {"official": "Repubblica di Gibuti", "common": "Gibuti"},
            "jpn": {"official": "\u30b8\u30d6\u30c1\u5171\u548c\u56fd", "common": "\u30b8\u30d6\u30c1"},
            "nld": {"official": "Republiek Djibouti", "common": "Djibouti"},
            "por": {"official": "Rep\u00fablica do Djibouti", "common": "Djibouti"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0436\u0438\u0431\u0443\u0442\u0438", "common": "\u0414\u0436\u0438\u0431\u0443\u0442\u0438"},
            "spa": {"official": "Rep\u00fablica de Djibouti", "common": "Yibuti"},
            "fin": {"official": "Dijiboutin tasavalta", "common": "Dijibouti"}
        },
        "latlng": [11.5, 43],
        "demonym": "Djibouti",
        "landlocked": false,
        "borders": ["ERI", "ETH", "SOM"],
        "area": 23200
    },
    {
        "name": {
            "common": "Dominica",
            "official": "Commonwealth of Dominica",
            "native": {
                "eng": {
                    "official": "Commonwealth of Dominica",
                    "common": "Dominica"
                }
            }
        },
        "tld": [".dm"],
        "cca2": "DM",
        "ccn3": "212",
        "cca3": "DMA",
        "cioc": "DMA",
        "currency": ["XCD"],
        "callingCode": ["1767"],
        "capital": "Roseau",
        "altSpellings": ["DM", "Dominique", "Wai\u2018tu kubuli", "Commonwealth of Dominica"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "cym": {"official": "Commonwealth of Dominica", "common": "Dominica"},
            "deu": {"official": "Commonwealth of Dominica", "common": "Dominica"},
            "fra": {"official": "Commonwealth de la Dominique", "common": "Dominique"},
            "hrv": {"official": "Zajednica Dominika", "common": "Dominika"},
            "ita": {"official": "Commonwealth of Dominica", "common": "Dominica"},
            "jpn": {"official": "\u30c9\u30df\u30cb\u30ab\u56fd", "common": "\u30c9\u30df\u30cb\u30ab\u56fd"},
            "nld": {"official": "Gemenebest Dominica", "common": "Dominica"},
            "por": {"official": "Comunidade da Dominica", "common": "Dominica"},
            "rus": {"official": "\u0421\u043e\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043e \u0414\u043e\u043c\u0438\u043d\u0438\u043a\u0438", "common": "\u0414\u043e\u043c\u0438\u043d\u0438\u043a\u0430"},
            "spa": {"official": "Mancomunidad de Dominica", "common": "Dominica"},
            "fin": {"official": "Dominican liittovaltio", "common": "Dominica"}
        },
        "latlng": [15.41666666, -61.33333333],
        "demonym": "Dominican",
        "landlocked": false,
        "borders": [],
        "area": 751
    },
    {
        "name": {
            "common": "Denmark",
            "official": "Kingdom of Denmark",
            "native": {
                "dan": {
                    "official": "Kongeriget Danmark",
                    "common": "Danmark"
                }
            }
        },
        "tld": [".dk"],
        "cca2": "DK",
        "ccn3": "208",
        "cca3": "DNK",
        "cioc": "DEN",
        "currency": ["DKK"],
        "callingCode": ["45"],
        "capital": "Copenhagen",
        "altSpellings": ["DK", "Danmark", "Kingdom of Denmark", "Kongeriget Danmark"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "dan": "Danish"
        },
        "translations": {
            "cym": {"official": "Kingdom of Denmark", "common": "Denmarc"},
            "deu": {"official": "K\u00f6nigreich D\u00e4nemark", "common": "D\u00e4nemark"},
            "fra": {"official": "Royaume de Danemark", "common": "Danemark"},
            "hrv": {"official": "Kraljevina Danska", "common": "Danska"},
            "ita": {"official": "Regno di Danimarca", "common": "Danimarca"},
            "jpn": {"official": "\u30c7\u30f3\u30de\u30fc\u30af\u738b\u56fd", "common": "\u30c7\u30f3\u30de\u30fc\u30af"},
            "nld": {"official": "Koninkrijk Denemarken", "common": "Denemarken"},
            "por": {"official": "Reino da Dinamarca", "common": "Dinamarca"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u0414\u0430\u043d\u0438\u044f", "common": "\u0414\u0430\u043d\u0438\u044f"},
            "spa": {"official": "Reino de Dinamarca", "common": "Dinamarca"},
            "fin": {"official": "Tanskan kuningaskunta", "common": "Tanska"}
        },
        "latlng": [56, 10],
        "demonym": "Danish",
        "landlocked": false,
        "borders": ["DEU"],
        "area": 43094
    },
    {
        "name": {
            "common": "Dominican Republic",
            "official": "Dominican Republic",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica Dominicana",
                    "common": "Rep\u00fablica Dominicana"
                }
            }
        },
        "tld": [".do"],
        "cca2": "DO",
        "ccn3": "214",
        "cca3": "DOM",
        "cioc": "DOM",
        "currency": ["DOP"],
        "callingCode": ["1809", "1829", "1849"],
        "capital": "Santo Domingo",
        "altSpellings": ["DO"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "cym": {"official": "Dominican Republic", "common": "Gweriniaeth_Dominica"},
            "deu": {"official": "Dominikanische Republik", "common": "Dominikanische Republik"},
            "fra": {"official": "R\u00e9publique Dominicaine", "common": "R\u00e9publique dominicaine"},
            "hrv": {"official": "Dominikanska Republika", "common": "Dominikanska Republika"},
            "ita": {"official": "Repubblica Dominicana", "common": "Repubblica Dominicana"},
            "jpn": {"official": "\u30c9\u30df\u30cb\u30ab\u5171\u548c\u56fd", "common": "\u30c9\u30df\u30cb\u30ab\u5171\u548c\u56fd"},
            "nld": {"official": "Dominicaanse Republiek", "common": "Dominicaanse Republiek"},
            "por": {"official": "Rep\u00fablica Dominicana", "common": "Rep\u00fablica Dominicana"},
            "rus": {"official": "\u0414\u043e\u043c\u0438\u043d\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0414\u043e\u043c\u0438\u043d\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430"},
            "spa": {"official": "Rep\u00fablica Dominicana", "common": "Rep\u00fablica Dominicana"},
            "fin": {"official": "Dominikaaninen tasavalta", "common": "Dominikaaninen tasavalta"}
        },
        "latlng": [19, -70.66666666],
        "demonym": "Dominican",
        "landlocked": false,
        "borders": ["HTI"],
        "area": 48671
    },
    {
        "name": {
            "common": "Algeria",
            "official": "People's Democratic Republic of Algeria",
            "native": {
                "ara": {
                    "official": "\u0627\u0644\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u062f\u064a\u0645\u0642\u0631\u0627\u0637\u064a\u0629 \u0627\u0644\u0634\u0639\u0628\u064a\u0629 \u0627\u0644\u062c\u0632\u0627\u0626\u0631\u064a\u0629",
                    "common": "\u0627\u0644\u062c\u0632\u0627\u0626\u0631"
                }
            }
        },
        "tld": [".dz", "\u0627\u0644\u062c\u0632\u0627\u0626\u0631."],
        "cca2": "DZ",
        "ccn3": "012",
        "cca3": "DZA",
        "cioc": "ALG",
        "currency": ["DZD"],
        "callingCode": ["213"],
        "capital": "Algiers",
        "altSpellings": ["DZ", "Dzayer", "Alg\u00e9rie"],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "cym": {"official": "People's Democratic Republic of Algeria", "common": "Algeria"},
            "deu": {"official": "Demokratische Volksrepublik Algerien", "common": "Algerien"},
            "fra": {"official": "R\u00e9publique d\u00e9mocratique populaire d'Alg\u00e9rie", "common": "Alg\u00e9rie"},
            "hrv": {"official": "Narodna Demokratska Republika Al\u017eir", "common": "Al\u017eir"},
            "ita": {"official": "Repubblica popolare democratica di Algeria", "common": "Algeria"},
            "jpn": {"official": "\u30a2\u30eb\u30b8\u30a7\u30ea\u30a2\u4eba\u6c11\u6c11\u4e3b\u5171\u548c\u56fd", "common": "\u30a2\u30eb\u30b8\u30a7\u30ea\u30a2"},
            "nld": {"official": "Democratische Volksrepubliek Algerije", "common": "Algerije"},
            "por": {"official": "Rep\u00fablica Democr\u00e1tica e Popular da Arg\u00e9lia", "common": "Alg\u00e9ria"},
            "rus": {"official": "\u041d\u0430\u0440\u043e\u0434\u043d\u043e-\u0414\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0436\u0438\u0440", "common": "\u0410\u043b\u0436\u0438\u0440"},
            "spa": {"official": "Rep\u00fablica Democr\u00e1tica Popular de Argelia", "common": "Argelia"},
            "fin": {"official": "Algerian demokraattinen kansantasavalta", "common": "Algeria"}
        },
        "latlng": [28, 3],
        "demonym": "Algerian",
        "landlocked": false,
        "borders": ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
        "area": 2381741
    },
    {
        "name": {
            "common": "Ecuador",
            "official": "Republic of Ecuador",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica del Ecuador",
                    "common": "Ecuador"
                }
            }
        },
        "tld": [".ec"],
        "cca2": "EC",
        "ccn3": "218",
        "cca3": "ECU",
        "cioc": "ECU",
        "currency": ["USD"],
        "callingCode": ["593"],
        "capital": "Quito",
        "altSpellings": ["EC", "Republic of Ecuador", "Rep\u00fablica del Ecuador"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "cym": {"official": "Republic of Ecuador", "common": "Ecwador"},
            "deu": {"official": "Republik Ecuador", "common": "Ecuador"},
            "fra": {"official": "R\u00e9publique de l'\u00c9quateur", "common": "\u00c9quateur"},
            "hrv": {"official": "Republika Ekvador", "common": "Ekvador"},
            "ita": {"official": "Repubblica dell'Ecuador", "common": "Ecuador"},
            "jpn": {"official": "\u30a8\u30af\u30a2\u30c9\u30eb\u5171\u548c\u56fd", "common": "\u30a8\u30af\u30a2\u30c9\u30eb"},
            "nld": {"official": "Republiek Ecuador", "common": "Ecuador"},
            "por": {"official": "Rep\u00fablica do Equador", "common": "Equador"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u042d\u043a\u0432\u0430\u0434\u043e\u0440", "common": "\u042d\u043a\u0432\u0430\u0434\u043e\u0440"},
            "spa": {"official": "Rep\u00fablica del Ecuador", "common": "Ecuador"},
            "fin": {"official": "Ecuadorin tasavalta", "common": "Ecuador"}
        },
        "latlng": [-2, -77.5],
        "demonym": "Ecuadorean",
        "landlocked": false,
        "borders": ["COL", "PER"],
        "area": 276841
    },
    {
        "name": {
            "common": "Egypt",
            "official": "Arab Republic of Egypt",
            "native": {
                "ara": {
                    "official": "\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0645\u0635\u0631 \u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                    "common": "\u0645\u0635\u0631"
                }
            }
        },
        "tld": [".eg", ".\u0645\u0635\u0631"],
        "cca2": "EG",
        "ccn3": "818",
        "cca3": "EGY",
        "cioc": "EGY",
        "currency": ["EGP"],
        "callingCode": ["20"],
        "capital": "Cairo",
        "altSpellings": ["EG", "Arab Republic of Egypt"],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "cym": {"official": "Arab Republic of Egypt", "common": "Yr Aifft"},
            "deu": {"official": "Arabische Republik \u00c4gypten", "common": "\u00c4gypten"},
            "fra": {"official": "R\u00e9publique arabe d'\u00c9gypte", "common": "\u00c9gypte"},
            "hrv": {"official": "Arapska Republika Egipat", "common": "Egipat"},
            "ita": {"official": "Repubblica araba d'Egitto", "common": "Egitto"},
            "jpn": {"official": "\u30a8\u30b8\u30d7\u30c8\u00b7\u30a2\u30e9\u30d6\u5171\u548c\u56fd", "common": "\u30a8\u30b8\u30d7\u30c8"},
            "nld": {"official": "Arabische Republiek Egypte", "common": "Egypte"},
            "por": {"official": "Rep\u00fablica \u00c1rabe do Egipto", "common": "Egito"},
            "rus": {"official": "\u0410\u0440\u0430\u0431\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0415\u0433\u0438\u043f\u0435\u0442", "common": "\u0415\u0433\u0438\u043f\u0435\u0442"},
            "spa": {"official": "Rep\u00fablica \u00c1rabe de Egipto", "common": "Egipto"},
            "fin": {"official": "Egyptin arabitasavalta", "common": "Egypti"}
        },
        "latlng": [27, 30],
        "demonym": "Egyptian",
        "landlocked": false,
        "borders": ["ISR", "LBY", "SDN"],
        "area": 1002450
    },
    {
        "name": {
            "common": "Eritrea",
            "official": "State of Eritrea",
            "native": {
                "ara": {
                    "official": "\u062f\u0648\u0644\u0629 \u0625\u0631\u062a\u0631\u064a\u0627",
                    "common": "\u0625\u0631\u062a\u0631\u064a\u0627\u200e"
                },
                "eng": {
                    "official": "State of Eritrea",
                    "common": "Eritrea"
                },
                "tir": {
                    "official": "\u1203\u1308\u1228 \u12a4\u122d\u1275\u122b",
                    "common": "\u12a4\u122d\u1275\u122b"
                }
            }
        },
        "tld": [".er"],
        "cca2": "ER",
        "ccn3": "232",
        "cca3": "ERI",
        "cioc": "ERI",
        "currency": ["ERN"],
        "callingCode": ["291"],
        "capital": "Asmara",
        "altSpellings": ["ER", "State of Eritrea", "\u1203\u1308\u1228 \u12a4\u122d\u1275\u122b", "Dawlat Iritriy\u00e1", "\u02beErtr\u0101", "Iritriy\u0101"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "ara": "Arabic",
            "eng": "English",
            "tir": "Tigrinya"
        },
        "translations": {
            "cym": {"official": "State of Eritrea", "common": "Eritrea"},
            "deu": {"official": "Staat Eritrea", "common": "Eritrea"},
            "fra": {"official": "\u00c9tat d'\u00c9rythr\u00e9e", "common": "\u00c9rythr\u00e9e"},
            "hrv": {"official": "Dr\u017eava Eritreji", "common": "Eritreja"},
            "ita": {"official": "Stato di Eritrea", "common": "Eritrea"},
            "jpn": {"official": "\u30a8\u30ea\u30c8\u30ea\u30a2\u56fd", "common": "\u30a8\u30ea\u30c8\u30ea\u30a2"},
            "nld": {"official": "Staat Eritrea", "common": "Eritrea"},
            "por": {"official": "Estado da Eritreia", "common": "Eritreia"},
            "rus": {"official": "\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u042d\u0440\u0438\u0442\u0440\u0435\u044f", "common": "\u042d\u0440\u0438\u0442\u0440\u0435\u044f"},
            "spa": {"official": "Estado de Eritrea", "common": "Eritrea"},
            "fin": {"official": "Eritrean valtio", "common": "Eritrea"}
        },
        "latlng": [15, 39],
        "demonym": "Eritrean",
        "landlocked": false,
        "borders": ["DJI", "ETH", "SDN"],
        "area": 117600
    },
    {
        "name": {
            "common": "Western Sahara",
            "official": "Sahrawi Arab Democratic Republic",
            "native": {
                "ber": {
                    "official": "Sahrawi Arab Democratic Republic",
                    "common": "Western Sahara"
                },
                "mey": {
                    "official": "\u0627\u0644\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0635\u062d\u0631\u0627\u0648\u064a\u0629 \u0627\u0644\u062f\u064a\u0645\u0642\u0631\u0627\u0637\u064a\u0629",
                    "common": "\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629"
                },
                "spa": {
                    "official": "Rep\u00fablica \u00c1rabe Saharaui Democr\u00e1tica",
                    "common": "Sahara Occidental"
                }
            }
        },
        "tld": [".eh"],
        "cca2": "EH",
        "ccn3": "732",
        "cca3": "ESH",
        "cioc": "",
        "currency": ["MAD", "DZD", "MRO"],
        "callingCode": ["212"],
        "capital": "El Aai\u00fan",
        "altSpellings": ["EH", "Tane\u1e93roft Tutrimt"],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ber": "Berber",
            "mey": "Hassaniya",
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "Demokratische Arabische Republik Sahara", "common": "Westsahara"},
            "fra": {"official": "R\u00e9publique arabe sahraouie d\u00e9mocratique", "common": "Sahara Occidental"},
            "hrv": {"official": "Sahrawi Arab Demokratska Republika", "common": "Zapadna Sahara"},
            "ita": {"official": "Repubblica Araba Saharawi Democratica", "common": "Sahara Occidentale"},
            "jpn": {"official": "\u30b5\u30cf\u30e9\u30a2\u30e9\u30d6\u6c11\u4e3b\u5171\u548c\u56fd", "common": "\u897f\u30b5\u30cf\u30e9"},
            "nld": {"official": "Sahrawi Arabische Democratische Republiek", "common": "Westelijke Sahara"},
            "por": {"official": "Rep\u00fablica \u00c1rabe Saharaui Democr\u00e1tica", "common": "Saara Ocidental"},
            "rus": {"official": "Sahrawi \u0410\u0440\u0430\u0431\u0441\u043a\u0430\u044f \u0414\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0417\u0430\u043f\u0430\u0434\u043d\u0430\u044f \u0421\u0430\u0445\u0430\u0440\u0430"},
            "spa": {"official": "Rep\u00fablica \u00c1rabe Saharaui Democr\u00e1tica", "common": "Sahara Occidental"},
            "fin": {"official": "L\u00e4nsi-Sahara", "common": "L\u00e4nsi-Sahara"}
        },
        "latlng": [24.5, -13],
        "demonym": "Sahrawi",
        "landlocked": false,
        "borders": ["DZA", "MRT", "MAR"],
        "area": 266000
    },
    {
        "name": {
            "common": "Spain",
            "official": "Kingdom of Spain",
            "native": {
                "cat": {
                    "official": "Regne d'Espanya",
                    "common": "Espanya"
                },
                "eus": {
                    "official": "Espainiako Erresuma",
                    "common": "Espainia"
                },
                "glg": {
                    "official": "Reino de Espa\u00f1a",
                    "common": ""
                },
                "oci": {
                    "official": "Reialme d'Espanha",
                    "common": "Espanha"
                },
                "spa": {
                    "official": "Reino de Espa\u00f1a",
                    "common": "Espa\u00f1a"
                }
            }
        },
        "tld": [".es"],
        "cca2": "ES",
        "ccn3": "724",
        "cca3": "ESP",
        "cioc": "ESP",
        "currency": ["EUR"],
        "callingCode": ["34"],
        "capital": "Madrid",
        "altSpellings": ["ES", "Kingdom of Spain", "Reino de Espa\u00f1a"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "cat": "Catalan",
            "eus": "Basque",
            "glg": "Galician",
            "oci": "Occitan",
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "K\u00f6nigreich Spanien", "common": "Spanien"},
            "fra": {"official": "Royaume d'Espagne", "common": "Espagne"},
            "hrv": {"official": "Kraljevina \u0160panjolska", "common": "\u0160panjolska"},
            "ita": {"official": "Regno di Spagna", "common": "Spagna"},
            "jpn": {"official": "\u30b9\u30da\u30a4\u30f3\u738b\u56fd", "common": "\u30b9\u30da\u30a4\u30f3"},
            "nld": {"official": "Koninkrijk Spanje", "common": "Spanje"},
            "por": {"official": "Reino de Espanha", "common": "Espanha"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u0418\u0441\u043f\u0430\u043d\u0438\u044f", "common": "\u0418\u0441\u043f\u0430\u043d\u0438\u044f"},
            "spa": {"official": "Reino de Espa\u00f1a", "common": "Espa\u00f1a"},
            "fin": {"official": "Espanjan kuningaskunta", "common": "Espanja"}
        },
        "latlng": [40, -4],
        "demonym": "Spanish",
        "landlocked": false,
        "borders": ["AND", "FRA", "GIB", "PRT", "MAR"],
        "area": 505992
    },
    {
        "name": {
            "common": "Estonia",
            "official": "Republic of Estonia",
            "native": {
                "est": {
                    "official": "Eesti Vabariik",
                    "common": "Eesti"
                }
            }
        },
        "tld": [".ee"],
        "cca2": "EE",
        "ccn3": "233",
        "cca3": "EST",
        "cioc": "EST",
        "currency": ["EUR"],
        "callingCode": ["372"],
        "capital": "Tallinn",
        "altSpellings": ["EE", "Eesti", "Republic of Estonia", "Eesti Vabariik"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "est": "Estonian"
        },
        "translations": {
            "cym": {"official": "Republic of Estonia", "common": "Estonia"},
            "deu": {"official": "Republik Estland", "common": "Estland"},
            "fra": {"official": "R\u00e9publique d'Estonie", "common": "Estonie"},
            "hrv": {"official": "Republika Estonija", "common": "Estonija"},
            "ita": {"official": "Repubblica di Estonia", "common": "Estonia"},
            "jpn": {"official": "\u30a8\u30b9\u30c8\u30cb\u30a2\u5171\u548c\u56fd", "common": "\u30a8\u30b9\u30c8\u30cb\u30a2"},
            "nld": {"official": "Republiek Estland", "common": "Estland"},
            "por": {"official": "Rep\u00fablica da Est\u00f3nia", "common": "Est\u00f3nia"},
            "rus": {"official": "\u042d\u0441\u0442\u043e\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u042d\u0441\u0442\u043e\u043d\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Estonia", "common": "Estonia"},
            "fin": {"official": "Viron tasavalta", "common": "Viro"}
        },
        "latlng": [59, 26],
        "demonym": "Estonian",
        "landlocked": false,
        "borders": ["LVA", "RUS"],
        "area": 45227
    },
    {
        "name": {
            "common": "Ethiopia",
            "official": "Federal Democratic Republic of Ethiopia",
            "native": {
                "amh": {
                    "official": "\u12e8\u12a2\u1275\u12ee\u1335\u12eb \u134c\u12f4\u122b\u120b\u12ca \u12f2\u121e\u12ad\u122b\u1232\u12eb\u12ca \u122a\u1350\u1265\u120a\u12ad",
                    "common": "\u12a2\u1275\u12ee\u1335\u12eb"
                }
            }
        },
        "tld": [".et"],
        "cca2": "ET",
        "ccn3": "231",
        "cca3": "ETH",
        "cioc": "ETH",
        "currency": ["ETB"],
        "callingCode": ["251"],
        "capital": "Addis Ababa",
        "altSpellings": ["ET", "\u02be\u012aty\u014d\u1e57\u1e57y\u0101", "Federal Democratic Republic of Ethiopia", "\u12e8\u12a2\u1275\u12ee\u1335\u12eb \u134c\u12f4\u122b\u120b\u12ca \u12f2\u121e\u12ad\u122b\u1232\u12eb\u12ca \u122a\u1350\u1265\u120a\u12ad"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "amh": "Amharic"
        },
        "translations": {
            "cym": {"official": "Federal Democratic Republic of Ethiopia", "common": "Ethiopia"},
            "deu": {"official": "Demokratische Bundesrepublik \u00c4thiopien", "common": "\u00c4thiopien"},
            "fra": {"official": "R\u00e9publique f\u00e9d\u00e9rale d\u00e9mocratique d'\u00c9thiopie", "common": "\u00c9thiopie"},
            "hrv": {"official": "Savezna Demokratska Republika Etiopija", "common": "Etiopija"},
            "ita": {"official": "Repubblica federale democratica di Etiopia", "common": "Etiopia"},
            "jpn": {"official": "\u30a8\u30c1\u30aa\u30d4\u30a2\u9023\u90a6\u6c11\u4e3b\u5171\u548c\u56fd", "common": "\u30a8\u30c1\u30aa\u30d4\u30a2"},
            "nld": {"official": "Federale Democratische Republiek Ethiopi\u00eb", "common": "Ethiopi\u00eb"},
            "por": {"official": "Rep\u00fablica Federal Democr\u00e1tica da Eti\u00f3pia", "common": "Eti\u00f3pia"},
            "rus": {"official": "\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0414\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u042d\u0444\u0438\u043e\u043f\u0438\u044f", "common": "\u042d\u0444\u0438\u043e\u043f\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica Democr\u00e1tica Federal de Etiop\u00eda", "common": "Etiop\u00eda"},
            "fin": {"official": "Etiopian demokraattinen liittotasavalta", "common": "Etiopia"}
        },
        "latlng": [8, 38],
        "demonym": "Ethiopian",
        "landlocked": true,
        "borders": ["DJI", "ERI", "KEN", "SOM", "SSD", "SDN"],
        "area": 1104300
    },
    {
        "name": {
            "common": "Finland",
            "official": "Republic of Finland",
            "native": {
                "fin": {
                    "official": "Suomen tasavalta",
                    "common": "Suomi"
                },
                "swe": {
                    "official": "Republiken Finland",
                    "common": "Finland"
                }
            }
        },
        "tld": [".fi"],
        "cca2": "FI",
        "ccn3": "246",
        "cca3": "FIN",
        "cioc": "FIN",
        "currency": ["EUR"],
        "callingCode": ["358"],
        "capital": "Helsinki",
        "altSpellings": ["FI", "Suomi", "Republic of Finland", "Suomen tasavalta", "Republiken Finland"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "fin": "Finnish",
            "swe": "Swedish"
        },
        "translations": {
            "deu": {"official": "Republik Finnland", "common": "Finnland"},
            "fra": {"official": "R\u00e9publique de Finlande", "common": "Finlande"},
            "hrv": {"official": "Republika Finska", "common": "Finska"},
            "ita": {"official": "Repubblica di Finlandia", "common": "Finlandia"},
            "jpn": {"official": "\u30d5\u30a3\u30f3\u30e9\u30f3\u30c9\u5171\u548c\u56fd", "common": "\u30d5\u30a3\u30f3\u30e9\u30f3\u30c9"},
            "nld": {"official": "Republiek Finland", "common": "Finland"},
            "por": {"official": "Rep\u00fablica da Finl\u00e2ndia", "common": "Finl\u00e2ndia"},
            "rus": {"official": "\u0424\u0438\u043d\u043b\u044f\u043d\u0434\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0424\u0438\u043d\u043b\u044f\u043d\u0434\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Finlandia", "common": "Finlandia"},
            "fin": {"official": "Suomen tasavalta", "common": "Suomi"}
        },
        "latlng": [64, 26],
        "demonym": "Finnish",
        "landlocked": false,
        "borders": ["NOR", "SWE", "RUS"],
        "area": 338424
    },
    {
        "name": {
            "common": "Fiji",
            "official": "Republic of Fiji",
            "native": {
                "eng": {
                    "official": "Republic of Fiji",
                    "common": "Fiji"
                },
                "fij": {
                    "official": "Matanitu Tugalala o Viti",
                    "common": "Viti"
                },
                "hif": {
                    "official": "\u0930\u093f\u092a\u092c\u094d\u0932\u093f\u0915 \u0911\u092b \u092b\u0940\u091c\u0940",
                    "common": "\u092b\u093f\u091c\u0940"
                }
            }
        },
        "tld": [".fj"],
        "cca2": "FJ",
        "ccn3": "242",
        "cca3": "FJI",
        "cioc": "FIJ",
        "currency": ["FJD"],
        "callingCode": ["679"],
        "capital": "Suva",
        "altSpellings": ["FJ", "Viti", "Republic of Fiji", "Matanitu ko Viti", "Fij\u012b Ga\u1e47ar\u0101jya"],
        "region": "Oceania",
        "subregion": "Melanesia",
        "languages": {
            "eng": "English",
            "fij": "Fijian",
            "hif": "Fiji Hindi"
        },
        "translations": {
            "deu": {"official": "Republik Fidschi", "common": "Fidschi"},
            "fra": {"official": "R\u00e9publique des Fidji", "common": "Fidji"},
            "hrv": {"official": "Republika Fid\u017ei", "common": "Fi\u0111i"},
            "ita": {"official": "Repubblica di Figi", "common": "Figi"},
            "jpn": {"official": "\u30d5\u30a3\u30b8\u30fc\u5171\u548c\u56fd", "common": "\u30d5\u30a3\u30b8\u30fc"},
            "nld": {"official": "Republiek Fiji", "common": "Fiji"},
            "por": {"official": "Rep\u00fablica de Fiji", "common": "Fiji"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0424\u0438\u0434\u0436\u0438", "common": "\u0424\u0438\u0434\u0436\u0438"},
            "spa": {"official": "Rep\u00fablica de Fiji", "common": "Fiyi"},
            "fin": {"official": "Fid\u017ein tasavalta", "common": "Fid\u017ei"}
        },
        "latlng": [-18, 175],
        "demonym": "Fijian",
        "landlocked": false,
        "borders": [],
        "area": 18272
    },
    {
        "name": {
            "common": "Falkland Islands",
            "official": "Falkland Islands",
            "native": {
                "eng": {
                    "official": "Falkland Islands",
                    "common": "Falkland Islands"
                }
            }
        },
        "tld": [".fk"],
        "cca2": "FK",
        "ccn3": "238",
        "cca3": "FLK",
        "cioc": "",
        "currency": ["FKP"],
        "callingCode": ["500"],
        "capital": "Stanley",
        "altSpellings": ["FK", "Islas Malvinas", "Falkland Islands (Malvinas)"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Falkland-Inseln", "common": "Falklandinseln"},
            "fra": {"official": "\u00celes Falkland", "common": "\u00celes Malouines"},
            "hrv": {"official": "Falklandski otoci", "common": "Falklandski Otoci"},
            "ita": {"official": "Isole Falkland", "common": "Isole Falkland o Isole Malvine"},
            "jpn": {"official": "\u30d5\u30a9\u30fc\u30af\u30e9\u30f3\u30c9", "common": "\u30d5\u30a9\u30fc\u30af\u30e9\u30f3\u30c9\uff08\u30de\u30eb\u30d3\u30ca\u30b9\uff09\u8af8\u5cf6"},
            "nld": {"official": "Falkland eilanden", "common": "Falklandeilanden"},
            "por": {"official": "Ilhas Malvinas", "common": "Ilhas Malvinas"},
            "rus": {"official": "\u0424\u043e\u043b\u043a\u043b\u0435\u043d\u0434\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u0424\u043e\u043b\u043a\u043b\u0435\u043d\u0434\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "islas Malvinas", "common": "Islas Malvinas"},
            "fin": {"official": "Falkandinsaaret", "common": "Falkandinsaaret"}
        },
        "latlng": [-51.75, -59],
        "demonym": "Falkland Islander",
        "landlocked": false,
        "borders": [],
        "area": 12173
    },
    {
        "name": {
            "common": "France",
            "official": "French Republic",
            "native": {
                "fra": {
                    "official": "R\u00e9publique fran\u00e7aise",
                    "common": "France"
                }
            }
        },
        "tld": [".fr"],
        "cca2": "FR",
        "ccn3": "250",
        "cca3": "FRA",
        "cioc": "FRA",
        "currency": ["EUR"],
        "callingCode": ["33"],
        "capital": "Paris",
        "altSpellings": ["FR", "French Republic", "R\u00e9publique fran\u00e7aise"],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Franz\u00f6sische Republik", "common": "Frankreich"},
            "fra": {"official": "R\u00e9publique fran\u00e7aise", "common": "France"},
            "hrv": {"official": "Francuska Republika", "common": "Francuska"},
            "ita": {"official": "Repubblica francese", "common": "Francia"},
            "jpn": {"official": "\u30d5\u30e9\u30f3\u30b9\u5171\u548c\u56fd", "common": "\u30d5\u30e9\u30f3\u30b9"},
            "nld": {"official": "Franse Republiek", "common": "Frankrijk"},
            "por": {"official": "Rep\u00fablica Francesa", "common": "Fran\u00e7a"},
            "rus": {"official": "\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0424\u0440\u0430\u043d\u0446\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica franc\u00e9s", "common": "Francia"},
            "fin": {"official": "Ranskan tasavalta", "common": "Ranska"}
        },
        "latlng": [46, 2],
        "demonym": "French",
        "landlocked": false,
        "borders": ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
        "area": 551695
    },
    {
        "name": {
            "common": "Faroe Islands",
            "official": "Faroe Islands",
            "native": {
                "dan": {
                    "official": "F\u00e6r\u00f8erne",
                    "common": "F\u00e6r\u00f8erne"
                },
                "fao": {
                    "official": "F\u00f8royar",
                    "common": "F\u00f8royar"
                }
            }
        },
        "tld": [".fo"],
        "cca2": "FO",
        "ccn3": "234",
        "cca3": "FRO",
        "cioc": "",
        "currency": ["DKK"],
        "callingCode": ["298"],
        "capital": "T\u00f3rshavn",
        "altSpellings": ["FO", "F\u00f8royar", "F\u00e6r\u00f8erne"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "dan": "Danish",
            "fao": "Faroese"
        },
        "translations": {
            "deu": {"official": "F\u00e4r\u00f6er", "common": "F\u00e4r\u00f6er-Inseln"},
            "fra": {"official": "\u00celes F\u00e9ro\u00e9", "common": "\u00celes F\u00e9ro\u00e9"},
            "hrv": {"official": "Farski Otoci", "common": "Farski Otoci"},
            "ita": {"official": "Isole Faroe", "common": "Isole Far Oer"},
            "jpn": {"official": "\u30d5\u30a7\u30ed\u30fc\u8af8\u5cf6", "common": "\u30d5\u30a7\u30ed\u30fc\u8af8\u5cf6"},
            "nld": {"official": "Faer\u00f6er", "common": "Faer\u00f6er"},
            "por": {"official": "Ilhas Faroe", "common": "Ilhas Faro\u00e9"},
            "rus": {"official": "\u0424\u0430\u0440\u0435\u0440\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u0424\u0430\u0440\u0435\u0440\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "Islas Feroe", "common": "Islas Faroe"},
            "fin": {"official": "F\u00e4rsaaret", "common": "F\u00e4rsaaret"}
        },
        "latlng": [62, -7],
        "demonym": "Faroese",
        "landlocked": false,
        "borders": [],
        "area": 1393
    },
    {
        "name": {
            "common": "Micronesia",
            "official": "Federated States of Micronesia",
            "native": {
                "eng": {
                    "official": "Federated States of Micronesia",
                    "common": "Micronesia"
                }
            }
        },
        "tld": [".fm"],
        "cca2": "FM",
        "ccn3": "583",
        "cca3": "FSM",
        "cioc": "FSM",
        "currency": ["USD"],
        "callingCode": ["691"],
        "capital": "Palikir",
        "altSpellings": ["FM", "Federated States of Micronesia", "Micronesia, Federated States of"],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "F\u00f6derierte Staaten von Mikronesien", "common": "Mikronesien"},
            "fra": {"official": "\u00c9tats f\u00e9d\u00e9r\u00e9s de Micron\u00e9sie", "common": "Micron\u00e9sie"},
            "hrv": {"official": "Savezne Dr\u017eave Mikronezije", "common": "Mikronezija"},
            "ita": {"official": "Stati federati di Micronesia", "common": "Micronesia"},
            "jpn": {"official": "\u30df\u30af\u30ed\u30cd\u30b7\u30a2\u9023\u90a6", "common": "\u30df\u30af\u30ed\u30cd\u30b7\u30a2\u9023\u90a6"},
            "nld": {"official": "Federale Staten van Micronesia", "common": "Micronesi\u00eb"},
            "por": {"official": "Estados Federados da Micron\u00e9sia", "common": "Micron\u00e9sia"},
            "rus": {"official": "\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0428\u0442\u0430\u0442\u044b \u041c\u0438\u043a\u0440\u043e\u043d\u0435\u0437\u0438\u0438", "common": "\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0428\u0442\u0430\u0442\u044b \u041c\u0438\u043a\u0440\u043e\u043d\u0435\u0437\u0438\u0438"},
            "spa": {"official": "Estados Federados de Micronesia", "common": "Micronesia"},
            "fin": {"official": "Mikronesian liittovaltio", "common": "Mikronesia"}
        },
        "latlng": [6.91666666, 158.25],
        "demonym": "Micronesian",
        "landlocked": false,
        "borders": [],
        "area": 702
    },
    {
        "name": {
            "common": "Gabon",
            "official": "Gabonese Republic",
            "native": {
                "fra": {
                    "official": "R\u00e9publique gabonaise",
                    "common": "Gabon"
                }
            }
        },
        "tld": [".ga"],
        "cca2": "GA",
        "ccn3": "266",
        "cca3": "GAB",
        "cioc": "GAB",
        "currency": ["XAF"],
        "callingCode": ["241"],
        "capital": "Libreville",
        "altSpellings": ["GA", "Gabonese Republic", "R\u00e9publique Gabonaise"],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Gabunische Republik", "common": "Gabun"},
            "fra": {"official": "R\u00e9publique gabonaise", "common": "Gabon"},
            "hrv": {"official": "Gabon Republika", "common": "Gabon"},
            "ita": {"official": "Repubblica gabonese", "common": "Gabon"},
            "jpn": {"official": "\u30ac\u30dc\u30f3\u5171\u548c\u56fd", "common": "\u30ac\u30dc\u30f3"},
            "nld": {"official": "Republiek Gabon", "common": "Gabon"},
            "por": {"official": "Rep\u00fablica do Gab\u00e3o", "common": "Gab\u00e3o"},
            "rus": {"official": "\u0413\u0430\u0431\u043e\u043d\u0430 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0413\u0430\u0431\u043e\u043d"},
            "spa": {"official": "Rep\u00fablica de Gab\u00f3n", "common": "Gab\u00f3n"},
            "fin": {"official": "Gabonin tasavalta", "common": "Gabon"}
        },
        "latlng": [-1, 11.75],
        "demonym": "Gabonese",
        "landlocked": false,
        "borders": ["CMR", "COG", "GNQ"],
        "area": 267668
    },
    {
        "name": {
            "common": "United Kingdom",
            "official": "United Kingdom of Great Britain and Northern Ireland",
            "native": {
                "eng": {
                    "official": "United Kingdom of Great Britain and Northern Ireland",
                    "common": "United Kingdom"
                }
            }
        },
        "tld": [".uk"],
        "cca2": "GB",
        "ccn3": "826",
        "cca3": "GBR",
        "cioc": "GBR",
        "currency": ["GBP"],
        "callingCode": ["44"],
        "capital": "London",
        "altSpellings": ["GB", "UK", "Great Britain"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Vereinigtes K\u00f6nigreich Gro\u00dfbritannien und Nordirland", "common": "Vereinigtes K\u00f6nigreich"},
            "fra": {"official": "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord", "common": "Royaume-Uni"},
            "hrv": {"official": "Ujedinjeno Kraljevstvo Velike Britanije i Sjeverne Irske", "common": "Ujedinjeno Kraljevstvo"},
            "ita": {"official": "Regno Unito di Gran Bretagna e Irlanda del Nord", "common": "Regno Unito"},
            "jpn": {"official": "\u30b0\u30ec\u30fc\u30c8\u00b7\u30d6\u30ea\u30c6\u30f3\u304a\u3088\u3073\u5317\u30a2\u30a4\u30eb\u30e9\u30f3\u30c9\u9023\u5408\u738b\u56fd", "common": "\u30a4\u30ae\u30ea\u30b9"},
            "nld": {"official": "Verenigd Koninkrijk van Groot-Brittanni\u00eb en Noord-Ierland", "common": "Verenigd Koninkrijk"},
            "por": {"official": "Reino Unido da Gr\u00e3-Bretanha e Irlanda do Norte", "common": "Reino Unido"},
            "rus": {"official": "\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u043e\u0435 \u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u0412\u0435\u043b\u0438\u043a\u043e\u0431\u0440\u0438\u0442\u0430\u043d\u0438\u0438 \u0438 \u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0439 \u0418\u0440\u043b\u0430\u043d\u0434\u0438\u0438", "common": "\u0412\u0435\u043b\u0438\u043a\u043e\u0431\u0440\u0438\u0442\u0430\u043d\u0438\u044f"},
            "spa": {"official": "Reino Unido de Gran Breta\u00f1a e Irlanda del Norte", "common": "Reino Unido"},
            "fin": {"official": "Ison-Britannian ja Pohjois-Irlannin yhdistynyt kuningaskunta", "common": "Yhdistynyt kuningaskunta"}
        },
        "latlng": [54, -2],
        "demonym": "British",
        "landlocked": false,
        "borders": ["IRL"],
        "area": 242900
    },
    {
        "name": {
            "common": "Georgia",
            "official": "Georgia",
            "native": {
                "kat": {
                    "official": "\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd",
                    "common": "\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd"
                }
            }
        },
        "tld": [".ge"],
        "cca2": "GE",
        "ccn3": "268",
        "cca3": "GEO",
        "cioc": "GEO",
        "currency": ["GEL"],
        "callingCode": ["995"],
        "capital": "Tbilisi",
        "altSpellings": ["GE", "Sakartvelo"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "kat": "Georgian"
        },
        "translations": {
            "deu": {"official": "Georgia", "common": "Georgien"},
            "fra": {"official": "G\u00e9orgie", "common": "G\u00e9orgie"},
            "hrv": {"official": "Gruzija", "common": "Gruzija"},
            "ita": {"official": "Georgia", "common": "Georgia"},
            "jpn": {"official": "\u30b0\u30eb\u30b8\u30a2", "common": "\u30b0\u30eb\u30b8\u30a2"},
            "nld": {"official": "Georgia", "common": "Georgi\u00eb"},
            "por": {"official": "Georgia", "common": "Ge\u00f3rgia"},
            "rus": {"official": "\u0413\u0440\u0443\u0437\u0438\u044f", "common": "\u0413\u0440\u0443\u0437\u0438\u044f"},
            "spa": {"official": "Georgia", "common": "Georgia"},
            "fin": {"official": "Georgia", "common": "Georgia"}
        },
        "latlng": [42, 43.5],
        "demonym": "Georgian",
        "landlocked": false,
        "borders": ["ARM", "AZE", "RUS", "TUR"],
        "area": 69700
    },
    {
        "name": {
            "common": "Guernsey",
            "official": "Bailiwick of Guernsey",
            "native": {
                "eng": {
                    "official": "Bailiwick of Guernsey",
                    "common": "Guernsey"
                },
                "fra": {
                    "official": "Bailliage de Guernesey",
                    "common": "Guernesey"
                },
                "nfr": {
                    "official": "Dg\u00e8rn\u00e9siais",
                    "common": "Dg\u00e8rn\u00e9siais"
                }
            }
        },
        "tld": [".gg"],
        "cca2": "GG",
        "ccn3": "831",
        "cca3": "GGY",
        "cioc": "",
        "currency": ["GBP"],
        "callingCode": ["44"],
        "capital": "St. Peter Port",
        "altSpellings": ["GG", "Bailiwick of Guernsey", "Bailliage de Guernesey"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "eng": "English",
            "fra": "French",
            "nfr": "Guern\u00e9siais"
        },
        "translations": {
            "deu": {"official": "Guernsey", "common": "Guernsey"},
            "fra": {"official": "Bailliage de Guernesey", "common": "Guernesey"},
            "hrv": {"official": "Struka Guernsey", "common": "Guernsey"},
            "ita": {"official": "Baliato di Guernsey", "common": "Guernsey"},
            "jpn": {"official": "\u30ac\u30fc\u30f3\u30b8\u30fc\u306e\u5f97\u610f\u5206\u91ce", "common": "\u30ac\u30fc\u30f3\u30b8\u30fc"},
            "nld": {"official": "Baljuwschap Guernsey", "common": "Guernsey"},
            "por": {"official": "Bailiado de Guernsey", "common": "Guernsey"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043d\u043d\u043e\u0435 \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u0435 \u0413\u0435\u0440\u043d\u0441\u0438", "common": "\u0413\u0435\u0440\u043d\u0441\u0438"},
            "spa": {"official": "Bail\u00eda de Guernsey", "common": "Guernsey"},
            "fin": {"official": "Guernsey", "common": "Guernsey"}
        },
        "latlng": [49.46666666, -2.58333333],
        "demonym": "Channel Islander",
        "landlocked": false,
        "borders": [],
        "area": 78
    },
    {
        "name": {
            "common": "Ghana",
            "official": "Republic of Ghana",
            "native": {
                "eng": {
                    "official": "Republic of Ghana",
                    "common": "Ghana"
                }
            }
        },
        "tld": [".gh"],
        "cca2": "GH",
        "ccn3": "288",
        "cca3": "GHA",
        "cioc": "GHA",
        "currency": ["GHS"],
        "callingCode": ["233"],
        "capital": "Accra",
        "altSpellings": ["GH"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Republik Ghana", "common": "Ghana"},
            "fra": {"official": "R\u00e9publique du Ghana", "common": "Ghana"},
            "hrv": {"official": "Republika Gana", "common": "Gana"},
            "ita": {"official": "Repubblica del Ghana", "common": "Ghana"},
            "jpn": {"official": "\u30ac\u30fc\u30ca\u5171\u548c\u56fd", "common": "\u30ac\u30fc\u30ca"},
            "nld": {"official": "Republiek Ghana", "common": "Ghana"},
            "por": {"official": "Rep\u00fablica do Gana", "common": "Gana"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0413\u0430\u043d\u0430", "common": "\u0413\u0430\u043d\u0430"},
            "spa": {"official": "Rep\u00fablica de Ghana", "common": "Ghana"},
            "fin": {"official": "Ghanan tasavalta", "common": "Ghana"}
        },
        "latlng": [8, -2],
        "demonym": "Ghanaian",
        "landlocked": false,
        "borders": ["BFA", "CIV", "TGO"],
        "area": 238533
    },
    {
        "name": {
            "common": "Gibraltar",
            "official": "Gibraltar",
            "native": {
                "eng": {
                    "official": "Gibraltar",
                    "common": "Gibraltar"
                }
            }
        },
        "tld": [".gi"],
        "cca2": "GI",
        "ccn3": "292",
        "cca3": "GIB",
        "cioc": "",
        "currency": ["GIP"],
        "callingCode": ["350"],
        "capital": "Gibraltar",
        "altSpellings": ["GI"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Gibraltar", "common": "Gibraltar"},
            "fra": {"official": "Gibraltar", "common": "Gibraltar"},
            "hrv": {"official": "Gibraltar", "common": "Gibraltar"},
            "ita": {"official": "Gibilterra", "common": "Gibilterra"},
            "jpn": {"official": "\u30b8\u30d6\u30e9\u30eb\u30bf\u30eb", "common": "\u30b8\u30d6\u30e9\u30eb\u30bf\u30eb"},
            "nld": {"official": "Gibraltar", "common": "Gibraltar"},
            "por": {"official": "Gibraltar", "common": "Gibraltar"},
            "rus": {"official": "\u0413\u0438\u0431\u0440\u0430\u043b\u0442\u0430\u0440", "common": "\u0413\u0438\u0431\u0440\u0430\u043b\u0442\u0430\u0440"},
            "spa": {"official": "Gibraltar", "common": "Gibraltar"},
            "fin": {"official": "Gibraltar", "common": "Gibraltar"}
        },
        "latlng": [36.13333333, -5.35],
        "demonym": "Gibraltar",
        "landlocked": false,
        "borders": ["ESP"],
        "area": 6
    },
    {
        "name": {
            "common": "Guinea",
            "official": "Republic of Guinea",
            "native": {
                "fra": {
                    "official": "R\u00e9publique de Guin\u00e9e",
                    "common": "Guin\u00e9e"
                }
            }
        },
        "tld": [".gn"],
        "cca2": "GN",
        "ccn3": "324",
        "cca3": "GIN",
        "cioc": "GUI",
        "currency": ["GNF"],
        "callingCode": ["224"],
        "capital": "Conakry",
        "altSpellings": ["GN", "Republic of Guinea", "R\u00e9publique de Guin\u00e9e"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Republik Guinea", "common": "Guinea"},
            "fra": {"official": "R\u00e9publique de Guin\u00e9e", "common": "Guin\u00e9e"},
            "hrv": {"official": "Republika Gvineja", "common": "Gvineja"},
            "ita": {"official": "Repubblica di Guinea", "common": "Guinea"},
            "jpn": {"official": "\u30ae\u30cb\u30a2\u5171\u548c\u56fd", "common": "\u30ae\u30cb\u30a2"},
            "nld": {"official": "Republiek Guinee", "common": "Guinee"},
            "por": {"official": "Rep\u00fablica da Guin\u00e9", "common": "Guin\u00e9"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0413\u0432\u0438\u043d\u0435\u044f", "common": "\u0413\u0432\u0438\u043d\u0435\u044f"},
            "spa": {"official": "Rep\u00fablica de Guinea", "common": "Guinea"},
            "fin": {"official": "Guinean tasavalta", "common": "Guinea"}
        },
        "latlng": [11, -10],
        "demonym": "Guinean",
        "landlocked": false,
        "borders": ["CIV", "GNB", "LBR", "MLI", "SEN", "SLE"],
        "area": 245857
    },
    {
        "name": {
            "common": "Guadeloupe",
            "official": "Guadeloupe",
            "native": {
                "fra": {
                    "official": "Guadeloupe",
                    "common": "Guadeloupe"
                }
            }
        },
        "tld": [".gp"],
        "cca2": "GP",
        "ccn3": "312",
        "cca3": "GLP",
        "cioc": "",
        "currency": ["EUR"],
        "callingCode": ["590"],
        "capital": "Basse-Terre",
        "altSpellings": ["GP", "Gwadloup"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Guadeloupe", "common": "Guadeloupe"},
            "fra": {"official": "Guadeloupe", "common": "Guadeloupe"},
            "hrv": {"official": "Gvadalupa", "common": "Gvadalupa"},
            "ita": {"official": "Guadeloupe", "common": "Guadeloupa"},
            "jpn": {"official": "\u30b0\u30a2\u30c9\u30eb\u30fc\u30d7\u5cf6", "common": "\u30b0\u30a2\u30c9\u30eb\u30fc\u30d7"},
            "nld": {"official": "Guadeloupe", "common": "Guadeloupe"},
            "por": {"official": "Guadalupe", "common": "Guadalupe"},
            "rus": {"official": "\u0413\u0432\u0430\u0434\u0435\u043b\u0443\u043f\u0430", "common": "\u0413\u0432\u0430\u0434\u0435\u043b\u0443\u043f\u0430"},
            "spa": {"official": "Guadalupe", "common": "Guadalupe"},
            "fin": {"official": "Guadeloupen departmentti", "common": "Guadeloupe"}
        },
        "latlng": [16.25, -61.583333],
        "demonym": "Guadeloupian",
        "landlocked": false,
        "borders": [],
        "area": 1628
    },
    {
        "name": {
            "common": "Gambia",
            "official": "Republic of the Gambia",
            "native": {
                "eng": {
                    "official": "Republic of the Gambia",
                    "common": "Gambia"
                }
            }
        },
        "tld": [".gm"],
        "cca2": "GM",
        "ccn3": "270",
        "cca3": "GMB",
        "cioc": "GAM",
        "currency": ["GMD"],
        "callingCode": ["220"],
        "capital": "Banjul",
        "altSpellings": ["GM", "Republic of the Gambia"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Republik Gambia", "common": "Gambia"},
            "fra": {"official": "R\u00e9publique de Gambie", "common": "Gambie"},
            "hrv": {"official": "Republika Gambija", "common": "Gambija"},
            "ita": {"official": "Repubblica del Gambia", "common": "Gambia"},
            "jpn": {"official": "\u30ac\u30f3\u30d3\u30a2\u5171\u548c\u56fd", "common": "\u30ac\u30f3\u30d3\u30a2"},
            "nld": {"official": "Republiek Gambia", "common": "Gambia"},
            "por": {"official": "Rep\u00fablica da G\u00e2mbia", "common": "G\u00e2mbia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0413\u0430\u043c\u0431\u0438\u044f", "common": "\u0413\u0430\u043c\u0431\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Gambia", "common": "Gambia"},
            "fin": {"official": "Gambian tasavalta", "common": "Gambia"}
        },
        "latlng": [13.46666666, -16.56666666],
        "demonym": "Gambian",
        "landlocked": false,
        "borders": ["SEN"],
        "area": 10689
    },
    {
        "name": {
            "common": "Guinea-Bissau",
            "official": "Republic of Guinea-Bissau",
            "native": {
                "por": {
                    "official": "Rep\u00fablica da Guin\u00e9-Bissau",
                    "common": "Guin\u00e9-Bissau"
                }
            }
        },
        "tld": [".gw"],
        "cca2": "GW",
        "ccn3": "624",
        "cca3": "GNB",
        "cioc": "GBS",
        "currency": ["XOF"],
        "callingCode": ["245"],
        "capital": "Bissau",
        "altSpellings": ["GW", "Republic of Guinea-Bissau", "Rep\u00fablica da Guin\u00e9-Bissau"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "deu": {"official": "Republik Guinea-Bissau", "common": "Guinea-Bissau"},
            "fra": {"official": "R\u00e9publique de Guin\u00e9e - Bissau", "common": "Guin\u00e9e-Bissau"},
            "hrv": {"official": "Republika Gvineja Bisau", "common": "Gvineja Bisau"},
            "ita": {"official": "Repubblica di Guinea - Bissau", "common": "Guinea-Bissau"},
            "jpn": {"official": "\u30ae\u30cb\u30a2\u30d3\u30b5\u30a6\u5171\u548c\u56fd", "common": "\u30ae\u30cb\u30a2\u30d3\u30b5\u30a6"},
            "nld": {"official": "Republiek Guinee- Bissau", "common": "Guinee-Bissau"},
            "por": {"official": "Rep\u00fablica da Guin\u00e9-Bissau", "common": "Guin\u00e9-Bissau"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0413\u0432\u0438\u043d\u0435\u044f -\u0411\u0438\u0441\u0430\u0443", "common": "\u0413\u0432\u0438\u043d\u0435\u044f-\u0411\u0438\u0441\u0430\u0443"},
            "spa": {"official": "Rep\u00fablica de Guinea- Bissau", "common": "Guinea-Bis\u00e1u"},
            "fin": {"official": "Guinea-Bissaun tasavalta", "common": "Guinea-Bissau"}
        },
        "latlng": [12, -15],
        "demonym": "Guinea-Bissauan",
        "landlocked": false,
        "borders": ["GIN", "SEN"],
        "area": 36125
    },
    {
        "name": {
            "common": "Equatorial Guinea",
            "official": "Republic of Equatorial Guinea",
            "native": {
                "fra": {
                    "official": "R\u00e9publique de la Guin\u00e9e \u00c9quatoriale",
                    "common": "Guin\u00e9e \u00e9quatoriale"
                },
                "por": {
                    "official": "Rep\u00fablica da Guin\u00e9 Equatorial",
                    "common": "Guin\u00e9 Equatorial"
                },
                "spa": {
                    "official": "Rep\u00fablica de Guinea Ecuatorial",
                    "common": "Guinea Ecuatorial"
                }
            }
        },
        "tld": [".gq"],
        "cca2": "GQ",
        "ccn3": "226",
        "cca3": "GNQ",
        "cioc": "GEQ",
        "currency": ["XAF"],
        "callingCode": ["240"],
        "capital": "Malabo",
        "altSpellings": ["GQ", "Republic of Equatorial Guinea", "Rep\u00fablica de Guinea Ecuatorial", "R\u00e9publique de Guin\u00e9e \u00e9quatoriale", "Rep\u00fablica da Guin\u00e9 Equatorial"],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "fra": "French",
            "por": "Portuguese",
            "spa": "Spanish"
        },
        "translations": {
            "cym": {"official": "Republic of Equatorial Guinea", "common": "Gini Gyhydeddol"},
            "deu": {"official": "Republik \u00c4quatorialguinea", "common": "\u00c4quatorial-Guinea"},
            "fra": {"official": "R\u00e9publique de Guin\u00e9e \u00e9quatoriale", "common": "Guin\u00e9e-\u00c9quatoriale"},
            "hrv": {"official": "Republika Ekvatorska Gvineja", "common": "Ekvatorijalna Gvineja"},
            "ita": {"official": "Repubblica della Guinea Equatoriale", "common": "Guinea Equatoriale"},
            "jpn": {"official": "\u8d64\u9053\u30ae\u30cb\u30a2\u5171\u548c\u56fd", "common": "\u8d64\u9053\u30ae\u30cb\u30a2"},
            "nld": {"official": "Republiek Equatoriaal-Guinea", "common": "Equatoriaal-Guinea"},
            "por": {"official": "Rep\u00fablica da Guin\u00e9 Equatorial", "common": "Guin\u00e9 Equatorial"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u042d\u043a\u0432\u0430\u0442\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0413\u0432\u0438\u043d\u0435\u044f", "common": "\u042d\u043a\u0432\u0430\u0442\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0413\u0432\u0438\u043d\u0435\u044f"},
            "spa": {"official": "Rep\u00fablica de Guinea Ecuatorial", "common": "Guinea Ecuatorial"},
            "fin": {"official": "P\u00e4iv\u00e4ntasaajan Guinean tasavalta", "common": "P\u00e4iv\u00e4ntasaajan Guinea"}
        },
        "latlng": [2, 10],
        "demonym": "Equatorial Guinean",
        "landlocked": false,
        "borders": ["CMR", "GAB"],
        "area": 28051
    },
    {
        "name": {
            "common": "Greece",
            "official": "Hellenic Republic",
            "native": {
                "ell": {
                    "official": "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ae \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1",
                    "common": "\u0395\u03bb\u03bb\u03ac\u03b4\u03b1"
                }
            }
        },
        "tld": [".gr"],
        "cca2": "GR",
        "ccn3": "300",
        "cca3": "GRC",
        "cioc": "GRE",
        "currency": ["EUR"],
        "callingCode": ["30"],
        "capital": "Athens",
        "altSpellings": ["GR", "Ell\u00e1da", "Hellenic Republic", "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ae \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "ell": "Greek"
        },
        "translations": {
            "deu": {"official": "Hellenische Republik", "common": "Griechenland"},
            "fra": {"official": "R\u00e9publique hell\u00e9nique", "common": "Gr\u00e8ce"},
            "hrv": {"official": "Helenska Republika", "common": "Gr\u010dka"},
            "ita": {"official": "Repubblica ellenica", "common": "Grecia"},
            "jpn": {"official": "\u30ae\u30ea\u30b7\u30e3\u5171\u548c\u56fd", "common": "\u30ae\u30ea\u30b7\u30e3"},
            "nld": {"official": "Helleense Republiek", "common": "Griekenland"},
            "por": {"official": "Rep\u00fablica Hel\u00e9nica", "common": "Gr\u00e9cia"},
            "rus": {"official": "\u0413\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0413\u0440\u0435\u0446\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica Hel\u00e9nica", "common": "Grecia"},
            "fin": {"official": "Helleenien tasavalta", "common": "Kreikka"}
        },
        "latlng": [39, 22],
        "demonym": "Greek",
        "landlocked": false,
        "borders": ["ALB", "BGR", "TUR", "MKD"],
        "area": 131990
    },
    {
        "name": {
            "common": "Grenada",
            "official": "Grenada",
            "native": {
                "eng": {
                    "official": "Grenada",
                    "common": "Grenada"
                }
            }
        },
        "tld": [".gd"],
        "cca2": "GD",
        "ccn3": "308",
        "cca3": "GRD",
        "cioc": "GRN",
        "currency": ["XCD"],
        "callingCode": ["1473"],
        "capital": "St. George's",
        "altSpellings": ["GD"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Grenada", "common": "Grenada"},
            "fra": {"official": "Grenade", "common": "Grenade"},
            "hrv": {"official": "Grenada", "common": "Grenada"},
            "ita": {"official": "Grenada", "common": "Grenada"},
            "jpn": {"official": "\u30b0\u30ec\u30ca\u30c0", "common": "\u30b0\u30ec\u30ca\u30c0"},
            "nld": {"official": "Grenada", "common": "Grenada"},
            "por": {"official": "Grenada", "common": "Granada"},
            "rus": {"official": "\u0413\u0440\u0435\u043d\u0430\u0434\u0430", "common": "\u0413\u0440\u0435\u043d\u0430\u0434\u0430"},
            "spa": {"official": "Granada", "common": "Grenada"},
            "fin": {"official": "Grenada", "common": "Grenada"}
        },
        "latlng": [12.11666666, -61.66666666],
        "demonym": "Grenadian",
        "landlocked": false,
        "borders": [],
        "area": 344
    },
    {
        "name": {
            "common": "Greenland",
            "official": "Greenland",
            "native": {
                "kal": {
                    "official": "Kalaallit Nunaat",
                    "common": "Kalaallit Nunaat"
                }
            }
        },
        "tld": [".gl"],
        "cca2": "GL",
        "ccn3": "304",
        "cca3": "GRL",
        "cioc": "",
        "currency": ["DKK"],
        "callingCode": ["299"],
        "capital": "Nuuk",
        "altSpellings": ["GL", "Gr\u00f8nland"],
        "region": "Americas",
        "subregion": "Northern America",
        "languages": {
            "kal": "Greenlandic"
        },
        "translations": {
            "deu": {"official": "Gr\u00f6nland", "common": "Gr\u00f6nland"},
            "fra": {"official": "Groenland", "common": "Groenland"},
            "hrv": {"official": "Grenland", "common": "Grenland"},
            "ita": {"official": "Groenlandia", "common": "Groenlandia"},
            "jpn": {"official": "\u30b0\u30ea\u30fc\u30f3\u30e9\u30f3\u30c9", "common": "\u30b0\u30ea\u30fc\u30f3\u30e9\u30f3\u30c9"},
            "nld": {"official": "Groenland", "common": "Groenland"},
            "por": {"official": "Groenl\u00e2ndia", "common": "Gronel\u00e2ndia"},
            "rus": {"official": "\u0413\u0440\u0435\u043d\u043b\u0430\u043d\u0434\u0438\u044f", "common": "\u0413\u0440\u0435\u043d\u043b\u0430\u043d\u0434\u0438\u044f"},
            "spa": {"official": "Groenlandia", "common": "Groenlandia"},
            "fin": {"official": "Gro\u00f6nlanti", "common": "Gro\u00f6nlanti"}
        },
        "latlng": [72, -40],
        "demonym": "Greenlandic",
        "landlocked": false,
        "borders": [],
        "area": 2166086
    },
    {
        "name": {
            "common": "Guatemala",
            "official": "Republic of Guatemala",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica de Guatemala",
                    "common": "Guatemala"
                }
            }
        },
        "tld": [".gt"],
        "cca2": "GT",
        "ccn3": "320",
        "cca3": "GTM",
        "cioc": "GUA",
        "currency": ["GTQ"],
        "callingCode": ["502"],
        "capital": "Guatemala City",
        "altSpellings": ["GT"],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "Republik Guatemala", "common": "Guatemala"},
            "fra": {"official": "R\u00e9publique du Guatemala", "common": "Guatemala"},
            "hrv": {"official": "Republika Gvatemala", "common": "Gvatemala"},
            "ita": {"official": "Repubblica del Guatemala", "common": "Guatemala"},
            "jpn": {"official": "\u30b0\u30a2\u30c6\u30de\u30e9\u5171\u548c\u56fd", "common": "\u30b0\u30a2\u30c6\u30de\u30e9"},
            "nld": {"official": "Republiek Guatemala", "common": "Guatemala"},
            "por": {"official": "Rep\u00fablica da Guatemala", "common": "Guatemala"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0413\u0432\u0430\u0442\u0435\u043c\u0430\u043b\u0430", "common": "\u0413\u0432\u0430\u0442\u0435\u043c\u0430\u043b\u0430"},
            "spa": {"official": "Rep\u00fablica de Guatemala", "common": "Guatemala"},
            "fin": {"official": "Guatemalan tasavalta", "common": "Guatemala"}
        },
        "latlng": [15.5, -90.25],
        "demonym": "Guatemalan",
        "landlocked": false,
        "borders": ["BLZ", "SLV", "HND", "MEX"],
        "area": 108889
    },
    {
        "name": {
            "common": "French Guiana",
            "official": "Guiana",
            "native": {
                "fra": {
                    "official": "Guyanes",
                    "common": "Guyane fran\u00e7aise"
                }
            }
        },
        "tld": [".gf"],
        "cca2": "GF",
        "ccn3": "254",
        "cca3": "GUF",
        "cioc": "",
        "currency": ["EUR"],
        "callingCode": ["594"],
        "capital": "Cayenne",
        "altSpellings": ["GF", "Guiana", "Guyane"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Guayana", "common": "Franz\u00f6sisch Guyana"},
            "fra": {"official": "Guyanes", "common": "Guayane"},
            "hrv": {"official": "Gijana", "common": "Francuska Gvajana"},
            "ita": {"official": "Guiana", "common": "Guyana francese"},
            "jpn": {"official": "\u30ae\u30a2\u30ca", "common": "\u30d5\u30e9\u30f3\u30b9\u9818\u30ae\u30a2\u30ca"},
            "nld": {"official": "Guyana", "common": "Frans-Guyana"},
            "por": {"official": "Guiana", "common": "Guiana Francesa"},
            "rus": {"official": "\u0413\u0432\u0438\u0430\u043d\u0430", "common": "\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0430\u044f \u0413\u0432\u0438\u0430\u043d\u0430"},
            "spa": {"official": "Guayana", "common": "Guayana Francesa"},
            "fin": {"official": "Ranskan Guayana", "common": "Ranskan Guayana"}
        },
        "latlng": [4, -53],
        "demonym": "",
        "landlocked": false,
        "borders": ["BRA", "SUR"],
        "area": 83534
    },
    {
        "name": {
            "common": "Guam",
            "official": "Guam",
            "native": {
                "cha": {
                    "official": "Gu\u00e5h\u00e5n",
                    "common": "Gu\u00e5h\u00e5n"
                },
                "eng": {
                    "official": "Guam",
                    "common": "Guam"
                },
                "spa": {
                    "official": "Guam",
                    "common": "Guam"
                }
            }
        },
        "tld": [".gu"],
        "cca2": "GU",
        "ccn3": "316",
        "cca3": "GUM",
        "cioc": "GUM",
        "currency": ["USD"],
        "callingCode": ["1671"],
        "capital": "Hag\u00e5t\u00f1a",
        "altSpellings": ["GU", "Gu\u00e5h\u00e5n"],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "cha": "Chamorro",
            "eng": "English",
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "Guam", "common": "Guam"},
            "fra": {"official": "Guam", "common": "Guam"},
            "hrv": {"official": "Guam", "common": "Guam"},
            "ita": {"official": "Guam", "common": "Guam"},
            "jpn": {"official": "\u30b0\u30a2\u30e0", "common": "\u30b0\u30a2\u30e0"},
            "nld": {"official": "Guam", "common": "Guam"},
            "por": {"official": "Guam", "common": "Guam"},
            "rus": {"official": "\u0413\u0443\u0430\u043c", "common": "\u0413\u0443\u0430\u043c"},
            "spa": {"official": "Guam", "common": "Guam"},
            "fin": {"official": "Guam", "common": "Guam"}
        },
        "latlng": [13.46666666, 144.78333333],
        "demonym": "Guamanian",
        "landlocked": false,
        "borders": [],
        "area": 549
    },
    {
        "name": {
            "common": "Guyana",
            "official": "Co-operative Republic of Guyana",
            "native": {
                "eng": {
                    "official": "Co-operative Republic of Guyana",
                    "common": "Guyana"
                }
            }
        },
        "tld": [".gy"],
        "cca2": "GY",
        "ccn3": "328",
        "cca3": "GUY",
        "cioc": "GUY",
        "currency": ["GYD"],
        "callingCode": ["592"],
        "capital": "Georgetown",
        "altSpellings": ["GY", "Co-operative Republic of Guyana"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Kooperative Republik Guyana", "common": "Guyana"},
            "fra": {"official": "R\u00e9publique coop\u00e9rative du Guyana", "common": "Guyane"},
            "hrv": {"official": "Zadruga Republika Gvajana", "common": "Gvajana"},
            "ita": {"official": "Co -operative Republic of Guyana", "common": "Guyana"},
            "jpn": {"official": "\u30ac\u30a4\u30a2\u30ca\u306e\u5354\u540c\u5171\u548c\u56fd", "common": "\u30ac\u30a4\u30a2\u30ca"},
            "nld": {"official": "Co\u00f6peratieve Republiek Guyana", "common": "Guyana"},
            "por": {"official": "Co -operative Rep\u00fablica da Guiana", "common": "Guiana"},
            "rus": {"official": "\u041a\u043e\u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0413\u0430\u0439\u0430\u043d\u0430", "common": "\u0413\u0430\u0439\u0430\u043d\u0430"},
            "spa": {"official": "Rep\u00fablica Cooperativa de Guyana", "common": "Guyana"},
            "fin": {"official": "Guayanan osuustoiminnallinen tasavalta", "common": "Guayana"}
        },
        "latlng": [5, -59],
        "demonym": "Guyanese",
        "landlocked": false,
        "borders": ["BRA", "SUR", "VEN"],
        "area": 214969
    },
    {
        "name": {
            "common": "Hong Kong",
            "official": "Hong Kong Special Administrative Region of the People's Republic of China",
            "native": {
                "eng": {
                    "official": "Hong Kong Special Administrative Region of the People's Republic of China",
                    "common": "Hong Kong"
                },
                "zho": {
                    "official": "\u9999\u6e2f\u4e2d\u56fd\u7279\u522b\u884c\u653f\u533a\u7684\u4eba\u6c11\u5171\u548c\u56fd",
                    "common": "\u9999\u6e2f"
                }
            }
        },
        "tld": [".hk", ".\u9999\u6e2f"],
        "cca2": "HK",
        "ccn3": "344",
        "cca3": "HKG",
        "cioc": "HKG",
        "currency": ["HKD"],
        "callingCode": ["852"],
        "capital": "City of Victoria",
        "altSpellings": ["HK"],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "eng": "English",
            "zho": "Chinese"
        },
        "translations": {
            "deu": {"official": "Sonderverwaltungszone der Volksrepublik China", "common": "Hongkong"},
            "fra": {"official": "R\u00e9gion administrative sp\u00e9ciale de Hong Kong de la R\u00e9publique populaire de Chine", "common": "Hong Kong"},
            "hrv": {"official": "Hong Kong Posebnog upravnog podru\u010djaNarodne Republike Kine", "common": "Hong Kong"},
            "ita": {"official": "Hong Kong Regione amministrativa speciale della Repubblica Popolare Cinese", "common": "Hong Kong"},
            "jpn": {"official": "\u4e2d\u83ef\u4eba\u6c11\u5171\u548c\u56fd\u9999\u6e2f\u7279\u5225\u884c\u653f\u533a", "common": "\u9999\u6e2f"},
            "nld": {"official": "Hong Kong Speciale Administratieve Regio van de Volksrepubliek China", "common": "Hongkong"},
            "por": {"official": "Hong Kong Regi\u00e3o Administrativa Especial da Rep\u00fablica Popular da China", "common": "Hong Kong"},
            "rus": {"official": "Hong Kong \u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0440\u0430\u0439\u043e\u043d \u041a\u0438\u0442\u0430\u0439\u0441\u043a\u043e\u0439 \u041d\u0430\u0440\u043e\u0434\u043d\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u0438\u0442\u0430\u044f", "common": "\u0413\u043e\u043d\u043a\u043e\u043d\u0433"},
            "spa": {"official": "Hong Kong Regi\u00f3n Administrativa Especial de la Rep\u00fablica Popular China", "common": "Hong Kong"},
            "fin": {"official": "Hong Kongin erityishallintoalue", "common": "Hongkong"}
        },
        "latlng": [22.267, 114.188],
        "demonym": "Hong Konger",
        "landlocked": false,
        "borders": ["CHN"],
        "area": 1104
    },
    {
        "name": {
            "common": "Heard Island and McDonald Islands",
            "official": "Heard Island and McDonald Islands",
            "native": {
                "eng": {
                    "official": "Heard Island and McDonald Islands",
                    "common": "Heard Island and McDonald Islands"
                }
            }
        },
        "tld": [".hm", ".aq"],
        "cca2": "HM",
        "ccn3": "334",
        "cca3": "HMD",
        "cioc": "",
        "currency": ["AUD"],
        "callingCode": [],
        "capital": "",
        "altSpellings": ["HM", "Heard Island and McDonald Mcdonald Islands"],
        "region": "",
        "subregion": "",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Heard und McDonaldinseln", "common": "Heard und die McDonaldinseln"},
            "fra": {"official": "Des \u00eeles Heard et McDonald", "common": "\u00celes Heard-et-MacDonald"},
            "hrv": {"official": "Otok Heard i oto\u010dje McDonald", "common": "Otok Heard i oto\u010dje McDonald"},
            "ita": {"official": "Isole Heard e McDonald", "common": "Isole Heard e McDonald"},
            "jpn": {"official": "\u30cf\u30fc\u30c9\u5cf6\u3068\u30de\u30af\u30c9\u30ca\u30eb\u30c9\u8af8\u5cf6", "common": "\u30cf\u30fc\u30c9\u5cf6\u3068\u30de\u30af\u30c9\u30ca\u30eb\u30c9\u8af8\u5cf6"},
            "nld": {"official": "Heard en McDonaldeilanden", "common": "Heard- en McDonaldeilanden"},
            "por": {"official": "Ilha Heard e Ilhas McDonald", "common": "Ilha Heard e Ilhas McDonald"},
            "rus": {"official": "\u041e\u0441\u0442\u0440\u043e\u0432 \u0425\u0435\u0440\u0434 \u0438 \u043e\u0441\u0442\u0440\u043e\u0432\u0430 \u041c\u0430\u043a\u0434\u043e\u043d\u0430\u043b\u044c\u0434", "common": "\u041e\u0441\u0442\u0440\u043e\u0432 \u0425\u0435\u0440\u0434 \u0438 \u043e\u0441\u0442\u0440\u043e\u0432\u0430 \u041c\u0430\u043a\u0434\u043e\u043d\u0430\u043b\u044c\u0434"},
            "spa": {"official": "Islas Heard y McDonald", "common": "Islas Heard y McDonald"},
            "fin": {"official": "Heard ja McDonaldinsaaret", "common": "Heard ja McDonaldinsaaret"}
        },
        "latlng": [-53.1, 72.51666666],
        "demonym": "Heard and McDonald Islander",
        "landlocked": false,
        "borders": [],
        "area": 412
    },
    {
        "name": {
            "common": "Honduras",
            "official": "Republic of Honduras",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica de Honduras",
                    "common": "Honduras"
                }
            }
        },
        "tld": [".hn"],
        "cca2": "HN",
        "ccn3": "340",
        "cca3": "HND",
        "cioc": "HON",
        "currency": ["HNL"],
        "callingCode": ["504"],
        "capital": "Tegucigalpa",
        "altSpellings": ["HN", "Republic of Honduras", "Rep\u00fablica de Honduras"],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "Republik Honduras", "common": "Honduras"},
            "fra": {"official": "R\u00e9publique du Honduras", "common": "Honduras"},
            "hrv": {"official": "Republika Honduras", "common": "Honduras"},
            "ita": {"official": "Repubblica di Honduras", "common": "Honduras"},
            "jpn": {"official": "\u30db\u30f3\u30b8\u30e5\u30e9\u30b9\u5171\u548c\u56fd", "common": "\u30db\u30f3\u30b8\u30e5\u30e9\u30b9"},
            "nld": {"official": "Republiek Honduras", "common": "Honduras"},
            "por": {"official": "Rep\u00fablica de Honduras", "common": "Honduras"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0413\u043e\u043d\u0434\u0443\u0440\u0430\u0441", "common": "\u0413\u043e\u043d\u0434\u0443\u0440\u0430\u0441"},
            "spa": {"official": "Rep\u00fablica de Honduras", "common": "Honduras"},
            "fin": {"official": "Hondurasin tasavalta", "common": "Honduras"}
        },
        "latlng": [15, -86.5],
        "demonym": "Honduran",
        "landlocked": false,
        "borders": ["GTM", "SLV", "NIC"],
        "area": 112492
    },
    {
        "name": {
            "common": "Croatia",
            "official": "Republic of Croatia",
            "native": {
                "hrv": {
                    "official": "Republika Hrvatska",
                    "common": "Hrvatska"
                }
            }
        },
        "tld": [".hr"],
        "cca2": "HR",
        "ccn3": "191",
        "cca3": "HRV",
        "cioc": "CRO",
        "currency": ["HRK"],
        "callingCode": ["385"],
        "capital": "Zagreb",
        "altSpellings": ["HR", "Hrvatska", "Republic of Croatia", "Republika Hrvatska"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "hrv": "Croatian"
        },
        "translations": {
            "cym": {"official": "Republic of Croatia", "common": "Croatia"},
            "deu": {"official": "Republik Kroatien", "common": "Kroatien"},
            "fra": {"official": "R\u00e9publique de Croatie", "common": "Croatie"},
            "hrv": {"official": "Republika Hrvatska", "common": "Hrvatska"},
            "ita": {"official": "Repubblica di Croazia", "common": "Croazia"},
            "jpn": {"official": "\u30af\u30ed\u30a2\u30c1\u30a2\u5171\u548c\u56fd", "common": "\u30af\u30ed\u30a2\u30c1\u30a2"},
            "nld": {"official": "Republiek Kroati\u00eb", "common": "Kroati\u00eb"},
            "por": {"official": "Rep\u00fablica da Cro\u00e1cia", "common": "Cro\u00e1cia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0425\u043e\u0440\u0432\u0430\u0442\u0438\u044f", "common": "\u0425\u043e\u0440\u0432\u0430\u0442\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Croacia", "common": "Croacia"},
            "fin": {"official": "Kroatian tasavalta", "common": "Kroatia"}
        },
        "latlng": [45.16666666, 15.5],
        "demonym": "Croatian",
        "landlocked": false,
        "borders": ["BIH", "HUN", "MNE", "SRB", "SVN"],
        "area": 56594
    },
    {
        "name": {
            "common": "Haiti",
            "official": "Republic of Haiti",
            "native": {
                "fra": {
                    "official": "R\u00e9publique d'Ha\u00efti",
                    "common": "Ha\u00efti"
                },
                "hat": {
                    "official": "Repiblik Ayiti",
                    "common": "Ayiti"
                }
            }
        },
        "tld": [".ht"],
        "cca2": "HT",
        "ccn3": "332",
        "cca3": "HTI",
        "cioc": "HAI",
        "currency": ["HTG", "USD"],
        "callingCode": ["509"],
        "capital": "Port-au-Prince",
        "altSpellings": ["HT", "Republic of Haiti", "R\u00e9publique d'Ha\u00efti", "Repiblik Ayiti"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "fra": "French",
            "hat": "Haitian Creole"
        },
        "translations": {
            "deu": {"official": "Republik Haiti", "common": "Haiti"},
            "fra": {"official": "R\u00e9publique d'Ha\u00efti", "common": "Ha\u00efti"},
            "hrv": {"official": "Republika Haiti", "common": "Haiti"},
            "ita": {"official": "Repubblica di Haiti", "common": "Haiti"},
            "jpn": {"official": "\u30cf\u30a4\u30c1\u5171\u548c\u56fd", "common": "\u30cf\u30a4\u30c1"},
            "nld": {"official": "Republiek Ha\u00efti", "common": "Ha\u00efti"},
            "por": {"official": "Rep\u00fablica do Haiti", "common": "Haiti"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0413\u0430\u0438\u0442\u0438", "common": "\u0413\u0430\u0438\u0442\u0438"},
            "spa": {"official": "Rep\u00fablica de Hait\u00ed", "common": "Haiti"},
            "fin": {"official": "Haitin tasavalta", "common": "Haiti"}
        },
        "latlng": [19, -72.41666666],
        "demonym": "Haitian",
        "landlocked": false,
        "borders": ["DOM"],
        "area": 27750
    },
    {
        "name": {
            "common": "Hungary",
            "official": "Hungary",
            "native": {
                "hun": {
                    "official": "Magyarorsz\u00e1g",
                    "common": "Magyarorsz\u00e1g"
                }
            }
        },
        "tld": [".hu"],
        "cca2": "HU",
        "ccn3": "348",
        "cca3": "HUN",
        "cioc": "HUN",
        "currency": ["HUF"],
        "callingCode": ["36"],
        "capital": "Budapest",
        "altSpellings": ["HU"],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "hun": "Hungarian"
        },
        "translations": {
            "deu": {"official": "Ungarn", "common": "Ungarn"},
            "fra": {"official": "Hongrie", "common": "Hongrie"},
            "hrv": {"official": "Mad\u017earska", "common": "Ma\u0111arska"},
            "ita": {"official": "Ungheria", "common": "Ungheria"},
            "jpn": {"official": "\u30cf\u30f3\u30ac\u30ea\u30fc", "common": "\u30cf\u30f3\u30ac\u30ea\u30fc"},
            "nld": {"official": "Hongarije", "common": "Hongarije"},
            "por": {"official": "Hungria", "common": "Hungria"},
            "rus": {"official": "\u0412\u0435\u043d\u0433\u0440\u0438\u044f", "common": "\u0412\u0435\u043d\u0433\u0440\u0438\u044f"},
            "spa": {"official": "Hungr\u00eda", "common": "Hungr\u00eda"},
            "fin": {"official": "Unkari", "common": "Unkari"}
        },
        "latlng": [47, 20],
        "demonym": "Hungarian",
        "landlocked": true,
        "borders": ["AUT", "HRV", "ROU", "SRB", "SVK", "SVN", "UKR"],
        "area": 93028
    },
    {
        "name": {
            "common": "Indonesia",
            "official": "Republic of Indonesia",
            "native": {
                "ind": {
                    "official": "Republik Indonesia",
                    "common": "Indonesia"
                }
            }
        },
        "tld": [".id"],
        "cca2": "ID",
        "ccn3": "360",
        "cca3": "IDN",
        "cioc": "INA",
        "currency": ["IDR"],
        "callingCode": ["62"],
        "capital": "Jakarta",
        "altSpellings": ["ID", "Republic of Indonesia", "Republik Indonesia"],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "ind": "Indonesian"
        },
        "translations": {
            "deu": {"official": "Republik Indonesien", "common": "Indonesien"},
            "fra": {"official": "R\u00e9publique d'Indon\u00e9sie", "common": "Indon\u00e9sie"},
            "hrv": {"official": "Republika Indonezija", "common": "Indonezija"},
            "ita": {"official": "Repubblica di Indonesia", "common": "Indonesia"},
            "jpn": {"official": "\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2\u5171\u548c\u56fd", "common": "\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2"},
            "nld": {"official": "Republiek Indonesi\u00eb", "common": "Indonesi\u00eb"},
            "por": {"official": "Rep\u00fablica da Indon\u00e9sia", "common": "Indon\u00e9sia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u044f", "common": "\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Indonesia", "common": "Indonesia"},
            "fin": {"official": "Indonesian tasavalta", "common": "Indonesia"}
        },
        "latlng": [-5, 120],
        "demonym": "Indonesian",
        "landlocked": false,
        "borders": ["TLS", "MYS", "PNG"],
        "area": 1904569
    },
    {
        "name": {
            "common": "Isle of Man",
            "official": "Isle of Man",
            "native": {
                "eng": {
                    "official": "Isle of Man",
                    "common": "Isle of Man"
                },
                "glv": {
                    "official": "Ellan Vannin or Mannin",
                    "common": "Mannin"
                }
            }
        },
        "tld": [".im"],
        "cca2": "IM",
        "ccn3": "833",
        "cca3": "IMN",
        "cioc": "",
        "currency": ["GBP"],
        "callingCode": ["44"],
        "capital": "Douglas",
        "altSpellings": ["IM", "Ellan Vannin", "Mann", "Mannin"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "eng": "English",
            "glv": "Manx"
        },
        "translations": {
            "deu": {"official": "Isle of Man", "common": "Insel Man"},
            "fra": {"official": "Isle of Man", "common": "\u00cele de Man"},
            "hrv": {"official": "Mana ostrvo", "common": "Otok Man"},
            "ita": {"official": "Isola di Man", "common": "Isola di Man"},
            "jpn": {"official": "\u30de\u30f3\u5cf6", "common": "\u30de\u30f3\u5cf6"},
            "nld": {"official": "Isle of Man", "common": "Isle of Man"},
            "por": {"official": "Isle of Man", "common": "Ilha de Man"},
            "rus": {"official": "\u041e\u0441\u0442\u0440\u043e\u0432 \u041c\u044d\u043d", "common": "\u041e\u0441\u0442\u0440\u043e\u0432 \u041c\u044d\u043d"},
            "spa": {"official": "Isla de Man", "common": "Isla de Man"},
            "fin": {"official": "Mansaari", "common": "Mansaari"}
        },
        "latlng": [54.25, -4.5],
        "demonym": "Manx",
        "landlocked": false,
        "borders": [],
        "area": 572
    },
    {
        "name": {
            "common": "India",
            "official": "Republic of India",
            "native": {
                "eng": {
                    "official": "Republic of India",
                    "common": "India"
                },
                "hin": {
                    "official": "\u092d\u093e\u0930\u0924 \u0917\u0923\u0930\u093e\u091c\u094d\u092f",
                    "common": "\u092d\u093e\u0930\u0924"
                },
                "tam": {
                    "official": "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0B95\u0BCD \u0B95\u0BC1\u0B9F\u0BBF\u0BAF\u0BB0\u0B9A\u0BC1",
                    "common": "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE"
                }
            }
        },
        "tld": [".in"],
        "cca2": "IN",
        "ccn3": "356",
        "cca3": "IND",
        "cioc": "IND",
        "currency": ["INR"],
        "callingCode": ["91"],
        "capital": "New Delhi",
        "altSpellings": ["IN", "Bh\u0101rat", "Republic of India", "Bharat Ganrajya", "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE"],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "eng": "English",
            "hin": "Hindi",
            "tam": "Tamil"
        },
        "translations": {
            "deu": {"official": "Republik Indien", "common": "Indien"},
            "fra": {"official": "R\u00e9publique de l'Inde", "common": "Inde"},
            "hrv": {"official": "Republika Indija", "common": "Indija"},
            "ita": {"official": "Repubblica dell'India", "common": "India"},
            "jpn": {"official": "\u30a4\u30f3\u30c9\u5171\u548c\u56fd", "common": "\u30a4\u30f3\u30c9"},
            "nld": {"official": "Republiek India", "common": "India"},
            "por": {"official": "Rep\u00fablica da \u00cdndia", "common": "\u00cdndia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0434\u0438\u044f", "common": "\u0418\u043d\u0434\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de la India", "common": "India"},
            "fin": {"official": "Intian tasavalta", "common": "Intia"}
        },
        "latlng": [20, 77],
        "demonym": "Indian",
        "landlocked": false,
        "borders": ["AFG", "BGD", "BTN", "MMR", "CHN", "NPL", "PAK", "LKA"],
        "area": 3287590
    },
    {
        "name": {
            "common": "British Indian Ocean Territory",
            "official": "British Indian Ocean Territory",
            "native": {
                "eng": {
                    "official": "British Indian Ocean Territory",
                    "common": "British Indian Ocean Territory"
                }
            }
        },
        "tld": [".io"],
        "cca2": "IO",
        "ccn3": "086",
        "cca3": "IOT",
        "cioc": "",
        "currency": ["USD"],
        "callingCode": ["246"],
        "capital": "Diego Garcia",
        "altSpellings": ["IO"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "cym": {"official": "British Indian Ocean Territory", "common": "Tiriogaeth Brydeinig Cefnfor India"},
            "deu": {"official": "Britisch-Indischer Ozean", "common": "Britisches Territorium im Indischen Ozean"},
            "fra": {"official": "Territoire britannique de l' oc\u00e9an Indien", "common": "Territoire britannique de l'oc\u00e9an Indien"},
            "hrv": {"official": "British Indian Ocean Territory", "common": "Britanski Indijskooceanski teritorij"},
            "ita": {"official": "Territorio britannico dell'Oceano Indiano", "common": "Territorio britannico dell'oceano indiano"},
            "jpn": {"official": "\u30a4\u30ae\u30ea\u30b9\u9818\u30a4\u30f3\u30c9\u6d0b\u5730\u57df", "common": "\u30a4\u30ae\u30ea\u30b9\u9818\u30a4\u30f3\u30c9\u6d0b\u5730\u57df"},
            "nld": {"official": "Brits Indische Oceaan Territorium", "common": "Britse Gebieden in de Indische Oceaan"},
            "por": {"official": "British Indian Ocean Territory", "common": "Territ\u00f3rio Brit\u00e2nico do Oceano \u00cdndico"},
            "rus": {"official": "\u0411\u0440\u0438\u0442\u0430\u043d\u0441\u043a\u0430\u044f \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044f \u0418\u043d\u0434\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u043e\u043a\u0435\u0430\u043d\u0430", "common": "\u0411\u0440\u0438\u0442\u0430\u043d\u0441\u043a\u0430\u044f \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044f \u0432 \u0418\u043d\u0434\u0438\u0439\u0441\u043a\u043e\u043c \u043e\u043a\u0435\u0430\u043d\u0435"},
            "spa": {"official": "Territorio Brit\u00e1nico del Oc\u00e9ano \u00cdndico", "common": "Territorio Brit\u00e1nico del Oc\u00e9ano \u00cdndico"},
            "fin": {"official": "Brittil\u00e4inen Intian valtameren alue", "common": "Brittil\u00e4inen Intian valtameren alue"}
        },
        "latlng": [-6, 71.5],
        "demonym": "Indian",
        "landlocked": false,
        "borders": [],
        "area": 60
    },
    {
        "name": {
            "common": "Ireland",
            "official": "Republic of Ireland",
            "native": {
                "eng": {
                    "official": "Republic of Ireland",
                    "common": "Ireland"
                },
                "gle": {
                    "official": "Poblacht na h\u00c9ireann",
                    "common": "\u00c9ire"
                }
            }
        },
        "tld": [".ie"],
        "cca2": "IE",
        "ccn3": "372",
        "cca3": "IRL",
        "cioc": "IRL",
        "currency": ["EUR"],
        "callingCode": ["353"],
        "capital": "Dublin",
        "altSpellings": ["IE", "\u00c9ire", "Republic of Ireland", "Poblacht na h\u00c9ireann"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "eng": "English",
            "gle": "Irish"
        },
        "translations": {
            "deu": {"official": "Republik Irland", "common": "Irland"},
            "fra": {"official": "R\u00e9publique d'Irlande", "common": "Irlande"},
            "hrv": {"official": "Republika Irska", "common": "Irska"},
            "ita": {"official": "Repubblica d'Irlanda", "common": "Irlanda"},
            "jpn": {"official": "\u30a2\u30a4\u30eb\u30e9\u30f3\u30c9\u5171\u548c\u56fd", "common": "\u30a2\u30a4\u30eb\u30e9\u30f3\u30c9"},
            "nld": {"official": "Republic of Ireland", "common": "Ierland"},
            "por": {"official": "Rep\u00fablica da Irlanda", "common": "Irlanda"},
            "rus": {"official": "\u0418\u0440\u043b\u0430\u043d\u0434\u0438\u044f", "common": "\u0418\u0440\u043b\u0430\u043d\u0434\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Irlanda", "common": "Irlanda"},
            "fin": {"official": "Irlannin tasavalta", "common": "Irlanti"}
        },
        "latlng": [53, -8],
        "demonym": "Irish",
        "landlocked": false,
        "borders": ["GBR"],
        "area": 70273
    },
    {
        "name": {
            "common": "Iran",
            "official": "Islamic Republic of Iran",
            "native": {
                "fas": {
                    "official": "\u062c\u0645\u0647\u0648\u0631\u06cc \u0627\u0633\u0644\u0627\u0645\u06cc \u0627\u06cc\u0631\u0627\u0646",
                    "common": "\u0627\u06cc\u0631\u0627\u0646"
                }
            }
        },
        "tld": [".ir", "\u0627\u06cc\u0631\u0627\u0646."],
        "cca2": "IR",
        "ccn3": "364",
        "cca3": "IRN",
        "cioc": "IRI",
        "currency": ["IRR"],
        "callingCode": ["98"],
        "capital": "Tehran",
        "altSpellings": ["IR", "Islamic Republic of Iran", "Iran, Islamic Republic of", "Jomhuri-ye Esl\u0101mi-ye Ir\u0101n"],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "fas": "Persian"
        },
        "translations": {
            "deu": {"official": "Islamische Republik Iran", "common": "Iran"},
            "fra": {"official": "R\u00e9publique islamique d'Iran", "common": "Iran"},
            "hrv": {"official": "Islamska Republika Iran", "common": "Iran"},
            "jpn": {"official": "\u30a4\u30e9\u30f3\u00b7\u30a4\u30b9\u30e9\u30e0\u5171\u548c\u56fd", "common": "\u30a4\u30e9\u30f3\u30fb\u30a4\u30b9\u30e9\u30e0\u5171\u548c\u56fd"},
            "nld": {"official": "Islamitische Republiek Iran", "common": "Iran"},
            "por": {"official": "Rep\u00fablica Isl\u00e2mica do Ir\u00e3", "common": "Ir\u00e3o"},
            "rus": {"official": "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u0440\u0430\u043d", "common": "\u0418\u0440\u0430\u043d"},
            "spa": {"official": "Rep\u00fablica Isl\u00e1mica de Ir\u00e1n", "common": "Iran"},
            "fin": {"official": "Iranin islamilainen tasavalta", "common": "Iran"}
        },
        "latlng": [32, 53],
        "demonym": "Iranian",
        "landlocked": false,
        "borders": ["AFG", "ARM", "AZE", "IRQ", "PAK", "TUR", "TKM"],
        "area": 1648195
    },
    {
        "name": {
            "common": "Iraq",
            "official": "Republic of Iraq",
            "native": {
                "ara": {
                    "official": "\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u0639\u0631\u0627\u0642",
                    "common": "\u0627\u0644\u0639\u0631\u0627\u0642"
                },
                "arc": {
                    "official": "\u0729\u0718\u073c\u071b\u0722\u0735\u0710 \u0710\u071d\u073c\u072a\u0732\u0729",
                    "common": "\u0729\u0718\u073c\u071b\u0722\u0735\u0710"
                },
                "ckb": {
                    "official": "\u06a9\u06c6\u0645\u0627\u0631\u06cc \u0639\u06ce\u0631\u0627\u0642",
                    "common": "\u06a9\u06c6\u0645\u0627\u0631\u06cc"
                }
            }
        },
        "tld": [".iq"],
        "cca2": "IQ",
        "ccn3": "368",
        "cca3": "IRQ",
        "cioc": "IRQ",
        "currency": ["IQD"],
        "callingCode": ["964"],
        "capital": "Baghdad",
        "altSpellings": ["IQ", "Republic of Iraq", "Jumh\u016briyyat al-\u2018Ir\u0101q"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic",
            "arc": "Aramaic",
            "ckb": "Sorani"
        },
        "translations": {
            "deu": {"official": "Republik Irak", "common": "Irak"},
            "fra": {"official": "R\u00e9publique d'Irak", "common": "Irak"},
            "hrv": {"official": "Republika Irak", "common": "Irak"},
            "ita": {"official": "Repubblica dell'Iraq", "common": "Iraq"},
            "jpn": {"official": "\u30a4\u30e9\u30af\u5171\u548c\u56fd", "common": "\u30a4\u30e9\u30af"},
            "nld": {"official": "Republiek Irak", "common": "Irak"},
            "por": {"official": "Rep\u00fablica do Iraque", "common": "Iraque"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u0440\u0430\u043a", "common": "\u0418\u0440\u0430\u043a"},
            "spa": {"official": "Rep\u00fablica de Irak", "common": "Irak"},
            "fin": {"official": "Irakin tasavalta", "common": "Irak"}
        },
        "latlng": [33, 44],
        "demonym": "Iraqi",
        "landlocked": false,
        "borders": ["IRN", "JOR", "KWT", "SAU", "SYR", "TUR"],
        "area": 438317
    },
    {
        "name": {
            "common": "Iceland",
            "official": "Iceland",
            "native": {
                "isl": {
                    "official": "\u00cdsland",
                    "common": "\u00cdsland"
                }
            }
        },
        "tld": [".is"],
        "cca2": "IS",
        "ccn3": "352",
        "cca3": "ISL",
        "cioc": "ISL",
        "currency": ["ISK"],
        "callingCode": ["354"],
        "capital": "Reykjavik",
        "altSpellings": ["IS", "Island", "Republic of Iceland", "L\u00fd\u00f0veldi\u00f0 \u00cdsland"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "isl": "Icelandic"
        },
        "translations": {
            "deu": {"official": "Island", "common": "Island"},
            "fra": {"official": "Islande", "common": "Islande"},
            "hrv": {"official": "Island", "common": "Island"},
            "ita": {"official": "Islanda", "common": "Islanda"},
            "jpn": {"official": "\u30a2\u30a4\u30b9\u30e9\u30f3\u30c9", "common": "\u30a2\u30a4\u30b9\u30e9\u30f3\u30c9"},
            "nld": {"official": "IJsland", "common": "IJsland"},
            "por": {"official": "Isl\u00e2ndia", "common": "Isl\u00e2ndia"},
            "rus": {"official": "\u0418\u0441\u043b\u0430\u043d\u0434\u0438\u044f", "common": "\u0418\u0441\u043b\u0430\u043d\u0434\u0438\u044f"},
            "spa": {"official": "Islandia", "common": "Islandia"},
            "fin": {"official": "Islanti", "common": "Islanti"}
        },
        "latlng": [65, -18],
        "demonym": "Icelander",
        "landlocked": false,
        "borders": [],
        "area": 103000
    },
    {
        "name": {
            "common": "Israel",
            "official": "State of Israel",
            "native": {
                "ara": {
                    "official": "\u062f\u0648\u0644\u0629 \u0625\u0633\u0631\u0627\u0626\u064a\u0644",
                    "common": "\u0625\u0633\u0631\u0627\u0626\u064a\u0644"
                },
                "heb": {
                    "official": "\u05de\u05d3\u05d9\u05e0\u05ea \u05d9\u05e9\u05e8\u05d0\u05dc",
                    "common": "\u05d9\u05e9\u05e8\u05d0\u05dc"
                }
            }
        },
        "tld": [".il"],
        "cca2": "IL",
        "ccn3": "376",
        "cca3": "ISR",
        "cioc": "ISR",
        "currency": ["ILS"],
        "callingCode": ["972"],
        "capital": "Jerusalem",
        "altSpellings": ["IL", "State of Israel", "Med\u012bnat Yisr\u0101'el"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic",
            "heb": "Hebrew"
        },
        "translations": {
            "deu": {"official": "Staat Israel", "common": "Israel"},
            "fra": {"official": "\u00c9tat d'Isra\u00ebl", "common": "Isra\u00ebl"},
            "hrv": {"official": "Dr\u017eava Izrael", "common": "Izrael"},
            "ita": {"official": "Stato di Israele", "common": "Israele"},
            "jpn": {"official": "\u30a4\u30b9\u30e9\u30a8\u30eb\u56fd", "common": "\u30a4\u30b9\u30e9\u30a8\u30eb"},
            "nld": {"official": "Staat Isra\u00ebl", "common": "Isra\u00ebl"},
            "por": {"official": "Estado de Israel", "common": "Israel"},
            "rus": {"official": "\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u0418\u0437\u0440\u0430\u0438\u043b\u044c", "common": "\u0418\u0437\u0440\u0430\u0438\u043b\u044c"},
            "spa": {"official": "Estado de Israel", "common": "Israel"},
            "fin": {"official": "Israelin valtio", "common": "Israel"}
        },
        "latlng": [31.47, 35.13],
        "demonym": "Israeli",
        "landlocked": false,
        "borders": ["EGY", "JOR", "LBN", "SYR"],
        "area": 20770
    },
    {
        "name": {
            "common": "Italy",
            "official": "Italian Republic",
            "native": {
                "bar": {
                    "official": "Italienische Republik",
                    "common": "Italien"
                },
                "ita": {
                    "official": "Repubblica italiana",
                    "common": "Italia"
                },
                "srd": {
                    "official": "Repubbricanu Italia",
                    "common": "Italia"
                }
            }
        },
        "tld": [".it"],
        "cca2": "IT",
        "ccn3": "380",
        "cca3": "ITA",
        "cioc": "ITA",
        "currency": ["EUR"],
        "callingCode": ["39"],
        "capital": "Rome",
        "altSpellings": ["IT", "Italian Republic", "Repubblica italiana"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "bar": "Austro-Bavarian German",
            "ita": "Italian",
            "srd": "Sardinian"
        },
        "translations": {
            "deu": {"official": "Italienische Republik", "common": "Italien"},
            "fra": {"official": "R\u00e9publique italienne", "common": "Italie"},
            "hrv": {"official": "talijanska Republika", "common": "Italija"},
            "ita": {"official": "Repubblica italiana", "common": "Italia"},
            "jpn": {"official": "\u30a4\u30bf\u30ea\u30a2\u5171\u548c\u56fd", "common": "\u30a4\u30bf\u30ea\u30a2"},
            "nld": {"official": "Italiaanse Republiek", "common": "Itali\u00eb"},
            "por": {"official": "Rep\u00fablica Italiana", "common": "It\u00e1lia"},
            "rus": {"official": "\u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0418\u0442\u0430\u043b\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica Italiana", "common": "Italia"},
            "fin": {"official": "Italian tasavalta", "common": "Italia"}
        },
        "latlng": [42.83333333, 12.83333333],
        "demonym": "Italian",
        "landlocked": false,
        "borders": ["AUT", "FRA", "SMR", "SVN", "CHE", "VAT"],
        "area": 301336
    },
    {
        "name": {
            "common": "Jamaica",
            "official": "Jamaica",
            "native": {
                "eng": {
                    "official": "Jamaica",
                    "common": "Jamaica"
                },
                "jam": {
                    "official": "Jamaica",
                    "common": "Jamaica"
                }
            }
        },
        "tld": [".jm"],
        "cca2": "JM",
        "ccn3": "388",
        "cca3": "JAM",
        "cioc": "JAM",
        "currency": ["JMD"],
        "callingCode": ["1876"],
        "capital": "Kingston",
        "altSpellings": ["JM"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English",
            "jam": "Jamaican Patois"
        },
        "translations": {
            "deu": {"official": "Jamaika", "common": "Jamaika"},
            "fra": {"official": "Jama\u00efque", "common": "Jama\u00efque"},
            "hrv": {"official": "Jamajka", "common": "Jamajka"},
            "ita": {"official": "Giamaica", "common": "Giamaica"},
            "jpn": {"official": "\u30b8\u30e3\u30de\u30a4\u30ab", "common": "\u30b8\u30e3\u30de\u30a4\u30ab"},
            "nld": {"official": "Jamaica", "common": "Jamaica"},
            "por": {"official": "Jamaica", "common": "Jamaica"},
            "rus": {"official": "\u042f\u043c\u0430\u0439\u043a\u0430", "common": "\u042f\u043c\u0430\u0439\u043a\u0430"},
            "spa": {"official": "Jamaica", "common": "Jamaica"},
            "fin": {"official": "Jamaika", "common": "Jamaika"}
        },
        "latlng": [18.25, -77.5],
        "demonym": "Jamaican",
        "landlocked": false,
        "borders": [],
        "area": 10991
    },
    {
        "name": {
            "common": "Jersey",
            "official": "Bailiwick of Jersey",
            "native": {
                "eng": {
                    "official": "Bailiwick of Jersey",
                    "common": "Jersey"
                },
                "fra": {
                    "official": "Bailliage de Jersey",
                    "common": "Jersey"
                },
                "nrf": {
                    "official": "Bailliage d\u00e9 J\u00e8rri",
                    "common": "J\u00e8rri"
                }
            }
        },
        "tld": [".je"],
        "cca2": "JE",
        "ccn3": "832",
        "cca3": "JEY",
        "cioc": "",
        "currency": ["GBP"],
        "callingCode": ["44"],
        "capital": "Saint Helier",
        "altSpellings": ["JE", "Bailiwick of Jersey", "Bailliage de Jersey", "Bailliage d\u00e9 J\u00e8rri"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "eng": "English",
            "fra": "French",
            "nrf": "J\u00e8rriais"
        },
        "translations": {
            "deu": {"official": "Vogtei Jersey", "common": "Jersey"},
            "fra": {"official": "Bailliage de Jersey", "common": "Jersey"},
            "hrv": {"official": "Struka od Jersey", "common": "Jersey"},
            "ita": {"official": "Baliato di Jersey", "common": "Isola di Jersey"},
            "jpn": {"official": "\u30b8\u30e3\u30fc\u30b8\u306e\u5f97\u610f\u5206\u91ce", "common": "\u30b8\u30e3\u30fc\u30b8\u30fc"},
            "nld": {"official": "Baljuwschap Jersey", "common": "Jersey"},
            "por": {"official": "Bailiado de Jersey", "common": "Jersey"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043d\u043d\u043e\u0435 \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u0435 \u0414\u0436\u0435\u0440\u0441\u0438", "common": "\u0414\u0436\u0435\u0440\u0441\u0438"},
            "spa": {"official": "Bail\u00eda de Jersey", "common": "Jersey"},
            "fin": {"official": "Jersey", "common": "Jersey"}
        },
        "latlng": [49.25, -2.16666666],
        "demonym": "Channel Islander",
        "landlocked": false,
        "borders": [],
        "area": 116
    },
    {
        "name": {
            "common": "Jordan",
            "official": "Hashemite Kingdom of Jordan",
            "native": {
                "ara": {
                    "official": "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0623\u0631\u062f\u0646\u064a\u0629 \u0627\u0644\u0647\u0627\u0634\u0645\u064a\u0629",
                    "common": "\u0627\u0644\u0623\u0631\u062f\u0646"
                }
            }
        },
        "tld": [".jo", "\u0627\u0644\u0627\u0631\u062f\u0646."],
        "cca2": "JO",
        "ccn3": "400",
        "cca3": "JOR",
        "cioc": "JOR",
        "currency": ["JOD"],
        "callingCode": ["962"],
        "capital": "Amman",
        "altSpellings": ["JO", "Hashemite Kingdom of Jordan", "al-Mamlakah al-Urdun\u012byah al-H\u0101shim\u012byah"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "deu": {"official": "Haschemitisches K\u00f6nigreich Jordanien", "common": "Jordanien"},
            "fra": {"official": "Royaume hach\u00e9mite de Jordanie", "common": "Jordanie"},
            "hrv": {"official": "Ha\u0161emitske Kraljevine Jordan", "common": "Jordan"},
            "ita": {"official": "Regno hascemita di Giordania", "common": "Giordania"},
            "jpn": {"official": "\u30e8\u30eb\u30c0\u30f3\u00b7\u30cf\u30b7\u30df\u30c6\u738b\u56fd", "common": "\u30e8\u30eb\u30c0\u30f3"},
            "nld": {"official": "Hasjemitisch Koninkrijk Jordani\u00eb", "common": "Jordani\u00eb"},
            "por": {"official": "Reino Hachemita da Jord\u00e2nia", "common": "Jord\u00e2nia"},
            "rus": {"official": "\u0418\u043e\u0440\u0434\u0430\u043d\u0441\u043a\u043e\u0433\u043e \u0425\u0430\u0448\u0438\u043c\u0438\u0442\u0441\u043a\u043e\u0433\u043e \u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u0430", "common": "\u0418\u043e\u0440\u0434\u0430\u043d\u0438\u044f"},
            "spa": {"official": "Reino Hachemita de Jordania", "common": "Jordania"},
            "fin": {"official": "Jordanian ha\u0161emiittinen kunigaskunta", "common": "Jordania"}
        },
        "latlng": [31, 36],
        "demonym": "Jordanian",
        "landlocked": false,
        "borders": ["IRQ", "ISR", "SAU", "SYR"],
        "area": 89342
    },
    {
        "name": {
            "common": "Japan",
            "official": "Japan",
            "native": {
                "jpn": {
                    "official": "\u65e5\u672c",
                    "common": "\u65e5\u672c"
                }
            }
        },
        "tld": [".jp", ".\u307f\u3093\u306a"],
        "cca2": "JP",
        "ccn3": "392",
        "cca3": "JPN",
        "cioc": "JPN",
        "currency": ["JPY"],
        "callingCode": ["81"],
        "capital": "Tokyo",
        "altSpellings": ["JP", "Nippon", "Nihon"],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "jpn": "Japanese"
        },
        "translations": {
            "deu": {"official": "Japan", "common": "Japan"},
            "fra": {"official": "Japon", "common": "Japon"},
            "hrv": {"official": "Japan", "common": "Japan"},
            "ita": {"official": "Giappone", "common": "Giappone"},
            "jpn": {"official": "\u65e5\u672c", "common": "\u65e5\u672c"},
            "nld": {"official": "Japan", "common": "Japan"},
            "por": {"official": "Jap\u00e3o", "common": "Jap\u00e3o"},
            "rus": {"official": "\u042f\u043f\u043e\u043d\u0438\u044f", "common": "\u042f\u043f\u043e\u043d\u0438\u044f"},
            "spa": {"official": "Jap\u00f3n", "common": "Jap\u00f3n"},
            "fin": {"official": "Japani", "common": "Japani"}
        },
        "latlng": [36, 138],
        "demonym": "Japanese",
        "landlocked": false,
        "borders": [],
        "area": 377930
    },
    {
        "name": {
            "common": "Kazakhstan",
            "official": "Republic of Kazakhstan",
            "native": {
                "kaz": {
                    "official": "\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0441\u044b",
                    "common": "\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d"
                },
                "rus": {
                    "official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",
                    "common": "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"
                }
            }
        },
        "tld": [".kz", ".\u049b\u0430\u0437"],
        "cca2": "KZ",
        "ccn3": "398",
        "cca3": "KAZ",
        "cioc": "KAZ",
        "currency": ["KZT"],
        "callingCode": ["76", "77"],
        "capital": "Astana",
        "altSpellings": ["KZ", "Qazaqstan", "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d", "Republic of Kazakhstan", "\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0441\u044b", "Qazaqstan Respubl\u00efkas\u0131", "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d", "Respublika Kazakhstan"],
        "region": "Asia",
        "subregion": "Central Asia",
        "languages": {
            "kaz": "Kazakh",
            "rus": "Russian"
        },
        "translations": {
            "deu": {"official": "Republik Kasachstan", "common": "Kasachstan"},
            "fra": {"official": "R\u00e9publique du Kazakhstan", "common": "Kazakhstan"},
            "hrv": {"official": "Republika Kazahstan", "common": "Kazahstan"},
            "ita": {"official": "Repubblica del Kazakhstan", "common": "Kazakistan"},
            "jpn": {"official": "\u30ab\u30b6\u30d5\u30b9\u30bf\u30f3\u5171\u548c\u56fd", "common": "\u30ab\u30b6\u30d5\u30b9\u30bf\u30f3"},
            "nld": {"official": "Republiek Kazachstan", "common": "Kazachstan"},
            "por": {"official": "Rep\u00fablica do Cazaquist\u00e3o", "common": "Cazaquist\u00e3o"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d", "common": "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"},
            "spa": {"official": "Rep\u00fablica de Kazajst\u00e1n", "common": "Kazajist\u00e1n"},
            "fin": {"official": "Kazakstanin tasavalta", "common": "Kazakstan"}
        },
        "latlng": [48, 68],
        "demonym": "Kazakhstani",
        "landlocked": true,
        "borders": ["CHN", "KGZ", "RUS", "TKM", "UZB"],
        "area": 2724900
    },
    {
        "name": {
            "common": "Kenya",
            "official": "Republic of Kenya",
            "native": {
                "eng": {
                    "official": "Republic of Kenya",
                    "common": "Kenya"
                },
                "swa": {
                    "official": "Republic of Kenya",
                    "common": "Kenya"
                }
            }
        },
        "tld": [".ke"],
        "cca2": "KE",
        "ccn3": "404",
        "cca3": "KEN",
        "cioc": "KEN",
        "currency": ["KES"],
        "callingCode": ["254"],
        "capital": "Nairobi",
        "altSpellings": ["KE", "Republic of Kenya", "Jamhuri ya Kenya"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English",
            "swa": "Swahili"
        },
        "translations": {
            "deu": {"official": "Republik Kenia", "common": "Kenia"},
            "fra": {"official": "R\u00e9publique du Kenya", "common": "Kenya"},
            "hrv": {"official": "Republika Kenija", "common": "Kenija"},
            "ita": {"official": "Repubblica del Kenya", "common": "Kenya"},
            "jpn": {"official": "\u30b1\u30cb\u30a2\u5171\u548c\u56fd", "common": "\u30b1\u30cb\u30a2"},
            "nld": {"official": "Republiek Kenia", "common": "Kenia"},
            "por": {"official": "Rep\u00fablica do Qu\u00e9nia", "common": "Qu\u00e9nia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0435\u043d\u0438\u044f", "common": "\u041a\u0435\u043d\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Kenya", "common": "Kenia"},
            "fin": {"official": "Kenian tasavalta", "common": "Kenia"}
        },
        "latlng": [1, 38],
        "demonym": "Kenyan",
        "landlocked": false,
        "borders": ["ETH", "SOM", "SSD", "TZA", "UGA"],
        "area": 580367
    },
    {
        "name": {
            "common": "Kyrgyzstan",
            "official": "Kyrgyz Republic",
            "native": {
                "kir": {
                    "official": "\u041a\u044b\u0440\u0433\u044b\u0437 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0441\u044b",
                    "common": "\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d"
                },
                "rus": {
                    "official": "\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                    "common": "\u041a\u0438\u0440\u0433\u0438\u0437\u0438\u044f"
                }
            }
        },
        "tld": [".kg"],
        "cca2": "KG",
        "ccn3": "417",
        "cca3": "KGZ",
        "cioc": "KGZ",
        "currency": ["KGS"],
        "callingCode": ["996"],
        "capital": "Bishkek",
        "altSpellings": ["KG", "\u041a\u0438\u0440\u0433\u0438\u0437\u0438\u044f", "Kyrgyz Republic", "\u041a\u044b\u0440\u0433\u044b\u0437 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0441\u044b", "Kyrgyz Respublikasy"],
        "region": "Asia",
        "subregion": "Central Asia",
        "languages": {
            "kir": "Kyrgyz",
            "rus": "Russian"
        },
        "translations": {
            "deu": {"official": "Kirgisische Republik", "common": "Kirgisistan"},
            "fra": {"official": "R\u00e9publique kirghize", "common": "Kirghizistan"},
            "hrv": {"official": "Kirgistanu", "common": "Kirgistan"},
            "ita": {"official": "Kirghizistan", "common": "Kirghizistan"},
            "jpn": {"official": "\u30ad\u30eb\u30ae\u30b9\u5171\u548c\u56fd", "common": "\u30ad\u30eb\u30ae\u30b9"},
            "nld": {"official": "Kirgizische Republiek", "common": "Kirgizi\u00eb"},
            "por": {"official": "Rep\u00fablica do Quirguist\u00e3o", "common": "Quirguist\u00e3o"},
            "rus": {"official": "\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u041a\u0438\u0440\u0433\u0438\u0437\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica Kirguisa", "common": "Kirguizist\u00e1n"},
            "fin": {"official": "Kirgisian tasavalta", "common": "Kirgisia"}
        },
        "latlng": [41, 75],
        "demonym": "Kirghiz",
        "landlocked": true,
        "borders": ["CHN", "KAZ", "TJK", "UZB"],
        "area": 199951
    },
    {
        "name": {
            "common": "Cambodia",
            "official": "Kingdom of Cambodia",
            "native": {
                "khm": {
                    "official": "\u1796\u17d2\u179a\u17c7\u179a\u17b6\u1787\u17b6\u178e\u17b6\u1785\u1780\u17d2\u179a\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6",
                    "common": "K\u00e2mp\u016dch\u00e9a"
                }
            }
        },
        "tld": [".kh"],
        "cca2": "KH",
        "ccn3": "116",
        "cca3": "KHM",
        "cioc": "CAM",
        "currency": ["KHR"],
        "callingCode": ["855"],
        "capital": "Phnom Penh",
        "altSpellings": ["KH", "Kingdom of Cambodia"],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "khm": "Khmer"
        },
        "translations": {
            "cym": {"official": "Kingdom of Cambodia", "common": "Cambodia"},
            "deu": {"official": "K\u00f6nigreich Kambodscha", "common": "Kambodscha"},
            "fra": {"official": "Royaume du Cambodge", "common": "Cambodge"},
            "hrv": {"official": "Kraljevina Kambod\u017ea", "common": "Kambod\u017ea"},
            "ita": {"official": "Regno di Cambogia", "common": "Cambogia"},
            "jpn": {"official": "\u30ab\u30f3\u30dc\u30b8\u30a2\u738b\u56fd", "common": "\u30ab\u30f3\u30dc\u30b8\u30a2"},
            "nld": {"official": "Koninkrijk Cambodja", "common": "Cambodja"},
            "por": {"official": "Reino do Camboja", "common": "Camboja"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u041a\u0430\u043c\u0431\u043e\u0434\u0436\u0430", "common": "\u041a\u0430\u043c\u0431\u043e\u0434\u0436\u0430"},
            "spa": {"official": "Reino de Camboya", "common": "Camboya"},
            "fin": {"official": "Kambod\u017ean kuningaskunta", "common": "Kambod\u017ea"}
        },
        "latlng": [13, 105],
        "demonym": "Cambodian",
        "landlocked": false,
        "borders": ["LAO", "THA", "VNM"],
        "area": 181035
    },
    {
        "name": {
            "common": "Kiribati",
            "official": "Independent and Sovereign Republic of Kiribati",
            "native": {
                "eng": {
                    "official": "Independent and Sovereign Republic of Kiribati",
                    "common": "Kiribati"
                },
                "gil": {
                    "official": "Ribaberiki Kiribati",
                    "common": "Kiribati"
                }
            }
        },
        "tld": [".ki"],
        "cca2": "KI",
        "ccn3": "296",
        "cca3": "KIR",
        "cioc": "KIR",
        "currency": ["AUD"],
        "callingCode": ["686"],
        "capital": "South Tarawa",
        "altSpellings": ["KI", "Republic of Kiribati", "Ribaberiki Kiribati"],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "eng": "English",
            "gil": "Gilbertese"
        },
        "translations": {
            "deu": {"official": "Unabh\u00e4ngige und souver\u00e4ne Republik Kiribati", "common": "Kiribati"},
            "fra": {"official": "R\u00e9publique ind\u00e9pendante et souveraine de Kiribati", "common": "Kiribati"},
            "hrv": {"official": "Samostalne i suverene Republike Kiribati", "common": "Kiribati"},
            "ita": {"official": "Repubblica indipendente e sovrano di Kiribati", "common": "Kiribati"},
            "jpn": {"official": "\u30ad\u30ea\u30d0\u30b9\u306e\u72ec\u7acb\u3068\u4e3b\u6a29\u5171\u548c\u56fd", "common": "\u30ad\u30ea\u30d0\u30b9"},
            "nld": {"official": "Onafhankelijke en soevereine republiek Kiribati", "common": "Kiribati"},
            "por": {"official": "Independente e soberano Rep\u00fablica de Kiribati", "common": "Kiribati"},
            "rus": {"official": "\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0439 \u0438 \u0441\u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u0438\u0440\u0438\u0431\u0430\u0442\u0438", "common": "\u041a\u0438\u0440\u0438\u0431\u0430\u0442\u0438"},
            "spa": {"official": "Rep\u00fablica Independiente y Soberano de Kiribati", "common": "Kiribati"},
            "fin": {"official": "Kiribatin tasavalta", "common": "Kiribati"}
        },
        "latlng": [1.41666666, 173],
        "demonym": "I-Kiribati",
        "landlocked": false,
        "borders": [],
        "area": 811
    },
    {
        "name": {
            "common": "Saint Kitts and Nevis",
            "official": "Federation of Saint Christopher and Nevisa",
            "native": {
                "eng": {
                    "official": "Federation of Saint Christopher and Nevisa",
                    "common": "Saint Kitts and Nevis"
                }
            }
        },
        "tld": [".kn"],
        "cca2": "KN",
        "ccn3": "659",
        "cca3": "KNA",
        "cioc": "SKN",
        "currency": ["XCD"],
        "callingCode": ["1869"],
        "capital": "Basseterre",
        "altSpellings": ["KN", "Federation of Saint Christopher and Nevis"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "F\u00f6deration von Saint Kitts und Nevisa", "common": "Saint Christopher und Nevis"},
            "fra": {"official": "F\u00e9d\u00e9ration de Saint -Christophe-et Nevisa", "common": "Saint-Christophe-et-Ni\u00e9v\u00e8s"},
            "hrv": {"official": "Federacija Sv.Kristofora i Nevisa", "common": "Sveti Kristof i Nevis"},
            "ita": {"official": "Federazione di Saint Christopher e Nevisa", "common": "Saint Kitts e Nevis"},
            "jpn": {"official": "\u30bb\u30f3\u30c8\u30af\u30ea\u30b9\u30c8\u30d5\u30a1\u30fcNevisa\u9023\u76df", "common": "\u30bb\u30f3\u30c8\u30af\u30ea\u30b9\u30c8\u30d5\u30a1\u30fc\u30fb\u30cd\u30a4\u30d3\u30b9"},
            "nld": {"official": "Federatie van Saint Kitts en Nevisa", "common": "Saint Kitts en Nevis"},
            "por": {"official": "Federa\u00e7\u00e3o de S\u00e3o Crist\u00f3v\u00e3o e Nevisa", "common": "S\u00e3o Crist\u00f3v\u00e3o e Nevis"},
            "rus": {"official": "\u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044f \u0421\u0435\u043d\u0442- \u041a\u0440\u0438\u0441\u0442\u043e\u0444\u0435\u0440 \u0438 Nevisa", "common": "\u0421\u0435\u043d\u0442-\u041a\u0438\u0442\u0441 \u0438 \u041d\u0435\u0432\u0438\u0441"},
            "spa": {"official": "Federaci\u00f3n de San Crist\u00f3bal y Nevisa", "common": "San Crist\u00f3bal y Nieves"},
            "fin": {"official": "Saint Christopherin ja Nevisin federaatio", "common": "Saint Kitts ja Nevis"}
        },
        "latlng": [17.33333333, -62.75],
        "demonym": "Kittitian or Nevisian",
        "landlocked": false,
        "borders": [],
        "area": 261
    },
    {
        "name": {
            "common": "South Korea",
            "official": "Republic of Korea",
            "native": {
                "kor": {
                    "official": "\ud55c\uad6d",
                    "common": "\ub300\ud55c\ubbfc\uad6d"
                }
            }
        },
        "tld": [".kr", ".\ud55c\uad6d"],
        "cca2": "KR",
        "ccn3": "410",
        "cca3": "KOR",
        "cioc": "KOR",
        "currency": ["KRW"],
        "callingCode": ["82"],
        "capital": "Seoul",
        "altSpellings": ["KR", "Korea, Republic of", "Republic of Korea"],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "kor": "Korean"
        },
        "translations": {
            "deu": {"official": "Republik Korea", "common": "S\u00fcdkorea"},
            "fra": {"official": "R\u00e9publique de Cor\u00e9e", "common": "Cor\u00e9e du Sud"},
            "hrv": {"official": "Republika Koreja", "common": "Ju\u017ena Koreja"},
            "ita": {"official": "Repubblica di Corea", "common": "Corea del Sud"},
            "jpn": {"official": "\u5927\u97d3\u6c11\u56fd", "common": "\u5927\u97d3\u6c11\u56fd"},
            "nld": {"official": "Republiek Korea", "common": "Zuid-Korea"},
            "por": {"official": "Rep\u00fablica da Coreia", "common": "Coreia do Sul"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u0440\u0435\u044f", "common": "\u042e\u0436\u043d\u0430\u044f \u041a\u043e\u0440\u0435\u044f"},
            "spa": {"official": "Rep\u00fablica de Corea", "common": "Corea del Sur"},
            "fin": {"official": "Korean tasavalta", "common": "Etel\u00e4-Korea"}
        },
        "latlng": [37, 127.5],
        "demonym": "South Korean",
        "landlocked": false,
        "borders": ["PRK"],
        "area": 100210
    },
    {
        "name": {
            "common": "Kosovo",
            "official": "Republic of Kosovo",
            "native": {
                "sqi": {
                    "official": "Republika e Kosov\u00ebs",
                    "common": "Kosova"
                },
                "srp": {
                    "official": "\u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u0441\u043e\u0432\u043e",
                    "common": "\u041a\u043e\u0441\u043e\u0432\u043e"
                }
            }
        },
        "tld": [],
        "cca2": "XK",
        "ccn3": "",
        "cca3": "KOS",
        "cioc": "KOS",
        "currency": ["EUR"],
        "callingCode": ["383"],
        "capital": "Pristina",
        "altSpellings": ["XK", "\u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u0441\u043e\u0432\u043e"],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "sqi": "Albanian",
            "srp": "Serbian"
        },
        "translations": {
            "hrv": {"official": "Republika Kosovo", "common": "Kosovo"},
            "por": {"official": "Rep\u00fablica do Kosovo", "common": "Kosovo"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u0441\u043e\u0432\u043e", "common": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u0441\u043e\u0432\u043e"},
            "spa": {"official": "Rep\u00fablica de Kosovo", "common": "Kosovo"},
            "fin": {"official": "Kosovon tasavalta", "common": "Kosovo"}
        },
        "latlng": [42.666667, 21.166667],
        "demonym": "Kosovar",
        "landlocked": true,
        "borders": ["ALB", "MKD", "MNE", "SRB"],
        "area": 10908
    },
    {
        "name": {
            "common": "Kuwait",
            "official": "State of Kuwait",
            "native": {
                "ara": {
                    "official": "\u062f\u0648\u0644\u0629 \u0627\u0644\u0643\u0648\u064a\u062a",
                    "common": "\u0627\u0644\u0643\u0648\u064a\u062a"
                }
            }
        },
        "tld": [".kw"],
        "cca2": "KW",
        "ccn3": "414",
        "cca3": "KWT",
        "cioc": "KUW",
        "currency": ["KWD"],
        "callingCode": ["965"],
        "capital": "Kuwait City",
        "altSpellings": ["KW", "State of Kuwait", "Dawlat al-Kuwait"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "deu": {"official": "Staat Kuwait", "common": "Kuwait"},
            "fra": {"official": "\u00c9tat du Kowe\u00eft", "common": "Kowe\u00eft"},
            "hrv": {"official": "Dr\u017eava Kuvajt", "common": "Kuvajt"},
            "ita": {"official": "Stato del Kuwait", "common": "Kuwait"},
            "jpn": {"official": "\u30af\u30a6\u30a7\u30fc\u30c8\u56fd", "common": "\u30af\u30a6\u30a7\u30fc\u30c8"},
            "nld": {"official": "Staat Koeweit", "common": "Koeweit"},
            "por": {"official": "Estado do Kuwait", "common": "Kuwait"},
            "rus": {"official": "\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u041a\u0443\u0432\u0435\u0439\u0442", "common": "\u041a\u0443\u0432\u0435\u0439\u0442"},
            "spa": {"official": "Estado de Kuwait", "common": "Kuwait"},
            "fin": {"official": "Kuwaitin valtio", "common": "Kuwait"}
        },
        "latlng": [29.5, 45.75],
        "demonym": "Kuwaiti",
        "landlocked": false,
        "borders": ["IRQ", "SAU"],
        "area": 17818
    },
    {
        "name": {
            "common": "Laos",
            "official": "Lao People's Democratic Republic",
            "native": {
                "lao": {
                    "official": "\u0eaa\u0eb2\u0e97\u0eb2\u0ea5\u0eb0\u0e99\u0eb0 \u0e8a\u0eb2\u0e97\u0eb4\u0e9b\u0eb0\u0ec4\u0e95 \u0e84\u0ebb\u0e99\u0ea5\u0eb2\u0ea7 \u0e82\u0ead\u0e87",
                    "common": "\u0eaa\u0e9b\u0e9b\u0ea5\u0eb2\u0ea7"
                }
            }
        },
        "tld": [".la"],
        "cca2": "LA",
        "ccn3": "418",
        "cca3": "LAO",
        "cioc": "LAO",
        "currency": ["LAK"],
        "callingCode": ["856"],
        "capital": "Vientiane",
        "altSpellings": ["LA", "Lao", "Lao People's Democratic Republic", "Sathalanalat Paxathipatai Paxaxon Lao"],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "lao": "Lao"
        },
        "translations": {
            "deu": {"official": "Laos, Demokratische Volksrepublik", "common": "Laos"},
            "fra": {"official": "R\u00e9publique d\u00e9mocratique populaire lao", "common": "Laos"},
            "hrv": {"official": "Narodna Demokratska Republika", "common": "Laos"},
            "ita": {"official": "Repubblica democratica popolare del Laos", "common": "Laos"},
            "jpn": {"official": "\u30e9\u30aa\u30b9\u4eba\u6c11\u6c11\u4e3b\u5171\u548c\u56fd", "common": "\u30e9\u30aa\u30b9\u4eba\u6c11\u6c11\u4e3b\u5171\u548c\u56fd"},
            "nld": {"official": "Lao Democratische Volksrepubliek", "common": "Laos"},
            "por": {"official": "Laos, Rep\u00fablica Democr\u00e1tica", "common": "Laos"},
            "rus": {"official": "\u041b\u0430\u043e\u0441\u0441\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u043e-\u0414\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u041b\u0430\u043e\u0441"},
            "spa": {"official": "Rep\u00fablica Democr\u00e1tica Popular Lao", "common": "Laos"},
            "fin": {"official": "Laosin demokraattinen kansantasavalta", "common": "Laos"}
        },
        "latlng": [18, 105],
        "demonym": "Laotian",
        "landlocked": true,
        "borders": ["MMR", "KHM", "CHN", "THA", "VNM"],
        "area": 236800
    },
    {
        "name": {
            "common": "Lebanon",
            "official": "Lebanese Republic",
            "native": {
                "ara": {
                    "official": "\u0627\u0644\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064a\u0629",
                    "common": "\u0644\u0628\u0646\u0627\u0646"
                },
                "fra": {
                    "official": "R\u00e9publique libanaise",
                    "common": "Liban"
                }
            }
        },
        "tld": [".lb"],
        "cca2": "LB",
        "ccn3": "422",
        "cca3": "LBN",
        "cioc": "LIB",
        "currency": ["LBP"],
        "callingCode": ["961"],
        "capital": "Beirut",
        "altSpellings": ["LB", "Lebanese Republic", "Al-Jumh\u016br\u012byah Al-Libn\u0101n\u012byah"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic",
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Libanesische Republik", "common": "Libanon"},
            "fra": {"official": "R\u00e9publique libanais", "common": "Liban"},
            "hrv": {"official": "Libanonska Republika", "common": "Libanon"},
            "ita": {"official": "Repubblica libanese", "common": "Libano"},
            "jpn": {"official": "\u30ec\u30d0\u30ce\u30f3\u5171\u548c\u56fd", "common": "\u30ec\u30d0\u30ce\u30f3"},
            "nld": {"official": "Libanese Republiek", "common": "Libanon"},
            "por": {"official": "Rep\u00fablica Libanesa", "common": "L\u00edbano"},
            "rus": {"official": "\u041b\u0438\u0432\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u041b\u0438\u0432\u0430\u043d"},
            "spa": {"official": "Rep\u00fablica Libanesa", "common": "L\u00edbano"},
            "fin": {"official": "Libanonin tasavalta", "common": "Libanon"}
        },
        "latlng": [33.83333333, 35.83333333],
        "demonym": "Lebanese",
        "landlocked": false,
        "borders": ["ISR", "SYR"],
        "area": 10452
    },
    {
        "name": {
            "common": "Liberia",
            "official": "Republic of Liberia",
            "native": {
                "eng": {
                    "official": "Republic of Liberia",
                    "common": "Liberia"
                }
            }
        },
        "tld": [".lr"],
        "cca2": "LR",
        "ccn3": "430",
        "cca3": "LBR",
        "cioc": "LBR",
        "currency": ["LRD"],
        "callingCode": ["231"],
        "capital": "Monrovia",
        "altSpellings": ["LR", "Republic of Liberia"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Republik Liberia", "common": "Liberia"},
            "fra": {"official": "R\u00e9publique du Lib\u00e9ria", "common": "Liberia"},
            "hrv": {"official": "Republika Liberija", "common": "Liberija"},
            "ita": {"official": "Repubblica di Liberia", "common": "Liberia"},
            "jpn": {"official": "\u30ea\u30d9\u30ea\u30a2\u5171\u548c\u56fd", "common": "\u30ea\u30d9\u30ea\u30a2"},
            "nld": {"official": "Republiek Liberia", "common": "Liberia"},
            "por": {"official": "Rep\u00fablica da Lib\u00e9ria", "common": "Lib\u00e9ria"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041b\u0438\u0431\u0435\u0440\u0438\u044f", "common": "\u041b\u0438\u0431\u0435\u0440\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Liberia", "common": "Liberia"},
            "fin": {"official": "Liberian tasavalta", "common": "Liberia"}
        },
        "latlng": [6.5, -9.5],
        "demonym": "Liberian",
        "landlocked": false,
        "borders": ["GIN", "CIV", "SLE"],
        "area": 111369
    },
    {
        "name": {
            "common": "Libya",
            "official": "State of Libya",
            "native": {
                "ara": {
                    "official": "\u0627\u0644\u062f\u0648\u0644\u0629 \u0644\u064a\u0628\u064a\u0627",
                    "common": "\u200f\u0644\u064a\u0628\u064a\u0627"
                }
            }
        },
        "tld": [".ly"],
        "cca2": "LY",
        "ccn3": "434",
        "cca3": "LBY",
        "cioc": "LBA",
        "currency": ["LYD"],
        "callingCode": ["218"],
        "capital": "Tripoli",
        "altSpellings": ["LY", "State of Libya", "Dawlat Libya"],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "deu": {"official": "Staat Libyen", "common": "Libyen"},
            "fra": {"official": "\u00c9tat de la Libye", "common": "Libye"},
            "hrv": {"official": "Dr\u017eava Libiji", "common": "Libija"},
            "ita": {"official": "Stato della Libia", "common": "Libia"},
            "jpn": {"official": "\u30ea\u30d3\u30a2\u306e\u56fd\u5bb6", "common": "\u30ea\u30d3\u30a2"},
            "nld": {"official": "Staat van Libi\u00eb", "common": "Libi\u00eb"},
            "por": {"official": "Estado da L\u00edbia", "common": "L\u00edbia"},
            "rus": {"official": "\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u041b\u0438\u0432\u0438\u0438", "common": "\u041b\u0438\u0432\u0438\u044f"},
            "spa": {"official": "Estado de Libia", "common": "Libia"},
            "fin": {"official": "Libyan valtio", "common": "Libya"}
        },
        "latlng": [25, 17],
        "demonym": "Libyan",
        "landlocked": false,
        "borders": ["DZA", "TCD", "EGY", "NER", "SDN", "TUN"],
        "area": 1759540
    },
    {
        "name": {
            "common": "Saint Lucia",
            "official": "Saint Lucia",
            "native": {
                "eng": {
                    "official": "Saint Lucia",
                    "common": "Saint Lucia"
                }
            }
        },
        "tld": [".lc"],
        "cca2": "LC",
        "ccn3": "662",
        "cca3": "LCA",
        "cioc": "LCA",
        "currency": ["XCD"],
        "callingCode": ["1758"],
        "capital": "Castries",
        "altSpellings": ["LC"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "St. Lucia", "common": "Saint Lucia"},
            "fra": {"official": "Sainte-Lucie", "common": "Saint-Lucie"},
            "hrv": {"official": "Sveta Lucija", "common": "Sveta Lucija"},
            "ita": {"official": "Santa Lucia", "common": "Santa Lucia"},
            "jpn": {"official": "\u30bb\u30f3\u30c8\u30eb\u30b7\u30a2", "common": "\u30bb\u30f3\u30c8\u30eb\u30b7\u30a2"},
            "nld": {"official": "Saint Lucia", "common": "Saint Lucia"},
            "por": {"official": "Santa L\u00facia", "common": "Santa L\u00facia"},
            "rus": {"official": "\u0421\u0435\u043d\u0442-\u041b\u044e\u0441\u0438\u044f", "common": "\u0421\u0435\u043d\u0442-\u041b\u044e\u0441\u0438\u044f"},
            "spa": {"official": "Santa Luc\u00eda", "common": "Santa Luc\u00eda"},
            "fin": {"official": "Saint Lucia", "common": "Saint Lucia"}
        },
        "latlng": [13.88333333, -60.96666666],
        "demonym": "Saint Lucian",
        "landlocked": false,
        "borders": [],
        "area": 616
    },
    {
        "name": {
            "common": "Liechtenstein",
            "official": "Principality of Liechtenstein",
            "native": {
                "deu": {
                    "official": "F\u00fcrstentum Liechtenstein",
                    "common": "Liechtenstein"
                }
            }
        },
        "tld": [".li"],
        "cca2": "LI",
        "ccn3": "438",
        "cca3": "LIE",
        "cioc": "LIE",
        "currency": ["CHF"],
        "callingCode": ["423"],
        "capital": "Vaduz",
        "altSpellings": ["LI", "Principality of Liechtenstein", "F\u00fcrstentum Liechtenstein"],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "deu": "German"
        },
        "translations": {
            "deu": {"official": "F\u00fcrstentum Liechtenstein", "common": "Liechtenstein"},
            "fra": {"official": "Principaut\u00e9 de Liechtenstein", "common": "Liechtenstein"},
            "hrv": {"official": "Kne\u017eevina Lihten\u0161tajn", "common": "Lihten\u0161tajn"},
            "ita": {"official": "Principato del Liechtenstein", "common": "Liechtenstein"},
            "jpn": {"official": "\u30ea\u30d2\u30c6\u30f3\u30b7\u30e5\u30bf\u30a4\u30f3\u516c\u56fd", "common": "\u30ea\u30d2\u30c6\u30f3\u30b7\u30e5\u30bf\u30a4\u30f3"},
            "nld": {"official": "Vorstendom Liechtenstein", "common": "Liechtenstein"},
            "por": {"official": "Principado de Liechtenstein", "common": "Liechtenstein"},
            "rus": {"official": "\u041a\u043d\u044f\u0436\u0435\u0441\u0442\u0432\u043e \u041b\u0438\u0445\u0442\u0435\u043d\u0448\u0442\u0435\u0439\u043d", "common": "\u041b\u0438\u0445\u0442\u0435\u043d\u0448\u0442\u0435\u0439\u043d"},
            "spa": {"official": "Principado de Liechtenstein", "common": "Liechtenstein"},
            "fin": {"official": "Liechensteinin ruhtinaskunta", "common": "Liechenstein"}
        },
        "latlng": [47.26666666, 9.53333333],
        "demonym": "Liechtensteiner",
        "landlocked": true,
        "borders": ["AUT", "CHE"],
        "area": 160
    },
    {
        "name": {
            "common": "Sri Lanka",
            "official": "Democratic Socialist Republic of Sri Lanka",
            "native": {
                "sin": {
                    "official": "\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf \u0db4\u0dca\u200d\u0dbb\u0da2\u0dcf\u0dad\u0dcf\u0db1\u0dca\u0dad\u0dca\u200d\u0dbb\u0dd2\u0d9a \u0dc3\u0db8\u0dcf\u0da2\u0dc0\u0dcf\u0daf\u0dd3 \u0da2\u0db1\u0dbb\u0da2\u0dba",
                    "common": "\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0"
                },
                "tam": {
                    "official": "\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8 \u0b9a\u0ba9\u0ba8\u0bbe\u0baf\u0b95 \u0b9a\u0bcb\u0b9a\u0bb2\u0bbf\u0b9a\u0b95\u0bcd \u0b95\u0bc1\u0b9f\u0bbf\u0baf\u0bb0\u0b9a\u0bc1",
                    "common": "\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8"
                }
            }
        },
        "tld": [".lk", ".\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8", ".\u0dbd\u0d82\u0d9a\u0dcf"],
        "cca2": "LK",
        "ccn3": "144",
        "cca3": "LKA",
        "cioc": "SRI",
        "currency": ["LKR"],
        "callingCode": ["94"],
        "capital": "Colombo",
        "altSpellings": ["LK", "ila\u1e45kai", "Democratic Socialist Republic of Sri Lanka"],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "sin": "Sinhala",
            "tam": "Tamil"
        },
        "translations": {
            "deu": {"official": "Demokratische Sozialistische Republik Sri Lanka", "common": "Sri Lanka"},
            "fra": {"official": "R\u00e9publique socialiste d\u00e9mocratique de Sri Lanka", "common": "Sri Lanka"},
            "hrv": {"official": "Demokratska Socijalisti\u010dke Republike \u0160ri Lanke", "common": "\u0160ri Lanka"},
            "ita": {"official": "Repubblica democratica socialista dello Sri Lanka", "common": "Sri Lanka"},
            "jpn": {"official": "\u30b9\u30ea\u30e9\u30f3\u30ab\u6c11\u4e3b\u793e\u4f1a\u4e3b\u7fa9\u5171\u548c\u56fd", "common": "\u30b9\u30ea\u30e9\u30f3\u30ab"},
            "nld": {"official": "Democratische Socialistische Republiek Sri Lanka", "common": "Sri Lanka"},
            "por": {"official": "Rep\u00fablica Democr\u00e1tica Socialista do Sri Lanka", "common": "Sri Lanka"},
            "rus": {"official": "\u0414\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0421\u043e\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0428\u0440\u0438-\u041b\u0430\u043d\u043a\u0430", "common": "\u0428\u0440\u0438-\u041b\u0430\u043d\u043a\u0430"},
            "spa": {"official": "Rep\u00fablica Democr\u00e1tica Socialista de Sri Lanka", "common": "Sri Lanka"},
            "fin": {"official": "Sri Lankan demokraattinen sosialistinen tasavalta", "common": "Sri Lanka"}
        },
        "latlng": [7, 81],
        "demonym": "Sri Lankan",
        "landlocked": false,
        "borders": ["IND"],
        "area": 65610
    },
    {
        "name": {
            "common": "Lesotho",
            "official": "Kingdom of Lesotho",
            "native": {
                "eng": {
                    "official": "Kingdom of Lesotho",
                    "common": "Lesotho"
                },
                "sot": {
                    "official": "Kingdom of Lesotho",
                    "common": "Lesotho"
                }
            }
        },
        "tld": [".ls"],
        "cca2": "LS",
        "ccn3": "426",
        "cca3": "LSO",
        "cioc": "LES",
        "currency": ["LSL", "ZAR"],
        "callingCode": ["266"],
        "capital": "Maseru",
        "altSpellings": ["LS", "Kingdom of Lesotho", "Muso oa Lesotho"],
        "region": "Africa",
        "subregion": "Southern Africa",
        "languages": {
            "eng": "English",
            "sot": "Sotho"
        },
        "translations": {
            "deu": {"official": "K\u00f6nigreich Lesotho", "common": "Lesotho"},
            "fra": {"official": "Royaume du Lesotho", "common": "Lesotho"},
            "hrv": {"official": "Kraljevina Lesoto", "common": "Lesoto"},
            "ita": {"official": "Regno del Lesotho", "common": "Lesotho"},
            "jpn": {"official": "\u30ec\u30bd\u30c8\u738b\u56fd", "common": "\u30ec\u30bd\u30c8"},
            "nld": {"official": "Koninkrijk Lesotho", "common": "Lesotho"},
            "por": {"official": "Reino do Lesoto", "common": "Lesoto"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u041b\u0435\u0441\u043e\u0442\u043e", "common": "\u041b\u0435\u0441\u043e\u0442\u043e"},
            "spa": {"official": "Reino de Lesotho", "common": "Lesotho"},
            "fin": {"official": "Lesothon kuningaskunta", "common": "Lesotho"}
        },
        "latlng": [-29.5, 28.5],
        "demonym": "Mosotho",
        "landlocked": true,
        "borders": ["ZAF"],
        "area": 30355
    },
    {
        "name": {
            "common": "Lithuania",
            "official": "Republic of Lithuania",
            "native": {
                "lit": {
                    "official": "Lietuvos Respublikos",
                    "common": "Lietuva"
                }
            }
        },
        "tld": [".lt"],
        "cca2": "LT",
        "ccn3": "440",
        "cca3": "LTU",
        "cioc": "LTU",
        "currency": ["EUR"],
        "callingCode": ["370"],
        "capital": "Vilnius",
        "altSpellings": ["LT", "Republic of Lithuania", "Lietuvos Respublika"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "lit": "Lithuanian"
        },
        "translations": {
            "deu": {"official": "Republik Litauen", "common": "Litauen"},
            "fra": {"official": "R\u00e9publique de Lituanie", "common": "Lituanie"},
            "hrv": {"official": "Republika Litva", "common": "Litva"},
            "ita": {"official": "Repubblica di Lituania", "common": "Lituania"},
            "jpn": {"official": "\u30ea\u30c8\u30a2\u30cb\u30a2\u5171\u548c\u56fd", "common": "\u30ea\u30c8\u30a2\u30cb\u30a2"},
            "nld": {"official": "Republiek Litouwen", "common": "Litouwen"},
            "por": {"official": "Rep\u00fablica da Litu\u00e2nia", "common": "Litu\u00e2nia"},
            "rus": {"official": "\u041b\u0438\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u041b\u0438\u0442\u0432\u0430"},
            "spa": {"official": "Rep\u00fablica de Lituania", "common": "Lituania"},
            "fin": {"official": "Liettuan tasavalta", "common": "Liettua"}
        },
        "latlng": [56, 24],
        "demonym": "Lithuanian",
        "landlocked": false,
        "borders": ["BLR", "LVA", "POL", "RUS"],
        "area": 65300
    },
    {
        "name": {
            "common": "Luxembourg",
            "official": "Grand Duchy of Luxembourg",
            "native": {
                "deu": {
                    "official": "Gro\u00dfherzogtum Luxemburg",
                    "common": "Luxemburg"
                },
                "fra": {
                    "official": "Grand-Duch\u00e9 de Luxembourg",
                    "common": "Luxembourg"
                },
                "ltz": {
                    "official": "Groussherzogtum L\u00ebtzebuerg",
                    "common": "L\u00ebtzebuerg"
                }
            }
        },
        "tld": [".lu"],
        "cca2": "LU",
        "ccn3": "442",
        "cca3": "LUX",
        "cioc": "LUX",
        "currency": ["EUR"],
        "callingCode": ["352"],
        "capital": "Luxembourg",
        "altSpellings": ["LU", "Grand Duchy of Luxembourg", "Grand-Duch\u00e9 de Luxembourg", "Gro\u00dfherzogtum Luxemburg", "Groussherzogtum L\u00ebtzebuerg"],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "deu": "German",
            "fra": "French",
            "ltz": "Luxembourgish"
        },
        "translations": {
            "deu": {"official": "Gro\u00dfherzogtum Luxemburg,", "common": "Luxemburg"},
            "fra": {"official": "Grand-Duch\u00e9 de Luxembourg", "common": "Luxembourg"},
            "hrv": {"official": "Veliko Vojvodstvo Luksemburg", "common": "Luksemburg"},
            "ita": {"official": "Granducato di Lussemburgo", "common": "Lussemburgo"},
            "jpn": {"official": "\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af\u5927\u516c\u56fd", "common": "\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af"},
            "nld": {"official": "Groothertogdom Luxemburg", "common": "Luxemburg"},
            "por": {"official": "Gr\u00e3o-Ducado do Luxemburgo", "common": "Luxemburgo"},
            "rus": {"official": "\u0412\u0435\u043b\u0438\u043a\u043e\u0435 \u0413\u0435\u0440\u0446\u043e\u0433\u0441\u0442\u0432\u043e \u041b\u044e\u043a\u0441\u0435\u043c\u0431\u0443\u0440\u0433", "common": "\u041b\u044e\u043a\u0441\u0435\u043c\u0431\u0443\u0440\u0433"},
            "spa": {"official": "Gran Ducado de Luxemburgo", "common": "Luxemburgo"},
            "fin": {"official": "Luxemburgin suurherttuakunta", "common": "Luxemburg"}
        },
        "latlng": [49.75, 6.16666666],
        "demonym": "Luxembourger",
        "landlocked": true,
        "borders": ["BEL", "FRA", "DEU"],
        "area": 2586
    },
    {
        "name": {
            "common": "Latvia",
            "official": "Republic of Latvia",
            "native": {
                "lav": {
                    "official": "Latvijas Republikas",
                    "common": "Latvija"
                }
            }
        },
        "tld": [".lv"],
        "cca2": "LV",
        "ccn3": "428",
        "cca3": "LVA",
        "cioc": "LAT",
        "currency": ["EUR"],
        "callingCode": ["371"],
        "capital": "Riga",
        "altSpellings": ["LV", "Republic of Latvia", "Latvijas Republika"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "lav": "Latvian"
        },
        "translations": {
            "deu": {"official": "Republik Lettland", "common": "Lettland"},
            "fra": {"official": "R\u00e9publique de Lettonie", "common": "Lettonie"},
            "hrv": {"official": "Republika Latvija", "common": "Latvija"},
            "ita": {"official": "Repubblica di Lettonia", "common": "Lettonia"},
            "jpn": {"official": "\u30e9\u30c8\u30d3\u30a2\u5171\u548c\u56fd", "common": "\u30e9\u30c8\u30d3\u30a2"},
            "nld": {"official": "Republiek Letland", "common": "Letland"},
            "por": {"official": "Rep\u00fablica da Let\u00f3nia", "common": "Let\u00f3nia"},
            "rus": {"official": "\u041b\u0430\u0442\u0432\u0438\u0439\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u041b\u0430\u0442\u0432\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Letonia", "common": "Letonia"},
            "fin": {"official": "Latvian tasavalta", "common": "Latvia"}
        },
        "latlng": [57, 25],
        "demonym": "Latvian",
        "landlocked": false,
        "borders": ["BLR", "EST", "LTU", "RUS"],
        "area": 64559
    },
    {
        "name": {
            "common": "Macau",
            "official": "Macao Special Administrative Region of the People's Republic of China",
            "native": {
                "por": {
                    "official": "Regi\u00e3o Administrativa Especial de Macau da Rep\u00fablica Popular da China",
                    "common": "Macau"
                },
                "zho": {
                    "official": "\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a\u4e2d\u56fd\u4eba\u6c11\u5171\u548c\u56fd",
                    "common": "\u6fb3\u9580"
                }
            }
        },
        "tld": [".mo"],
        "cca2": "MO",
        "ccn3": "446",
        "cca3": "MAC",
        "cioc": "",
        "currency": ["MOP"],
        "callingCode": ["853"],
        "capital": "",
        "altSpellings": ["MO", "\u6fb3\u95e8", "Macao", "Macao Special Administrative Region of the People's Republic of China", "\u4e2d\u83ef\u4eba\u6c11\u5171\u548c\u570b\u6fb3\u9580\u7279\u5225\u884c\u653f\u5340", "Regi\u00e3o Administrativa Especial de Macau da Rep\u00fablica Popular da China"],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "por": "Portuguese",
            "zho": "Chinese"
        },
        "translations": {
            "deu": {"official": "Sonderverwaltungsregion Macau der Volksrepublik China", "common": "Macao"},
            "fra": {"official": "Macao r\u00e9gion administrative sp\u00e9ciale de la R\u00e9publique populaire de Chine", "common": "Macao"},
            "hrv": {"official": "Makao Posebnog upravnog podru\u010djaNarodne Republike Kine", "common": "Makao"},
            "ita": {"official": "Macao Regione amministrativa speciale della Repubblica Popolare Cinese", "common": "Macao"},
            "jpn": {"official": "\u4e2d\u83ef\u4eba\u6c11\u5171\u548c\u56fd\u30de\u30ab\u30aa\u7279\u5225\u884c\u653f\u533a", "common": "\u30de\u30ab\u30aa"},
            "nld": {"official": "Speciale Administratieve Regio Macau van de Volksrepubliek China", "common": "Macao"},
            "por": {"official": "Macau Regi\u00e3o Administrativa Especial da Rep\u00fablica Popular da China", "common": "Macau"},
            "rus": {"official": "\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0440\u0430\u0439\u043e\u043d \u041c\u0430\u043a\u0430\u043e \u041a\u0438\u0442\u0430\u0439\u0441\u043a\u043e\u0439 \u041d\u0430\u0440\u043e\u0434\u043d\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u0438\u0442\u0430\u0439", "common": "\u041c\u0430\u043a\u0430\u043e"},
            "spa": {"official": "Macao, Regi\u00f3n Administrativa Especial de la Rep\u00fablica Popular China", "common": "Macao"},
            "fin": {"official": "Macaon Kiinan kansantasavallan erityishallintoalue", "common": "Macao"}
        },
        "latlng": [22.16666666, 113.55],
        "demonym": "Chinese",
        "landlocked": false,
        "borders": ["CHN"],
        "area": 30
    },
    {
        "name": {
            "common": "Saint Martin",
            "official": "Saint Martin",
            "native": {
                "fra": {
                    "official": "Saint-Martin",
                    "common": "Saint-Martin"
                }
            }
        },
        "tld": [".fr", ".gp"],
        "cca2": "MF",
        "ccn3": "663",
        "cca3": "MAF",
        "cioc": "",
        "currency": ["EUR"],
        "callingCode": ["590"],
        "capital": "Marigot",
        "altSpellings": ["MF", "Collectivity of Saint Martin", "Collectivit\u00e9 de Saint-Martin", "Saint Martin (French part)"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "St. Martin", "common": "Saint Martin"},
            "fra": {"official": "Saint Martin", "common": "Saint-Martin"},
            "hrv": {"official": "Saint Martin", "common": "Sveti Martin"},
            "ita": {"official": "saint Martin", "common": "Saint Martin"},
            "jpn": {"official": "\u30b5\u30f3\u30de\u30eb\u30bf\u30f3\u5cf6", "common": "\u30b5\u30f3\u30fb\u30de\u30eb\u30bf\u30f3\uff08\u30d5\u30e9\u30f3\u30b9\u9818\uff09"},
            "nld": {"official": "Saint Martin", "common": "Saint-Martin"},
            "por": {"official": "saint Martin", "common": "S\u00e3o Martinho"},
            "rus": {"official": "\u0421\u0435\u043d-\u041c\u0430\u0440\u0442\u0435\u043d", "common": "\u0421\u0435\u043d-\u041c\u0430\u0440\u0442\u0435\u043d"},
            "spa": {"official": "Saint Martin", "common": "Saint Martin"},
            "fin": {"official": "Saint-Martin", "common": "Saint-Martin"}
        },
        "latlng": [18.08333333, -63.95],
        "demonym": "Saint Martin Islander",
        "landlocked": false,
        "borders": ["SXM"],
        "area": 53
    },
    {
        "name": {
            "common": "Morocco",
            "official": "Kingdom of Morocco",
            "native": {
                "ara": {
                    "official": "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u063a\u0631\u0628\u064a\u0629",
                    "common": "\u0627\u0644\u0645\u063a\u0631\u0628"
                },
                "ber": {
                    "official": "\u2d5c\u2d30\u2d33\u2d4d\u2d37\u2d49\u2d5c \u2d4f \u2d4d\u2d4e\u2d56\u2d54\u2d49\u2d31",
                    "common": "\u2d4d\u2d4e\u2d30\u2d56\u2d54\u2d49\u2d31"
                }
            }
        },
        "tld": [".ma", "\u0627\u0644\u0645\u063a\u0631\u0628."],
        "cca2": "MA",
        "ccn3": "504",
        "cca3": "MAR",
        "cioc": "MAR",
        "currency": ["MAD"],
        "callingCode": ["212"],
        "capital": "Rabat",
        "altSpellings": ["MA", "Kingdom of Morocco", "Al-Mamlakah al-Ma\u0121ribiyah"],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic",
            "ber": "Berber"
        },
        "translations": {
            "deu": {"official": "K\u00f6nigreich Marokko", "common": "Marokko"},
            "fra": {"official": "Royaume du Maroc", "common": "Maroc"},
            "hrv": {"official": "Kraljevina Maroko", "common": "Maroko"},
            "ita": {"official": "Regno del Marocco", "common": "Marocco"},
            "jpn": {"official": "\u30e2\u30ed\u30c3\u30b3\u738b\u56fd", "common": "\u30e2\u30ed\u30c3\u30b3"},
            "nld": {"official": "Koninkrijk Marokko", "common": "Marokko"},
            "por": {"official": "Reino de Marrocos", "common": "Marrocos"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u041c\u0430\u0440\u043e\u043a\u043a\u043e", "common": "\u041c\u0430\u0440\u043e\u043a\u043a\u043e"},
            "spa": {"official": "Reino de Marruecos", "common": "Marruecos"},
            "fin": {"official": "Marokon kuningaskunta", "common": "Marokko"}
        },
        "latlng": [32, -5],
        "demonym": "Moroccan",
        "landlocked": false,
        "borders": ["DZA", "ESH", "ESP"],
        "area": 446550
    },
    {
        "name": {
            "common": "Monaco",
            "official": "Principality of Monaco",
            "native": {
                "fra": {
                    "official": "Principaut\u00e9 de Monaco",
                    "common": "Monaco"
                }
            }
        },
        "tld": [".mc"],
        "cca2": "MC",
        "ccn3": "492",
        "cca3": "MCO",
        "cioc": "MON",
        "currency": ["EUR"],
        "callingCode": ["377"],
        "capital": "Monaco",
        "altSpellings": ["MC", "Principality of Monaco", "Principaut\u00e9 de Monaco"],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "F\u00fcrstentum Monaco", "common": "Monaco"},
            "fra": {"official": "Principaut\u00e9 de Monaco", "common": "Monaco"},
            "hrv": {"official": "Kne\u017eevina Monako", "common": "Monako"},
            "ita": {"official": "Principato di Monaco", "common": "Principato di Monaco"},
            "jpn": {"official": "\u30e2\u30ca\u30b3\u516c\u56fd", "common": "\u30e2\u30ca\u30b3"},
            "nld": {"official": "Vorstendom Monaco", "common": "Monaco"},
            "por": {"official": "Principado do M\u00f3naco", "common": "M\u00f3naco"},
            "rus": {"official": "\u041a\u043d\u044f\u0436\u0435\u0441\u0442\u0432\u043e \u041c\u043e\u043d\u0430\u043a\u043e", "common": "\u041c\u043e\u043d\u0430\u043a\u043e"},
            "spa": {"official": "Principado de M\u00f3naco", "common": "M\u00f3naco"},
            "fin": {"official": "Monacon ruhtinaskunta", "common": "Monaco"}
        },
        "latlng": [43.73333333, 7.4],
        "demonym": "Monegasque",
        "landlocked": false,
        "borders": ["FRA"],
        "area": 2.02
    },
    {
        "name": {
            "common": "Moldova",
            "official": "Republic of Moldova",
            "native": {
                "ron": {
                    "official": "Republica Moldova",
                    "common": "Moldova"
                }
            }
        },
        "tld": [".md"],
        "cca2": "MD",
        "ccn3": "498",
        "cca3": "MDA",
        "cioc": "MDA",
        "currency": ["MDL"],
        "callingCode": ["373"],
        "capital": "Chi\u0219in\u0103u",
        "altSpellings": ["MD", "Moldova, Republic of", "Republic of Moldova", "Republica Moldova"],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "ron": "Moldavian"
        },
        "translations": {
            "deu": {"official": "Republik Moldau", "common": "Moldawie"},
            "fra": {"official": "R\u00e9publique de Moldova", "common": "Moldavie"},
            "hrv": {"official": "Moldavija", "common": "Moldova"},
            "ita": {"official": "Repubblica di Moldova", "common": "Moldavia"},
            "jpn": {"official": "\u30e2\u30eb\u30c9\u30d0\u5171\u548c\u56fd", "common": "\u30e2\u30eb\u30c9\u30d0\u5171\u548c\u56fd"},
            "nld": {"official": "Republiek Moldavi\u00eb", "common": "Moldavi\u00eb"},
            "por": {"official": "Rep\u00fablica da Mold\u00e1via", "common": "Mold\u00e1via"},
            "rus": {"official": "\u041c\u043e\u043b\u0434\u043e\u0432\u0430", "common": "\u041c\u043e\u043b\u0434\u0430\u0432\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Moldova", "common": "Moldavia"},
            "fin": {"official": "Moldovan tasavalta", "common": "Moldova"}
        },
        "latlng": [47, 29],
        "demonym": "Moldovan",
        "landlocked": true,
        "borders": ["ROU", "UKR"],
        "area": 33846
    },
    {
        "name": {
            "common": "Madagascar",
            "official": "Republic of Madagascar",
            "native": {
                "fra": {
                    "official": "R\u00e9publique de Madagascar",
                    "common": "Madagascar"
                },
                "mlg": {
                    "official": "Repoblikan'i Madagasikara",
                    "common": "Madagasikara"
                }
            }
        },
        "tld": [".mg"],
        "cca2": "MG",
        "ccn3": "450",
        "cca3": "MDG",
        "cioc": "MAD",
        "currency": ["MGA"],
        "callingCode": ["261"],
        "capital": "Antananarivo",
        "altSpellings": ["MG", "Republic of Madagascar", "Repoblikan'i Madagasikara", "R\u00e9publique de Madagascar"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "fra": "French",
            "mlg": "Malagasy"
        },
        "translations": {
            "deu": {"official": "Republik Madagaskar", "common": "Madagaskar"},
            "fra": {"official": "R\u00e9publique de Madagascar", "common": "Madagascar"},
            "hrv": {"official": "Republika Madagaskar", "common": "Madagaskar"},
            "ita": {"official": "Repubblica del Madagascar", "common": "Madagascar"},
            "jpn": {"official": "\u30de\u30c0\u30ac\u30b9\u30ab\u30eb\u5171\u548c\u56fd", "common": "\u30de\u30c0\u30ac\u30b9\u30ab\u30eb"},
            "nld": {"official": "Republiek Madagaskar", "common": "Madagaskar"},
            "por": {"official": "Rep\u00fablica de Madag\u00e1scar", "common": "Madag\u00e1scar"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u0434\u0430\u0433\u0430\u0441\u043a\u0430\u0440", "common": "\u041c\u0430\u0434\u0430\u0433\u0430\u0441\u043a\u0430\u0440"},
            "spa": {"official": "Rep\u00fablica de Madagascar", "common": "Madagascar"},
            "fin": {"official": "Madagaskarin tasavalta", "common": "Madagaskar"}
        },
        "latlng": [-20, 47],
        "demonym": "Malagasy",
        "landlocked": false,
        "borders": [],
        "area": 587041
    },
    {
        "name": {
            "common": "Maldives",
            "official": "Republic of the Maldives",
            "native": {
                "div": {
                    "official": "\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0783\u07a7\u0787\u07b0\u0796\u07ad\u078e\u07ac \u0796\u07aa\u0789\u07b0\u0780\u07ab\u0783\u07a8\u0787\u07b0\u0794\u07a7",
                    "common": "\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0783\u07a7\u0787\u07b0\u0796\u07ad\u078e\u07ac"
                }
            }
        },
        "tld": [".mv"],
        "cca2": "MV",
        "ccn3": "462",
        "cca3": "MDV",
        "cioc": "MDV",
        "currency": ["MVR"],
        "callingCode": ["960"],
        "capital": "Mal\u00e9",
        "altSpellings": ["MV", "Maldive Islands", "Republic of the Maldives", "Dhivehi Raajjeyge Jumhooriyya"],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "div": "Maldivian"
        },
        "translations": {
            "deu": {"official": "Republik Malediven", "common": "Malediven"},
            "fra": {"official": "R\u00e9publique des Maldives", "common": "Maldives"},
            "hrv": {"official": "Republika Maldivi", "common": "Maldivi"},
            "ita": {"official": "Repubblica delle Maldive", "common": "Maldive"},
            "jpn": {"official": "\u30e2\u30eb\u30c7\u30a3\u30d6\u5171\u548c\u56fd", "common": "\u30e2\u30eb\u30c7\u30a3\u30d6"},
            "nld": {"official": "Republiek van de Malediven", "common": "Maldiven"},
            "por": {"official": "Rep\u00fablica das Maldivas", "common": "Maldivas"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u043b\u044c\u0434\u0438\u0432\u044b", "common": "\u041c\u0430\u043b\u044c\u0434\u0438\u0432\u044b"},
            "spa": {"official": "Rep\u00fablica de las Maldivas", "common": "Maldivas"},
            "fin": {"official": "Malediivien tasavalta", "common": "Malediivit"}
        },
        "latlng": [3.25, 73],
        "demonym": "Maldivan",
        "landlocked": false,
        "borders": [],
        "area": 300
    },
    {
        "name": {
            "common": "Mexico",
            "official": "United Mexican States",
            "native": {
                "spa": {
                    "official": "Estados Unidos Mexicanos",
                    "common": "M\u00e9xico"
                }
            }
        },
        "tld": [".mx"],
        "cca2": "MX",
        "ccn3": "484",
        "cca3": "MEX",
        "cioc": "MEX",
        "currency": ["MXN"],
        "callingCode": ["52"],
        "capital": "Mexico City",
        "altSpellings": ["MX", "Mexicanos", "United Mexican States", "Estados Unidos Mexicanos"],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "Vereinigte Mexikanische Staaten", "common": "Mexiko"},
            "fra": {"official": "\u00c9tats-Unis mexicains", "common": "Mexique"},
            "hrv": {"official": "Sjedinjene Meksi\u010dke Dr\u017eave", "common": "Meksiko"},
            "ita": {"official": "Stati Uniti del Messico", "common": "Messico"},
            "jpn": {"official": "\u30e1\u30ad\u30b7\u30b3\u5408\u8846\u56fd", "common": "\u30e1\u30ad\u30b7\u30b3"},
            "nld": {"official": "Verenigde Mexicaanse Staten", "common": "Mexico"},
            "por": {"official": "Estados Unidos Mexicanos", "common": "M\u00e9xico"},
            "rus": {"official": "\u041c\u0435\u043a\u0441\u0438\u043a\u0430\u043d\u0441\u043a\u0438\u0445 \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0445 \u0428\u0442\u0430\u0442\u043e\u0432", "common": "\u041c\u0435\u043a\u0441\u0438\u043a\u0430"},
            "spa": {"official": "Estados Unidos Mexicanos", "common": "M\u00e9xico"},
            "fin": {"official": "Meksikon yhdysvallat", "common": "Meksiko"}
        },
        "latlng": [23, -102],
        "demonym": "Mexican",
        "landlocked": false,
        "borders": ["BLZ", "GTM", "USA"],
        "area": 1964375
    },
    {
        "name": {
            "common": "Marshall Islands",
            "official": "Republic of the Marshall Islands",
            "native": {
                "eng": {
                    "official": "Republic of the Marshall Islands",
                    "common": "Marshall Islands"
                },
                "mah": {
                    "official": "Republic of the Marshall Islands",
                    "common": "M\u0327aje\u013c"
                }
            }
        },
        "tld": [".mh"],
        "cca2": "MH",
        "ccn3": "584",
        "cca3": "MHL",
        "cioc": "MHL",
        "currency": ["USD"],
        "callingCode": ["692"],
        "capital": "Majuro",
        "altSpellings": ["MH", "Republic of the Marshall Islands", "Aolep\u0101n Aor\u014dkin M\u0327aje\u013c"],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "eng": "English",
            "mah": "Marshallese"
        },
        "translations": {
            "deu": {"official": "Republik der Marshall-Inseln", "common": "Marshallinseln"},
            "fra": {"official": "R\u00e9publique des \u00celes Marshall", "common": "\u00celes Marshall"},
            "hrv": {"official": "Republika Mar\u0161alovi Otoci", "common": "Mar\u0161alovi Otoci"},
            "ita": {"official": "Repubblica delle Isole Marshall", "common": "Isole Marshall"},
            "jpn": {"official": "\u30de\u30fc\u30b7\u30e3\u30eb\u8af8\u5cf6\u5171\u548c\u56fd", "common": "\u30de\u30fc\u30b7\u30e3\u30eb\u8af8\u5cf6"},
            "nld": {"official": "Republiek van de Marshall-eilanden", "common": "Marshalleilanden"},
            "por": {"official": "Rep\u00fablica das Ilhas Marshall", "common": "Ilhas Marshall"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u0440\u0448\u0430\u043b\u043b\u043e\u0432\u044b \u043e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u041c\u0430\u0440\u0448\u0430\u043b\u043b\u043e\u0432\u044b \u041e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "Rep\u00fablica de las Islas Marshall", "common": "Islas Marshall"},
            "fin": {"official": "Marshallinsaarten tasavalta", "common": "Marshallinsaaret"}
        },
        "latlng": [9, 168],
        "demonym": "Marshallese",
        "landlocked": false,
        "borders": [],
        "area": 181
    },
    {
        "name": {
            "common": "Macedonia",
            "official": "Republic of Macedonia",
            "native": {
                "mkd": {
                    "official": "\u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430",
                    "common": "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430"
                }
            }
        },
        "tld": [".mk"],
        "cca2": "MK",
        "ccn3": "807",
        "cca3": "MKD",
        "cioc": "MKD",
        "currency": ["MKD"],
        "callingCode": ["389"],
        "capital": "Skopje",
        "altSpellings": ["MK", "Macedonia, the Former Yugoslav Republic of", "Republic of Macedonia", "\u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "mkd": "Macedonian"
        },
        "translations": {
            "deu": {"official": "Republik Mazedonien", "common": "Mazedonien"},
            "fra": {"official": "R\u00e9publique de Mac\u00e9doine", "common": "Mac\u00e9doine"},
            "hrv": {"official": "Republika Makedonija", "common": "Makedonija"},
            "ita": {"official": "Repubblica di Macedonia", "common": "Macedonia"},
            "jpn": {"official": "\u30de\u30b1\u30c9\u30cb\u30a2\u5171\u548c\u56fd", "common": "\u30de\u30b1\u30c9\u30cb\u30a2\u65e7\u30e6\u30fc\u30b4\u30b9\u30e9\u30d3\u30a2\u5171\u548c\u56fd"},
            "nld": {"official": "Republic of Macedonia", "common": "Macedoni\u00eb"},
            "por": {"official": "Rep\u00fablica da Maced\u00f3nia", "common": "Maced\u00f3nia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u044f", "common": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Macedonia", "common": "Macedonia"},
            "fin": {"official": "Makedonian tasavalta", "common": "Makedonia"}
        },
        "latlng": [41.83333333, 22],
        "demonym": "Macedonian",
        "landlocked": true,
        "borders": ["ALB", "BGR", "GRC", "KOS", "SRB"],
        "area": 25713
    },
    {
        "name": {
            "common": "Mali",
            "official": "Republic of Mali",
            "native": {
                "fra": {
                    "official": "R\u00e9publique du Mali",
                    "common": "Mali"
                }
            }
        },
        "tld": [".ml"],
        "cca2": "ML",
        "ccn3": "466",
        "cca3": "MLI",
        "cioc": "MLI",
        "currency": ["XOF"],
        "callingCode": ["223"],
        "capital": "Bamako",
        "altSpellings": ["ML", "Republic of Mali", "R\u00e9publique du Mali"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Republik Mali", "common": "Mali"},
            "fra": {"official": "R\u00e9publique du Mali", "common": "Mali"},
            "hrv": {"official": "Republika Mali", "common": "Mali"},
            "ita": {"official": "Repubblica del Mali", "common": "Mali"},
            "jpn": {"official": "\u30de\u30ea\u5171\u548c\u56fd", "common": "\u30de\u30ea"},
            "nld": {"official": "Republiek Mali", "common": "Mali"},
            "por": {"official": "Rep\u00fablica do Mali", "common": "Mali"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u043b\u0438", "common": "\u041c\u0430\u043b\u0438"},
            "spa": {"official": "Rep\u00fablica de Mal\u00ed", "common": "Mali"},
            "fin": {"official": "Malin tasavalta", "common": "Mali"}
        },
        "latlng": [17, -4],
        "demonym": "Malian",
        "landlocked": true,
        "borders": ["DZA", "BFA", "GIN", "CIV", "MRT", "NER", "SEN"],
        "area": 1240192
    },
    {
        "name": {
            "common": "Malta",
            "official": "Republic of Malta",
            "native": {
                "eng": {
                    "official": "Republic of Malta",
                    "common": "Malta"
                },
                "mlt": {
                    "official": "Repubblika ta ' Malta",
                    "common": "Malta"
                }
            }
        },
        "tld": [".mt"],
        "cca2": "MT",
        "ccn3": "470",
        "cca3": "MLT",
        "cioc": "MLT",
        "currency": ["EUR"],
        "callingCode": ["356"],
        "capital": "Valletta",
        "altSpellings": ["MT", "Republic of Malta", "Repubblika ta' Malta"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "eng": "English",
            "mlt": "Maltese"
        },
        "translations": {
            "deu": {"official": "Republik Malta", "common": "Malta"},
            "fra": {"official": "R\u00e9publique de Malte", "common": "Malte"},
            "hrv": {"official": "Republika Malta", "common": "Malta"},
            "ita": {"official": "Repubblica di Malta", "common": "Malta"},
            "jpn": {"official": "\u30de\u30eb\u30bf\u5171\u548c\u56fd", "common": "\u30de\u30eb\u30bf"},
            "nld": {"official": "Republiek Malta", "common": "Malta"},
            "por": {"official": "Rep\u00fablica de Malta", "common": "Malta"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u043b\u044c\u0442\u0430", "common": "\u041c\u0430\u043b\u044c\u0442\u0430"},
            "spa": {"official": "Rep\u00fablica de Malta", "common": "Malta"},
            "fin": {"official": "Maltan tasavalta", "common": "Malta"}
        },
        "latlng": [35.83333333, 14.58333333],
        "demonym": "Maltese",
        "landlocked": false,
        "borders": [],
        "area": 316
    },
    {
        "name": {
            "common": "Myanmar",
            "official": "Republic of the Union of Myanmar",
            "native": {
                "mya": {
                    "official": "\u1015\u103c\u100a\u103a\u1011\u1031\u102c\u1004\u103a\u1005\u102f \u101e\u1019\u1039\u1019\u1010 \u1019\u103c\u1014\u103a\u1019\u102c\u1014\u102d\u102f\u1004\u103a\u1004\u1036\u1010\u1031\u102c\u103a",
                    "common": "\u1019\u103c\u1014\u103a\u1019\u102c"
                }
            }
        },
        "tld": [".mm"],
        "cca2": "MM",
        "ccn3": "104",
        "cca3": "MMR",
        "cioc": "MYA",
        "currency": ["MMK"],
        "callingCode": ["95"],
        "capital": "Naypyidaw",
        "altSpellings": ["MM", "Burma", "Republic of the Union of Myanmar", "Pyidaunzu Thanm\u0103da My\u0103ma Nainngandaw"],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "mya": "Burmese"
        },
        "translations": {
            "deu": {"official": "Republik der Union von Myanmar", "common": "Myanmar"},
            "fra": {"official": "R\u00e9publique de l'Union du Myanmar", "common": "Myanmar"},
            "hrv": {"official": "Republika Unije Mijanmar", "common": "Mijanmar"},
            "ita": {"official": "Repubblica dell'Unione di Myanmar", "common": "Birmania"},
            "jpn": {"official": "\u30df\u30e3\u30f3\u30de\u30fc\u9023\u90a6\u5171\u548c\u56fd", "common": "\u30df\u30e3\u30f3\u30de\u30fc"},
            "nld": {"official": "Republiek van de Unie van Myanmar", "common": "Myanmar"},
            "por": {"official": "Rep\u00fablica da Uni\u00e3o de Myanmar", "common": "Myanmar"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u043e\u044e\u0437\u0430 \u041c\u044c\u044f\u043d\u043c\u0430", "common": "\u041c\u044c\u044f\u043d\u043c\u0430"},
            "spa": {"official": "Rep\u00fablica de la Uni\u00f3n de Myanmar", "common": "Myanmar"},
            "fin": {"official": "Myanmarin liiton tasavalta", "common": "Myanmar"}
        },
        "latlng": [22, 98],
        "demonym": "Bamar",
        "landlocked": false,
        "borders": ["BGD", "CHN", "IND", "LAO", "THA"],
        "area": 676578
    },
    {
        "name": {
            "common": "Montenegro",
            "official": "Montenegro",
            "native": {
                "srp": {
                    "official": "\u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430",
                    "common": "\u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430"
                }
            }
        },
        "tld": [".me"],
        "cca2": "ME",
        "ccn3": "499",
        "cca3": "MNE",
        "cioc": "MNE",
        "currency": ["EUR"],
        "callingCode": ["382"],
        "capital": "Podgorica",
        "altSpellings": ["ME", "Crna Gora"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "srp": "Montenegrin"
        },
        "translations": {
            "deu": {"official": "Montenegro", "common": "Montenegro"},
            "fra": {"official": "Mont\u00e9n\u00e9gro", "common": "Mont\u00e9n\u00e9gro"},
            "hrv": {"official": "Crna Gora", "common": "Crna Gora"},
            "ita": {"official": "Montenegro", "common": "Montenegro"},
            "jpn": {"official": "\u30e2\u30f3\u30c6\u30cd\u30b0\u30ed", "common": "\u30e2\u30f3\u30c6\u30cd\u30b0\u30ed"},
            "nld": {"official": "Montenegro", "common": "Montenegro"},
            "por": {"official": "Montenegro", "common": "Montenegro"},
            "rus": {"official": "\u0427\u0435\u0440\u043d\u043e\u0433\u043e\u0440\u0438\u044f", "common": "\u0427\u0435\u0440\u043d\u043e\u0433\u043e\u0440\u0438\u044f"},
            "spa": {"official": "Montenegro", "common": "Montenegro"},
            "fin": {"official": "Montenegro", "common": "Montenegro"}
        },
        "latlng": [42.5, 19.3],
        "demonym": "Montenegrin",
        "landlocked": false,
        "borders": ["ALB", "BIH", "HRV", "KOS", "SRB"],
        "area": 13812
    },
    {
        "name": {
            "common": "Mongolia",
            "official": "Mongolia",
            "native": {
                "mon": {
                    "official": "\u041c\u043e\u043d\u0433\u043e\u043b \u0443\u043b\u0441",
                    "common": "\u041c\u043e\u043d\u0433\u043e\u043b \u0443\u043b\u0441"
                }
            }
        },
        "tld": [".mn"],
        "cca2": "MN",
        "ccn3": "496",
        "cca3": "MNG",
        "cioc": "MGL",
        "currency": ["MNT"],
        "callingCode": ["976"],
        "capital": "Ulan Bator",
        "altSpellings": ["MN"],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "mon": "Mongolian"
        },
        "translations": {
            "deu": {"official": "Mongolei", "common": "Mongolei"},
            "fra": {"official": "Mongolie", "common": "Mongolie"},
            "hrv": {"official": "Mongolija", "common": "Mongolija"},
            "ita": {"official": "Mongolia", "common": "Mongolia"},
            "jpn": {"official": "\u30e2\u30f3\u30b4\u30eb", "common": "\u30e2\u30f3\u30b4\u30eb"},
            "nld": {"official": "Mongoli\u00eb", "common": "Mongoli\u00eb"},
            "por": {"official": "Mong\u00f3lia", "common": "Mong\u00f3lia"},
            "rus": {"official": "\u041c\u043e\u043d\u0433\u043e\u043b\u0438\u044f", "common": "\u041c\u043e\u043d\u0433\u043e\u043b\u0438\u044f"},
            "spa": {"official": "Mongolia", "common": "Mongolia"},
            "fin": {"official": "Mongolian tasavalta", "common": "Mongolia"}
        },
        "latlng": [46, 105],
        "demonym": "Mongolian",
        "landlocked": true,
        "borders": ["CHN", "RUS"],
        "area": 1564110
    },
    {
        "name": {
            "common": "Northern Mariana Islands",
            "official": "Commonwealth of the Northern Mariana Islands",
            "native": {
                "cal": {
                    "official": "Commonwealth of the Northern Mariana Islands",
                    "common": "Northern Mariana Islands"
                },
                "cha": {
                    "official": "Sankattan Siha Na Islas Mari\u00e5nas",
                    "common": "Na Islas Mari\u00e5nas"
                },
                "eng": {
                    "official": "Commonwealth of the Northern Mariana Islands",
                    "common": "Northern Mariana Islands"
                }
            }
        },
        "tld": [".mp"],
        "cca2": "MP",
        "ccn3": "580",
        "cca3": "MNP",
        "cioc": "",
        "currency": ["USD"],
        "callingCode": ["1670"],
        "capital": "Saipan",
        "altSpellings": ["MP", "Commonwealth of the Northern Mariana Islands", "Sankattan Siha Na Islas Mari\u00e5nas"],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "cal": "Carolinian",
            "cha": "Chamorro",
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Commonwealth der N\u00f6rdlichen Marianen", "common": "N\u00f6rdliche Marianen"},
            "fra": {"official": "Commonwealth des \u00eeles Mariannes du Nord", "common": "\u00celes Mariannes du Nord"},
            "hrv": {"official": "Zajednica je Sjeverni Marijanski otoci", "common": "Sjevernomarijanski otoci"},
            "ita": {"official": "Commonwealth delle Isole Marianne Settentrionali", "common": "Isole Marianne Settentrionali"},
            "jpn": {"official": "\u5317\u30de\u30ea\u30a2\u30ca\u8af8\u5cf6", "common": "\u5317\u30de\u30ea\u30a2\u30ca\u8af8\u5cf6"},
            "nld": {"official": "Commonwealth van de Noordelijke Marianen", "common": "Noordelijke Marianeneilanden"},
            "por": {"official": "Comunidade das Ilhas Marianas do Norte", "common": "Marianas Setentrionais"},
            "rus": {"official": "\u0421\u043e\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043e \u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0445 \u041c\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0445 \u043e\u0441\u0442\u0440\u043e\u0432\u043e\u0432", "common": "\u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u041c\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "Mancomunidad de las Islas Marianas del Norte", "common": "Islas Marianas del Norte"},
            "fin": {"official": "Pohjois-Mariaanit", "common": "Pohjois-Mariaanit"}
        },
        "latlng": [15.2, 145.75],
        "demonym": "American",
        "landlocked": false,
        "borders": [],
        "area": 464
    },
    {
        "name": {
            "common": "Mozambique",
            "official": "Republic of Mozambique",
            "native": {
                "por": {
                    "official": "Rep\u00fablica de Mo\u00e7ambique",
                    "common": "Mo\u00e7ambique"
                }
            }
        },
        "tld": [".mz"],
        "cca2": "MZ",
        "ccn3": "508",
        "cca3": "MOZ",
        "cioc": "MOZ",
        "currency": ["MZN"],
        "callingCode": ["258"],
        "capital": "Maputo",
        "altSpellings": ["MZ", "Republic of Mozambique", "Rep\u00fablica de Mo\u00e7ambique"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "deu": {"official": "Republik Mosambik", "common": "Mosambik"},
            "fra": {"official": "R\u00e9publique du Mozambique", "common": "Mozambique"},
            "hrv": {"official": "Republika Mozambiku", "common": "Mozambik"},
            "ita": {"official": "Repubblica del Mozambico", "common": "Mozambico"},
            "jpn": {"official": "\u30e2\u30b6\u30f3\u30d3\u30fc\u30af\u5171\u548c\u56fd", "common": "\u30e2\u30b6\u30f3\u30d3\u30fc\u30af"},
            "nld": {"official": "Republiek Mozambique", "common": "Mozambique"},
            "por": {"official": "Rep\u00fablica de Mo\u00e7ambique", "common": "Mo\u00e7ambique"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u043e\u0437\u0430\u043c\u0431\u0438\u043a", "common": "\u041c\u043e\u0437\u0430\u043c\u0431\u0438\u043a"},
            "spa": {"official": "Rep\u00fablica de Mozambique", "common": "Mozambique"},
            "fin": {"official": "Mosambikin tasavalta", "common": "Mosambik"}
        },
        "latlng": [-18.25, 35],
        "demonym": "Mozambican",
        "landlocked": false,
        "borders": ["MWI", "ZAF", "SWZ", "TZA", "ZMB", "ZWE"],
        "area": 801590
    },
    {
        "name": {
            "common": "Mauritania",
            "official": "Islamic Republic of Mauritania",
            "native": {
                "ara": {
                    "official": "\u0627\u0644\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064a\u0629 \u0627\u0644\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0629",
                    "common": "\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627"
                }
            }
        },
        "tld": [".mr"],
        "cca2": "MR",
        "ccn3": "478",
        "cca3": "MRT",
        "cioc": "MTN",
        "currency": ["MRO"],
        "callingCode": ["222"],
        "capital": "Nouakchott",
        "altSpellings": ["MR", "Islamic Republic of Mauritania", "al-Jumh\u016briyyah al-\u02beIsl\u0101miyyah al-M\u016br\u012bt\u0101niyyah"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "deu": {"official": "Islamische Republik Mauretanien", "common": "Mauretanien"},
            "fra": {"official": "R\u00e9publique islamique de Mauritanie", "common": "Mauritanie"},
            "hrv": {"official": "Islamska Republika Mauritanija", "common": "Mauritanija"},
            "ita": {"official": "Repubblica islamica di Mauritania", "common": "Mauritania"},
            "jpn": {"official": "\u30e2\u30fc\u30ea\u30bf\u30cb\u30a2\u00b7\u30a4\u30b9\u30e9\u30e0\u5171\u548c\u56fd", "common": "\u30e2\u30fc\u30ea\u30bf\u30cb\u30a2"},
            "nld": {"official": "Islamitische Republiek Mauritani\u00eb", "common": "Mauritani\u00eb"},
            "por": {"official": "Rep\u00fablica Isl\u00e2mica da Maurit\u00e2nia", "common": "Maurit\u00e2nia"},
            "rus": {"official": "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u0432\u0440\u0438\u0442\u0430\u043d\u0438\u044f", "common": "\u041c\u0430\u0432\u0440\u0438\u0442\u0430\u043d\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica Isl\u00e1mica de Mauritania", "common": "Mauritania"},
            "fin": {"official": "Mauritanian islamilainen tasavalta", "common": "Mauritania"}
        },
        "latlng": [20, -12],
        "demonym": "Mauritanian",
        "landlocked": false,
        "borders": ["DZA", "MLI", "SEN", "ESH"],
        "area": 1030700
    },
    {
        "name": {
            "common": "Montserrat",
            "official": "Montserrat",
            "native": {
                "eng": {
                    "official": "Montserrat",
                    "common": "Montserrat"
                }
            }
        },
        "tld": [".ms"],
        "cca2": "MS",
        "ccn3": "500",
        "cca3": "MSR",
        "cioc": "",
        "currency": ["XCD"],
        "callingCode": ["1664"],
        "capital": "Plymouth",
        "altSpellings": ["MS"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Montserrat", "common": "Montserrat"},
            "fra": {"official": "Montserrat", "common": "Montserrat"},
            "hrv": {"official": "Montserrat", "common": "Montserrat"},
            "ita": {"official": "Montserrat", "common": "Montserrat"},
            "jpn": {"official": "\u30e2\u30f3\u30c8\u30bb\u30e9\u30c8", "common": "\u30e2\u30f3\u30c8\u30bb\u30e9\u30c8"},
            "nld": {"official": "Montserrat", "common": "Montserrat"},
            "por": {"official": "Montserrat", "common": "Montserrat"},
            "rus": {"official": "\u041c\u043e\u043d\u0442\u0441\u0435\u0440\u0440\u0430\u0442", "common": "\u041c\u043e\u043d\u0442\u0441\u0435\u0440\u0440\u0430\u0442"},
            "spa": {"official": "Montserrat", "common": "Montserrat"},
            "fin": {"official": "Montserrat", "common": "Montserrat"}
        },
        "latlng": [16.75, -62.2],
        "demonym": "Montserratian",
        "landlocked": false,
        "borders": [],
        "area": 102
    },
    {
        "name": {
            "common": "Martinique",
            "official": "Martinique",
            "native": {
                "fra": {
                    "official": "Martinique",
                    "common": "Martinique"
                }
            }
        },
        "tld": [".mq"],
        "cca2": "MQ",
        "ccn3": "474",
        "cca3": "MTQ",
        "cioc": "",
        "currency": ["EUR"],
        "callingCode": ["596"],
        "capital": "Fort-de-France",
        "altSpellings": ["MQ"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Martinique", "common": "Martinique"},
            "fra": {"official": "Martinique", "common": "Martinique"},
            "hrv": {"official": "Martinique", "common": "Martinique"},
            "ita": {"official": "Martinique", "common": "Martinica"},
            "jpn": {"official": "\u30de\u30eb\u30c6\u30a3\u30cb\u30fc\u30af\u5cf6", "common": "\u30de\u30eb\u30c6\u30a3\u30cb\u30fc\u30af"},
            "nld": {"official": "Martinique", "common": "Martinique"},
            "por": {"official": "Martinique", "common": "Martinica"},
            "rus": {"official": "\u041c\u0430\u0440\u0442\u0438\u043d\u0438\u043a\u0430", "common": "\u041c\u0430\u0440\u0442\u0438\u043d\u0438\u043a\u0430"},
            "spa": {"official": "Martinica", "common": "Martinica"},
            "fin": {"official": "Martinique", "common": "Martinique"}
        },
        "latlng": [14.666667, -61],
        "demonym": "French",
        "landlocked": false,
        "borders": [],
        "area": 1128
    },
    {
        "name": {
            "common": "Mauritius",
            "official": "Republic of Mauritius",
            "native": {
                "eng": {
                    "official": "Republic of Mauritius",
                    "common": "Mauritius"
                },
                "fra": {
                    "official": "R\u00e9publique de Maurice",
                    "common": "Maurice"
                },
                "mfe": {
                    "official": "Republik Moris",
                    "common": "Moris"
                }
            }
        },
        "tld": [".mu"],
        "cca2": "MU",
        "ccn3": "480",
        "cca3": "MUS",
        "cioc": "MRI",
        "currency": ["MUR"],
        "callingCode": ["230"],
        "capital": "Port Louis",
        "altSpellings": ["MU", "Republic of Mauritius", "R\u00e9publique de Maurice"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English",
            "fra": "French",
            "mfe": "Mauritian Creole"
        },
        "translations": {
            "deu": {"official": "Republik Mauritius", "common": "Mauritius"},
            "fra": {"official": "R\u00e9publique de Maurice", "common": "\u00cele Maurice"},
            "hrv": {"official": "Republika Mauricijus", "common": "Mauricijus"},
            "ita": {"official": "Repubblica di Mauritius", "common": "Mauritius"},
            "jpn": {"official": "\u30e2\u30fc\u30ea\u30b7\u30e3\u30b9\u5171\u548c\u56fd", "common": "\u30e2\u30fc\u30ea\u30b7\u30e3\u30b9"},
            "nld": {"official": "Republiek Mauritius", "common": "Mauritius"},
            "por": {"official": "Rep\u00fablica das Maur\u00edcias", "common": "Maur\u00edcio"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u0432\u0440\u0438\u043a\u0438\u0439", "common": "\u041c\u0430\u0432\u0440\u0438\u043a\u0438\u0439"},
            "spa": {"official": "Rep\u00fablica de Mauricio", "common": "Mauricio"},
            "fin": {"official": "Mauritiuksen tasavalta", "common": "Mauritius"}
        },
        "latlng": [-20.28333333, 57.55],
        "demonym": "Mauritian",
        "landlocked": false,
        "borders": [],
        "area": 2040
    },
    {
        "name": {
            "common": "Malawi",
            "official": "Republic of Malawi",
            "native": {
                "eng": {
                    "official": "Republic of Malawi",
                    "common": "Malawi"
                },
                "nya": {
                    "official": "Chalo cha Malawi, Dziko la Mala\u0175i",
                    "common": "Mala\u0175i"
                }
            }
        },
        "tld": [".mw"],
        "cca2": "MW",
        "ccn3": "454",
        "cca3": "MWI",
        "cioc": "MAW",
        "currency": ["MWK"],
        "callingCode": ["265"],
        "capital": "Lilongwe",
        "altSpellings": ["MW", "Republic of Malawi"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English",
            "nya": "Chewa"
        },
        "translations": {
            "deu": {"official": "Republik Malawi", "common": "Malawi"},
            "fra": {"official": "R\u00e9publique du Malawi", "common": "Malawi"},
            "hrv": {"official": "Republika Malavi", "common": "Malavi"},
            "ita": {"official": "Repubblica del Malawi", "common": "Malawi"},
            "jpn": {"official": "\u30de\u30e9\u30a6\u30a4\u5171\u548c\u56fd", "common": "\u30de\u30e9\u30a6\u30a4"},
            "nld": {"official": "Republiek Malawi", "common": "Malawi"},
            "por": {"official": "Rep\u00fablica do Malawi", "common": "Malawi"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u043b\u0430\u0432\u0438", "common": "\u041c\u0430\u043b\u0430\u0432\u0438"},
            "spa": {"official": "Rep\u00fablica de Malawi", "common": "Malawi"},
            "fin": {"official": "Malawin tasavalta", "common": "Malawi"}
        },
        "latlng": [-13.5, 34],
        "demonym": "Malawian",
        "landlocked": true,
        "borders": ["MOZ", "TZA", "ZMB"],
        "area": 118484
    },
    {
        "name": {
            "common": "Malaysia",
            "official": "Malaysia",
            "native": {
                "eng": {
                    "official": "Malaysia",
                    "common": "Malaysia"
                },
                "msa": {
                    "official": "\u0645\u0644\u064a\u0633\u064a\u0627",
                    "common": "\u0645\u0644\u064a\u0633\u064a\u0627"
                }
            }
        },
        "tld": [".my"],
        "cca2": "MY",
        "ccn3": "458",
        "cca3": "MYS",
        "cioc": "MAS",
        "currency": ["MYR"],
        "callingCode": ["60"],
        "capital": "Kuala Lumpur",
        "altSpellings": ["MY"],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "eng": "English",
            "msa": "Malay"
        },
        "translations": {
            "deu": {"official": "Malaysia", "common": "Malaysia"},
            "fra": {"official": "Malaisie", "common": "Malaisie"},
            "hrv": {"official": "Malezija", "common": "Malezija"},
            "ita": {"official": "Malaysia", "common": "Malesia"},
            "jpn": {"official": "\u30de\u30ec\u30fc\u30b7\u30a2", "common": "\u30de\u30ec\u30fc\u30b7\u30a2"},
            "nld": {"official": "Maleisi\u00eb", "common": "Maleisi\u00eb"},
            "por": {"official": "Mal\u00e1sia", "common": "Mal\u00e1sia"},
            "rus": {"official": "\u041c\u0430\u043b\u0430\u0439\u0437\u0438\u044f", "common": "\u041c\u0430\u043b\u0430\u0439\u0437\u0438\u044f"},
            "spa": {"official": "Malasia", "common": "Malasia"},
            "fin": {"official": "Malesia", "common": "Malesia"}
        },
        "latlng": [2.5, 112.5],
        "demonym": "Malaysian",
        "landlocked": false,
        "borders": ["BRN", "IDN", "THA"],
        "area": 330803
    },
    {
        "name": {
            "common": "Mayotte",
            "official": "Department of Mayotte",
            "native": {
                "fra": {
                    "official": "D\u00e9partement de Mayotte",
                    "common": "Mayotte"
                }
            }
        },
        "tld": [".yt"],
        "cca2": "YT",
        "ccn3": "175",
        "cca3": "MYT",
        "cioc": "",
        "currency": ["EUR"],
        "callingCode": ["262"],
        "capital": "Mamoudzou",
        "altSpellings": ["YT", "Department of Mayotte", "D\u00e9partement de Mayotte"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "\u00dcbersee-D\u00e9partement Mayotte", "common": "Mayotte"},
            "fra": {"official": "D\u00e9partement de Mayotte", "common": "Mayotte"},
            "hrv": {"official": "Odjel Mayotte", "common": "Mayotte"},
            "ita": {"official": "Dipartimento di Mayotte", "common": "Mayotte"},
            "jpn": {"official": "\u30de\u30e8\u30c3\u30c8\u79d1", "common": "\u30de\u30e8\u30c3\u30c8"},
            "nld": {"official": "Afdeling Mayotte", "common": "Mayotte"},
            "por": {"official": "Departamento de Mayotte", "common": "Mayotte"},
            "rus": {"official": "\u0414\u0435\u043f\u0430\u0440\u0442\u0430\u043c\u0435\u043d\u0442 \u041c\u0430\u0439\u043e\u0442\u0442\u0430", "common": "\u041c\u0430\u0439\u043e\u0442\u0442\u0430"},
            "spa": {"official": "Departamento de Mayotte", "common": "Mayotte"},
            "fin": {"official": "Mayotte", "common": "Mayotte"}
        },
        "latlng": [-12.83333333, 45.16666666],
        "demonym": "Mahoran",
        "landlocked": false,
        "borders": [],
        "area": 374
    },
    {
        "name": {
            "common": "Namibia",
            "official": "Republic of Namibia",
            "native": {
                "afr": {
                    "official": "Republiek van Namibi\u00eb",
                    "common": "Namibi\u00eb"
                },
                "deu": {
                    "official": "Republik Namibia",
                    "common": "Namibia"
                },
                "eng": {
                    "official": "Republic of Namibia",
                    "common": "Namibia"
                },
                "her": {
                    "official": "Republic of Namibia",
                    "common": "Namibia"
                },
                "hgm": {
                    "official": "Republic of Namibia",
                    "common": "Namibia"
                },
                "kwn": {
                    "official": "Republic of Namibia",
                    "common": "Namibia"
                },
                "loz": {
                    "official": "Republic of Namibia",
                    "common": "Namibia"
                },
                "ndo": {
                    "official": "Republic of Namibia",
                    "common": "Namibia"
                },
                "tsn": {
                    "official": "Lefatshe la Namibia",
                    "common": "Namibia"
                }
            }
        },
        "tld": [".na"],
        "cca2": "NA",
        "ccn3": "516",
        "cca3": "NAM",
        "cioc": "NAM",
        "currency": ["NAD", "ZAR"],
        "callingCode": ["264"],
        "capital": "Windhoek",
        "altSpellings": ["NA", "Namibi\u00eb", "Republic of Namibia"],
        "region": "Africa",
        "subregion": "Southern Africa",
        "languages": {
            "afr": "Afrikaans",
            "deu": "German",
            "eng": "English",
            "her": "Herero",
            "hgm": "Khoekhoe",
            "kwn": "Kwangali",
            "loz": "Lozi",
            "ndo": "Ndonga",
            "tsn": "Tswana"
        },
        "translations": {
            "deu": {"official": "Republik Namibia", "common": "Namibia"},
            "fra": {"official": "R\u00e9publique de Namibie", "common": "Namibie"},
            "hrv": {"official": "Republika Namibija", "common": "Namibija"},
            "ita": {"official": "Repubblica di Namibia", "common": "Namibia"},
            "jpn": {"official": "\u30ca\u30df\u30d3\u30a2\u5171\u548c\u56fd", "common": "\u30ca\u30df\u30d3\u30a2"},
            "nld": {"official": "Republiek Namibi\u00eb", "common": "Namibi\u00eb"},
            "por": {"official": "Rep\u00fablica da Nam\u00edbia", "common": "Nam\u00edbia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041d\u0430\u043c\u0438\u0431\u0438\u044f", "common": "\u041d\u0430\u043c\u0438\u0431\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Namibia", "common": "Namibia"},
            "fin": {"official": "Namibian tasavalta", "common": "Namibia"}
        },
        "latlng": [-22, 17],
        "demonym": "Namibian",
        "landlocked": false,
        "borders": ["AGO", "BWA", "ZAF", "ZMB"],
        "area": 825615
    },
    {
        "name": {
            "common": "New Caledonia",
            "official": "New Caledonia",
            "native": {
                "fra": {
                    "official": "Nouvelle-Cal\u00e9donie",
                    "common": "Nouvelle-Cal\u00e9donie"
                }
            }
        },
        "tld": [".nc"],
        "cca2": "NC",
        "ccn3": "540",
        "cca3": "NCL",
        "cioc": "",
        "currency": ["XPF"],
        "callingCode": ["687"],
        "capital": "Noum\u00e9a",
        "altSpellings": ["NC"],
        "region": "Oceania",
        "subregion": "Melanesia",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Neukaledonien", "common": "Neukaledonien"},
            "fra": {"official": "Nouvelle-Cal\u00e9donie", "common": "Nouvelle-Cal\u00e9donie"},
            "hrv": {"official": "Nova Kaledonija", "common": "Nova Kaledonija"},
            "ita": {"official": "Nuova Caledonia", "common": "Nuova Caledonia"},
            "jpn": {"official": "\u30cb\u30e5\u30fc\u30ab\u30ec\u30c9\u30cb\u30a2", "common": "\u30cb\u30e5\u30fc\u30ab\u30ec\u30c9\u30cb\u30a2"},
            "nld": {"official": "nieuw -Caledoni\u00eb", "common": "Nieuw-Caledoni\u00eb"},
            "por": {"official": "New Caledonia", "common": "Nova Caled\u00f3nia"},
            "rus": {"official": "\u041d\u043e\u0432\u0430\u044f \u041a\u0430\u043b\u0435\u0434\u043e\u043d\u0438\u044f", "common": "\u041d\u043e\u0432\u0430\u044f \u041a\u0430\u043b\u0435\u0434\u043e\u043d\u0438\u044f"},
            "spa": {"official": "nueva Caledonia", "common": "Nueva Caledonia"},
            "fin": {"official": "Uusi-Kaledonia", "common": "Uusi-Kaledonia"}
        },
        "latlng": [-21.5, 165.5],
        "demonym": "New Caledonian",
        "landlocked": false,
        "borders": [],
        "area": 18575
    },
    {
        "name": {
            "common": "Niger",
            "official": "Republic of Niger",
            "native": {
                "fra": {
                    "official": "R\u00e9publique du Niger",
                    "common": "Niger"
                }
            }
        },
        "tld": [".ne"],
        "cca2": "NE",
        "ccn3": "562",
        "cca3": "NER",
        "cioc": "NIG",
        "currency": ["XOF"],
        "callingCode": ["227"],
        "capital": "Niamey",
        "altSpellings": ["NE", "Nijar"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Republik Niger", "common": "Niger"},
            "fra": {"official": "R\u00e9publique du Niger", "common": "Niger"},
            "hrv": {"official": "Republika Niger", "common": "Niger"},
            "ita": {"official": "Repubblica del Niger", "common": "Niger"},
            "jpn": {"official": "\u30cb\u30b8\u30a7\u30fc\u30eb\u5171\u548c\u56fd", "common": "\u30cb\u30b8\u30a7\u30fc\u30eb"},
            "nld": {"official": "Republiek Niger", "common": "Niger"},
            "por": {"official": "Rep\u00fablica do N\u00edger", "common": "N\u00edger"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041d\u0438\u0433\u0435\u0440", "common": "\u041d\u0438\u0433\u0435\u0440"},
            "spa": {"official": "Rep\u00fablica de N\u00edger", "common": "N\u00edger"},
            "fin": {"official": "Nigerin tasavalta", "common": "Niger"}
        },
        "latlng": [16, 8],
        "demonym": "Nigerien",
        "landlocked": true,
        "borders": ["DZA", "BEN", "BFA", "TCD", "LBY", "MLI", "NGA"],
        "area": 1267000
    },
    {
        "name": {
            "common": "Norfolk Island",
            "official": "Territory of Norfolk Island",
            "native": {
                "eng": {
                    "official": "Territory of Norfolk Island",
                    "common": "Norfolk Island"
                },
                "pih": {
                    "official": "Teratri of Norf'k Ailen",
                    "common": "Norf'k Ailen"
                }
            }
        },
        "tld": [".nf"],
        "cca2": "NF",
        "ccn3": "574",
        "cca3": "NFK",
        "cioc": "",
        "currency": ["AUD"],
        "callingCode": ["672"],
        "capital": "Kingston",
        "altSpellings": ["NF", "Territory of Norfolk Island", "Teratri of Norf'k Ailen"],
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "languages": {
            "eng": "English",
            "pih": "Norfuk"
        },
        "translations": {
            "deu": {"official": "Gebiet der Norfolk-Insel", "common": "Norfolkinsel"},
            "fra": {"official": "Territoire de l'\u00eele Norfolk", "common": "\u00cele de Norfolk"},
            "hrv": {"official": "Teritorij Norfolk Island", "common": "Otok Norfolk"},
            "ita": {"official": "Territorio di Norfolk Island", "common": "Isola Norfolk"},
            "jpn": {"official": "\u30ce\u30fc\u30d5\u30a9\u30fc\u30af\u5cf6\u306e\u9818\u571f", "common": "\u30ce\u30fc\u30d5\u30a9\u30fc\u30af\u5cf6"},
            "nld": {"official": "Grondgebied van Norfolk Island", "common": "Norfolkeiland"},
            "por": {"official": "Territ\u00f3rio da Ilha Norfolk", "common": "Ilha Norfolk"},
            "rus": {"official": "\u0422\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044f \u043e\u0441\u0442\u0440\u043e\u0432\u0430 \u041d\u043e\u0440\u0444\u043e\u043b\u043a", "common": "\u041d\u043e\u0440\u0444\u043e\u043b\u043a"},
            "spa": {"official": "Territorio de la Isla Norfolk", "common": "Isla de Norfolk"},
            "fin": {"official": "Norfolkinsaaren territorio", "common": "Norfolkinsaari"}
        },
        "latlng": [-29.03333333, 167.95],
        "demonym": "Norfolk Islander",
        "landlocked": false,
        "borders": [],
        "area": 36
    },
    {
        "name": {
            "common": "Nigeria",
            "official": "Federal Republic of Nigeria",
            "native": {
                "eng": {
                    "official": "Federal Republic of Nigeria",
                    "common": "Nigeria"
                }
            }
        },
        "tld": [".ng"],
        "cca2": "NG",
        "ccn3": "566",
        "cca3": "NGA",
        "cioc": "NGR",
        "currency": ["NGN"],
        "callingCode": ["234"],
        "capital": "Abuja",
        "altSpellings": ["NG", "Nijeriya", "Na\u00edj\u00edr\u00ed\u00e0", "Federal Republic of Nigeria"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Bundesrepublik Nigeria", "common": "Nigeria"},
            "fra": {"official": "R\u00e9publique f\u00e9d\u00e9rale du Nigeria", "common": "Nig\u00e9ria"},
            "hrv": {"official": "Savezna Republika Nigerija", "common": "Nigerija"},
            "ita": {"official": "Repubblica federale di Nigeria", "common": "Nigeria"},
            "jpn": {"official": "\u30ca\u30a4\u30b8\u30a7\u30ea\u30a2\u9023\u90a6\u5171\u548c\u56fd", "common": "\u30ca\u30a4\u30b8\u30a7\u30ea\u30a2"},
            "nld": {"official": "Federale Republiek Nigeria", "common": "Nigeria"},
            "por": {"official": "Rep\u00fablica Federal da Nig\u00e9ria", "common": "Nig\u00e9ria"},
            "rus": {"official": "\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041d\u0438\u0433\u0435\u0440\u0438\u044f", "common": "\u041d\u0438\u0433\u0435\u0440\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica Federal de Nigeria", "common": "Nigeria"},
            "fin": {"official": "Nigerian liittotasavalta", "common": "Nigeria"}
        },
        "latlng": [10, 8],
        "demonym": "Nigerian",
        "landlocked": false,
        "borders": ["BEN", "CMR", "TCD", "NER"],
        "area": 923768
    },
    {
        "name": {
            "common": "Nicaragua",
            "official": "Republic of Nicaragua",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica de Nicaragua",
                    "common": "Nicaragua"
                }
            }
        },
        "tld": [".ni"],
        "cca2": "NI",
        "ccn3": "558",
        "cca3": "NIC",
        "cioc": "NCA",
        "currency": ["NIO"],
        "callingCode": ["505"],
        "capital": "Managua",
        "altSpellings": ["NI", "Republic of Nicaragua", "Rep\u00fablica de Nicaragua"],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "Republik Nicaragua", "common": "Nicaragua"},
            "fra": {"official": "R\u00e9publique du Nicaragua", "common": "Nicaragua"},
            "hrv": {"official": "Republika Nikaragva", "common": "Nikaragva"},
            "ita": {"official": "Repubblica del Nicaragua", "common": "Nicaragua"},
            "jpn": {"official": "\u30cb\u30ab\u30e9\u30b0\u30a2\u5171\u548c\u56fd", "common": "\u30cb\u30ab\u30e9\u30b0\u30a2"},
            "nld": {"official": "Republiek Nicaragua", "common": "Nicaragua"},
            "por": {"official": "Rep\u00fablica da Nicar\u00e1gua", "common": "Nicar\u00e1gua"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041d\u0438\u043a\u0430\u0440\u0430\u0433\u0443\u0430", "common": "\u041d\u0438\u043a\u0430\u0440\u0430\u0433\u0443\u0430"},
            "spa": {"official": "Rep\u00fablica de Nicaragua", "common": "Nicaragua"},
            "fin": {"official": "Nicaraguan tasavalta", "common": "Nicaragua"}
        },
        "latlng": [13, -85],
        "demonym": "Nicaraguan",
        "landlocked": false,
        "borders": ["CRI", "HND"],
        "area": 130373
    },
    {
        "name": {
            "common": "Niue",
            "official": "Niue",
            "native": {
                "eng": {
                    "official": "Niue",
                    "common": "Niue"
                },
                "niu": {
                    "official": "Niu\u0113",
                    "common": "Niu\u0113"
                }
            }
        },
        "tld": [".nu"],
        "cca2": "NU",
        "ccn3": "570",
        "cca3": "NIU",
        "cioc": "",
        "currency": ["NZD"],
        "callingCode": ["683"],
        "capital": "Alofi",
        "altSpellings": ["NU"],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "niu": "Niuean"
        },
        "translations": {
            "deu": {"official": "Niue", "common": "Niue"},
            "fra": {"official": "Niue", "common": "Niue"},
            "hrv": {"official": "Niue", "common": "Niue"},
            "ita": {"official": "Niue", "common": "Niue"},
            "jpn": {"official": "\u30cb\u30a6\u30a8", "common": "\u30cb\u30a6\u30a8"},
            "nld": {"official": "Niue", "common": "Niue"},
            "por": {"official": "Niue", "common": "Niue"},
            "rus": {"official": "\u041d\u0438\u0443\u044d", "common": "\u041d\u0438\u0443\u044d"},
            "spa": {"official": "Niue", "common": "Niue"},
            "fin": {"official": "Niue", "common": "Niue"}
        },
        "latlng": [-19.03333333, -169.86666666],
        "demonym": "Niuean",
        "landlocked": false,
        "borders": [],
        "area": 260
    },
    {
        "name": {
            "common": "Netherlands",
            "official": "Netherlands",
            "native": {
                "nld": {
                    "official": "Nederland",
                    "common": "Nederland"
                }
            }
        },
        "tld": [".nl"],
        "cca2": "NL",
        "ccn3": "528",
        "cca3": "NLD",
        "cioc": "NED",
        "currency": ["EUR"],
        "callingCode": ["31"],
        "capital": "Amsterdam",
        "altSpellings": ["NL", "Holland", "Nederland"],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "nld": "Dutch"
        },
        "translations": {
            "deu": {"official": "Niederlande", "common": "Niederlande"},
            "fra": {"official": "Pays-Bas", "common": "Pays-Bas"},
            "hrv": {"official": "Holandija", "common": "Nizozemska"},
            "ita": {"official": "Paesi Bassi", "common": "Paesi Bassi"},
            "jpn": {"official": "\u30aa\u30e9\u30f3\u30c0", "common": "\u30aa\u30e9\u30f3\u30c0"},
            "nld": {"official": "Nederland", "common": "Nederland"},
            "por": {"official": "Holanda", "common": "Holanda"},
            "rus": {"official": "\u041d\u0438\u0434\u0435\u0440\u043b\u0430\u043d\u0434\u044b", "common": "\u041d\u0438\u0434\u0435\u0440\u043b\u0430\u043d\u0434\u044b"},
            "spa": {"official": "Pa\u00edses Bajos", "common": "Pa\u00edses Bajos"},
            "fin": {"official": "Alankomaat", "common": "Alankomaat"}
        },
        "latlng": [52.5, 5.75],
        "demonym": "Dutch",
        "landlocked": false,
        "borders": ["BEL", "DEU"],
        "area": 41850
    },
    {
        "name": {
            "common": "Norway",
            "official": "Kingdom of Norway",
            "native": {
                "nno": {
                    "official": "Kongeriket Noreg",
                    "common": "Noreg"
                },
                "nob": {
                    "official": "Kongeriket Norge",
                    "common": "Norge"
                },
                "smi": {
                    "official": "Norgga gonagasriika",
                    "common": "Norgga"
                }
            }
        },
        "tld": [".no"],
        "cca2": "NO",
        "ccn3": "578",
        "cca3": "NOR",
        "cioc": "NOR",
        "currency": ["NOK"],
        "callingCode": ["47"],
        "capital": "Oslo",
        "altSpellings": ["NO", "Norge", "Noreg", "Kingdom of Norway", "Kongeriket Norge", "Kongeriket Noreg"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "nno": "Norwegian Nynorsk",
            "nob": "Norwegian Bokm\u00e5l",
            "smi": "Sami"
        },
        "translations": {
            "deu": {"official": "K\u00f6nigreich Norwegen", "common": "Norwegen"},
            "fra": {"official": "Royaume de Norv\u00e8ge", "common": "Norv\u00e8ge"},
            "hrv": {"official": "Kraljevina Norve\u0161ka", "common": "Norve\u0161ka"},
            "ita": {"official": "Regno di Norvegia", "common": "Norvegia"},
            "jpn": {"official": "\u30ce\u30eb\u30a6\u30a7\u30fc\u738b\u56fd", "common": "\u30ce\u30eb\u30a6\u30a7\u30fc"},
            "nld": {"official": "Koninkrijk Noorwegen", "common": "Noorwegen"},
            "por": {"official": "Reino da Noruega", "common": "Noruega"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u041d\u043e\u0440\u0432\u0435\u0433\u0438\u044f", "common": "\u041d\u043e\u0440\u0432\u0435\u0433\u0438\u044f"},
            "spa": {"official": "Reino de Noruega", "common": "Noruega"},
            "fin": {"official": "Norjan kuningaskunta", "common": "Norja"}
        },
        "latlng": [62, 10],
        "demonym": "Norwegian",
        "landlocked": false,
        "borders": ["FIN", "SWE", "RUS"],
        "area": 323802
    },
    {
        "name": {
            "common": "Nepal",
            "official": "Federal Democratic Republic of Nepal",
            "native": {
                "nep": {
                    "official": "\u0928\u0947\u092a\u093e\u0932 \u0938\u0902\u0918\u0940\u092f \u0932\u094b\u0915\u0924\u093e\u0928\u094d\u0924\u094d\u0930\u093f\u0915 \u0917\u0923\u0924\u0928\u094d\u0924\u094d\u0930",
                    "common": "\u0928\u092a\u0932"
                }
            }
        },
        "tld": [".np"],
        "cca2": "NP",
        "ccn3": "524",
        "cca3": "NPL",
        "cioc": "NEP",
        "currency": ["NPR"],
        "callingCode": ["977"],
        "capital": "Kathmandu",
        "altSpellings": ["NP", "Federal Democratic Republic of Nepal", "Lokt\u0101ntrik Ganatantra Nep\u0101l"],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "nep": "Nepali"
        },
        "translations": {
            "deu": {"official": "Demokratischen Bundesrepublik Nepal", "common": "N\u00e9pal"},
            "fra": {"official": "R\u00e9publique d\u00e9mocratique f\u00e9d\u00e9rale du N\u00e9pal", "common": "N\u00e9pal"},
            "hrv": {"official": "Savezna Demokratska Republika Nepal", "common": "Nepal"},
            "ita": {"official": "Repubblica federale democratica del Nepal", "common": "Nepal"},
            "jpn": {"official": "\u30cd\u30d1\u30fc\u30eb\u9023\u90a6\u6c11\u4e3b\u5171\u548c\u56fd", "common": "\u30cd\u30d1\u30fc\u30eb"},
            "nld": {"official": "Federale Democratische Republiek Nepal", "common": "Nepal"},
            "por": {"official": "Rep\u00fablica Democr\u00e1tica Federal do Nepal", "common": "Nepal"},
            "rus": {"official": "\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0414\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041d\u0435\u043f\u0430\u043b", "common": "\u041d\u0435\u043f\u0430\u043b"},
            "spa": {"official": "Rep\u00fablica Democr\u00e1tica Federal de Nepal", "common": "Nepal"},
            "fin": {"official": "Nepalin demokraattinen liittotasavalta", "common": "Nepal"}
        },
        "latlng": [28, 84],
        "demonym": "Nepalese",
        "landlocked": true,
        "borders": ["CHN", "IND"],
        "area": 147181
    },
    {
        "name": {
            "common": "Nauru",
            "official": "Republic of Nauru",
            "native": {
                "eng": {
                    "official": "Republic of Nauru",
                    "common": "Nauru"
                },
                "nau": {
                    "official": "Republic of Nauru",
                    "common": "Nauru"
                }
            }
        },
        "tld": [".nr"],
        "cca2": "NR",
        "ccn3": "520",
        "cca3": "NRU",
        "cioc": "NRU",
        "currency": ["AUD"],
        "callingCode": ["674"],
        "capital": "Yaren",
        "altSpellings": ["NR", "Naoero", "Pleasant Island", "Republic of Nauru", "Ripublik Naoero"],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "eng": "English",
            "nau": "Nauru"
        },
        "translations": {
            "deu": {"official": "Republik Nauru", "common": "Nauru"},
            "fra": {"official": "R\u00e9publique de Nauru", "common": "Nauru"},
            "hrv": {"official": "Republika Nauru", "common": "Nauru"},
            "ita": {"official": "Repubblica di Nauru", "common": "Nauru"},
            "jpn": {"official": "\u30ca\u30a6\u30eb\u5171\u548c\u56fd", "common": "\u30ca\u30a6\u30eb"},
            "nld": {"official": "Republiek Nauru", "common": "Nauru"},
            "por": {"official": "Rep\u00fablica de Nauru", "common": "Nauru"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041d\u0430\u0443\u0440\u0443", "common": "\u041d\u0430\u0443\u0440\u0443"},
            "spa": {"official": "Rep\u00fablica de Nauru", "common": "Nauru"},
            "fin": {"official": "Naurun tasavalta", "common": "Nauru"}
        },
        "latlng": [-0.53333333, 166.91666666],
        "demonym": "Nauruan",
        "landlocked": false,
        "borders": [],
        "area": 21
    },
    {
        "name": {
            "common": "New Zealand",
            "official": "New Zealand",
            "native": {
                "eng": {
                    "official": "New Zealand",
                    "common": "New Zealand"
                },
                "mri": {
                    "official": "Aotearoa",
                    "common": "Aotearoa"
                },
                "nzs": {
                    "official": "New Zealand",
                    "common": "New Zealand"
                }
            }
        },
        "tld": [".nz"],
        "cca2": "NZ",
        "ccn3": "554",
        "cca3": "NZL",
        "cioc": "NZL",
        "currency": ["NZD"],
        "callingCode": ["64"],
        "capital": "Wellington",
        "altSpellings": ["NZ", "Aotearoa"],
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "languages": {
            "eng": "English",
            "mri": "M\u0101ori",
            "nzs": "New Zealand Sign Language"
        },
        "translations": {
            "deu": {"official": "Neuseeland", "common": "Neuseeland"},
            "fra": {"official": "Nouvelle-Z\u00e9lande", "common": "Nouvelle-Z\u00e9lande"},
            "hrv": {"official": "Novi Zeland", "common": "Novi Zeland"},
            "ita": {"official": "Nuova Zelanda", "common": "Nuova Zelanda"},
            "jpn": {"official": "\u30cb\u30e5\u30fc\u30b8\u30fc\u30e9\u30f3\u30c9", "common": "\u30cb\u30e5\u30fc\u30b8\u30fc\u30e9\u30f3\u30c9"},
            "nld": {"official": "Nieuw Zeeland", "common": "Nieuw-Zeeland"},
            "por": {"official": "nova Zel\u00e2ndia", "common": "Nova Zel\u00e2ndia"},
            "rus": {"official": "\u041d\u043e\u0432\u0430\u044f \u0417\u0435\u043b\u0430\u043d\u0434\u0438\u044f", "common": "\u041d\u043e\u0432\u0430\u044f \u0417\u0435\u043b\u0430\u043d\u0434\u0438\u044f"},
            "spa": {"official": "nueva Zelanda", "common": "Nueva Zelanda"},
            "fin": {"official": "Uusi-Seelanti", "common": "Uusi-Seelanti"}
        },
        "latlng": [-41, 174],
        "demonym": "New Zealander",
        "landlocked": false,
        "borders": [],
        "area": 270467
    },
    {
        "name": {
            "common": "Oman",
            "official": "Sultanate of Oman",
            "native": {
                "ara": {
                    "official": "\u0633\u0644\u0637\u0646\u0629 \u0639\u0645\u0627\u0646",
                    "common": "\u0639\u0645\u0627\u0646"
                }
            }
        },
        "tld": [".om"],
        "cca2": "OM",
        "ccn3": "512",
        "cca3": "OMN",
        "cioc": "OMA",
        "currency": ["OMR"],
        "callingCode": ["968"],
        "capital": "Muscat",
        "altSpellings": ["OM", "Sultanate of Oman", "Sal\u1e6danat \u02bbUm\u0101n"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "deu": {"official": "Sultanat Oman", "common": "Oman"},
            "fra": {"official": "Sultanat d'Oman", "common": "Oman"},
            "hrv": {"official": "Sultanat Oman", "common": "Oman"},
            "ita": {"official": "Sultanato dell'Oman", "common": "oman"},
            "jpn": {"official": "\u30aa\u30de\u30fc\u30f3\u00b7\u30b9\u30eb\u30bf\u30f3\u56fd", "common": "\u30aa\u30de\u30fc\u30f3"},
            "nld": {"official": "Sultanaat van Oman", "common": "Oman"},
            "por": {"official": "Sultanato de Om\u00e3", "common": "Om\u00e3"},
            "rus": {"official": "\u0421\u0443\u043b\u0442\u0430\u043d\u0430\u0442 \u041e\u043c\u0430\u043d", "common": "\u041e\u043c\u0430\u043d"},
            "spa": {"official": "Sultanato de Om\u00e1n", "common": "Om\u00e1n"},
            "fin": {"official": "Omanin sulttaanikunta", "common": "Oman"}
        },
        "latlng": [21, 57],
        "demonym": "Omani",
        "landlocked": false,
        "borders": ["SAU", "ARE", "YEM"],
        "area": 309500
    },
    {
        "name": {
            "common": "Pakistan",
            "official": "Islamic Republic of Pakistan",
            "native": {
                "eng": {
                    "official": "Islamic Republic of Pakistan",
                    "common": "Pakistan"
                },
                "urd": {
                    "official": "\u0627\u0633\u0644\u0627\u0645\u06cc \u062c\u0645\u06c1\u0648\u0631\u06cc\u06c2 \u067e\u0627\u0643\u0633\u062a\u0627\u0646",
                    "common": "\u067e\u0627\u0643\u0633\u062a\u0627\u0646"
                }
            }
        },
        "tld": [".pk"],
        "cca2": "PK",
        "ccn3": "586",
        "cca3": "PAK",
        "cioc": "PAK",
        "currency": ["PKR"],
        "callingCode": ["92"],
        "capital": "Islamabad",
        "altSpellings": ["PK", "P\u0101kist\u0101n", "Islamic Republic of Pakistan", "Isl\u0101m\u012b Jumh\u016briya'eh P\u0101kist\u0101n"],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "eng": "English",
            "urd": "Urdu"
        },
        "translations": {
            "deu": {"official": "Islamische Republik Pakistan", "common": "Pakistan"},
            "fra": {"official": "R\u00e9publique islamique du Pakistan", "common": "Pakistan"},
            "hrv": {"official": "Islamska Republika Pakistan", "common": "Pakistan"},
            "ita": {"official": "Repubblica islamica del Pakistan", "common": "Pakistan"},
            "jpn": {"official": "\u30d1\u30ad\u30b9\u30bf\u30f3", "common": "\u30d1\u30ad\u30b9\u30bf\u30f3"},
            "nld": {"official": "Islamitische Republiek Pakistan", "common": "Pakistan"},
            "por": {"official": "Rep\u00fablica Isl\u00e2mica do Paquist\u00e3o", "common": "Paquist\u00e3o"},
            "rus": {"official": "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041f\u0430\u043a\u0438\u0441\u0442\u0430\u043d", "common": "\u041f\u0430\u043a\u0438\u0441\u0442\u0430\u043d"},
            "spa": {"official": "Rep\u00fablica Isl\u00e1mica de Pakist\u00e1n", "common": "Pakist\u00e1n"},
            "fin": {"official": "Pakistanin islamilainen tasavalta", "common": "Pakistan"}
        },
        "latlng": [30, 70],
        "demonym": "Pakistani",
        "landlocked": false,
        "borders": ["AFG", "CHN", "IND", "IRN"],
        "area": 881912
    },
    {
        "name": {
            "common": "Panama",
            "official": "Republic of Panama",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica de Panam\u00e1",
                    "common": "Panam\u00e1"
                }
            }
        },
        "tld": [".pa"],
        "cca2": "PA",
        "ccn3": "591",
        "cca3": "PAN",
        "cioc": "PAN",
        "currency": ["PAB", "USD"],
        "callingCode": ["507"],
        "capital": "Panama City",
        "altSpellings": ["PA", "Republic of Panama", "Rep\u00fablica de Panam\u00e1"],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "Republik Panama", "common": "Panama"},
            "fra": {"official": "R\u00e9publique du Panama", "common": "Panama"},
            "hrv": {"official": "Republika Panama", "common": "Panama"},
            "ita": {"official": "Repubblica di Panama", "common": "Panama"},
            "jpn": {"official": "\u30d1\u30ca\u30de\u5171\u548c\u56fd", "common": "\u30d1\u30ca\u30de"},
            "nld": {"official": "Republiek Panama", "common": "Panama"},
            "por": {"official": "Rep\u00fablica do Panam\u00e1", "common": "Panam\u00e1"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041f\u0430\u043d\u0430\u043c\u0430", "common": "\u041f\u0430\u043d\u0430\u043c\u0430"},
            "spa": {"official": "Rep\u00fablica de Panam\u00e1", "common": "Panam\u00e1"},
            "fin": {"official": "Panaman tasavalta", "common": "Panama"}
        },
        "latlng": [9, -80],
        "demonym": "Panamanian",
        "landlocked": false,
        "borders": ["COL", "CRI"],
        "area": 75417
    },
    {
        "name": {
            "common": "Pitcairn Islands",
            "official": "Pitcairn Group of Islands",
            "native": {
                "eng": {
                    "official": "Pitcairn Group of Islands",
                    "common": "Pitcairn Islands"
                }
            }
        },
        "tld": [".pn"],
        "cca2": "PN",
        "ccn3": "612",
        "cca3": "PCN",
        "cioc": "",
        "currency": ["NZD"],
        "callingCode": ["64"],
        "capital": "Adamstown",
        "altSpellings": ["PN", "Pitcairn", "Pitcairn Henderson Ducie and Oeno Islands"],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Pitcairn Inselgruppe", "common": "Pitcairn"},
            "fra": {"official": "Pitcairn groupe d'\u00eeles", "common": "\u00celes Pitcairn"},
            "hrv": {"official": "Pitcairn skupine otoka", "common": "Pitcairnovo oto\u010dje"},
            "ita": {"official": "Pitcairn gruppo di isole", "common": "Isole Pitcairn"},
            "jpn": {"official": "\u5cf6\u306e\u30d4\u30c8\u30b1\u30a2\u30f3\u30b0\u30eb\u30fc\u30d7", "common": "\u30d4\u30c8\u30b1\u30a2\u30f3"},
            "nld": {"official": "Pitcairn groep eilanden", "common": "Pitcairneilanden"},
            "por": {"official": "Pitcairn grupo de ilhas", "common": "Ilhas Pitcairn"},
            "rus": {"official": "\u041f\u0438\u0442\u043a\u044d\u0440\u043d \u0433\u0440\u0443\u043f\u043f\u0430 \u043e\u0441\u0442\u0440\u043e\u0432\u043e\u0432", "common": "\u041e\u0441\u0442\u0440\u043e\u0432\u0430 \u041f\u0438\u0442\u043a\u044d\u0440\u043d"},
            "spa": {"official": "Grupo de Islas Pitcairn", "common": "Islas Pitcairn"},
            "fin": {"official": "Pitcairn", "common": "Pitcairn"}
        },
        "latlng": [-25.06666666, -130.1],
        "demonym": "Pitcairn Islander",
        "landlocked": false,
        "borders": [],
        "area": 47
    },
    {
        "name": {
            "common": "Peru",
            "official": "Republic of Peru",
            "native": {
                "aym": {
                    "official": "Piruw Suyu",
                    "common": "Piruw"
                },
                "que": {
                    "official": "Piruw Ripuwlika",
                    "common": "Piruw"
                },
                "spa": {
                    "official": "Rep\u00fablica del Per\u00fa",
                    "common": "Per\u00fa"
                }
            }
        },
        "tld": [".pe"],
        "cca2": "PE",
        "ccn3": "604",
        "cca3": "PER",
        "cioc": "PER",
        "currency": ["PEN"],
        "callingCode": ["51"],
        "capital": "Lima",
        "altSpellings": ["PE", "Republic of Peru", "Rep\u00fablica del Per\u00fa"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "aym": "Aymara",
            "que": "Quechua",
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "Republik Peru", "common": "Peru"},
            "fra": {"official": "R\u00e9publique du P\u00e9rou", "common": "P\u00e9rou"},
            "hrv": {"official": "Republika Peru", "common": "Peru"},
            "ita": {"official": "Repubblica del Per\u00f9", "common": "Per\u00f9"},
            "jpn": {"official": "\u30da\u30eb\u30fc\u5171\u548c\u56fd", "common": "\u30da\u30eb\u30fc"},
            "nld": {"official": "Republiek Peru", "common": "Peru"},
            "por": {"official": "Rep\u00fablica do Peru", "common": "Per\u00fa"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041f\u0435\u0440\u0443", "common": "\u041f\u0435\u0440\u0443"},
            "spa": {"official": "Rep\u00fablica de Per\u00fa", "common": "Per\u00fa"},
            "fin": {"official": "Perun tasavalta", "common": "Peru"}
        },
        "latlng": [-10, -76],
        "demonym": "Peruvian",
        "landlocked": false,
        "borders": ["BOL", "BRA", "CHL", "COL", "ECU"],
        "area": 1285216
    },
    {
        "name": {
            "common": "Philippines",
            "official": "Republic of the Philippines",
            "native": {
                "eng": {
                    "official": "Republic of the Philippines",
                    "common": "Philippines"
                },
                "fil": {
                    "official": "Republic of the Philippines",
                    "common": "Pilipinas"
                }
            }
        },
        "tld": [".ph"],
        "cca2": "PH",
        "ccn3": "608",
        "cca3": "PHL",
        "cioc": "PHI",
        "currency": ["PHP"],
        "callingCode": ["63"],
        "capital": "Manila",
        "altSpellings": ["PH", "Republic of the Philippines", "Rep\u00fablika ng Pilipinas"],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "eng": "English",
            "fil": "Filipino"
        },
        "translations": {
            "deu": {"official": "Republik der Philippinen", "common": "Philippinen"},
            "fra": {"official": "R\u00e9publique des Philippines", "common": "Philippines"},
            "hrv": {"official": "Republika Filipini", "common": "Filipini"},
            "ita": {"official": "Repubblica delle Filippine", "common": "Filippine"},
            "jpn": {"official": "\u30d5\u30a3\u30ea\u30d4\u30f3\u5171\u548c\u56fd", "common": "\u30d5\u30a3\u30ea\u30d4\u30f3"},
            "nld": {"official": "Republiek der Filipijnen", "common": "Filipijnen"},
            "por": {"official": "Rep\u00fablica das Filipinas", "common": "Filipinas"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d\u044b", "common": "\u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d\u044b"},
            "spa": {"official": "Rep\u00fablica de las Filipinas", "common": "Filipinas"},
            "fin": {"official": "Filippiinien tasavalta", "common": "Filippiinit"}
        },
        "latlng": [13, 122],
        "demonym": "Filipino",
        "landlocked": false,
        "borders": [],
        "area": 342353
    },
    {
        "name": {
            "common": "Palau",
            "official": "Republic of Palau",
            "native": {
                "eng": {
                    "official": "Republic of Palau",
                    "common": "Palau"
                },
                "pau": {
                    "official": "Beluu er a Belau",
                    "common": "Belau"
                }
            }
        },
        "tld": [".pw"],
        "cca2": "PW",
        "ccn3": "585",
        "cca3": "PLW",
        "cioc": "PLW",
        "currency": ["USD"],
        "callingCode": ["680"],
        "capital": "Ngerulmud",
        "altSpellings": ["PW", "Republic of Palau", "Beluu er a Belau"],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "eng": "English",
            "pau": "Palauan"
        },
        "translations": {
            "deu": {"official": "Palau", "common": "Palau"},
            "fra": {"official": "R\u00e9publique de Palau", "common": "Palaos"},
            "hrv": {"official": "Republika Palau", "common": "Palau"},
            "ita": {"official": "Repubblica di Palau", "common": "Palau"},
            "jpn": {"official": "\u30d1\u30e9\u30aa\u5171\u548c\u56fd", "common": "\u30d1\u30e9\u30aa"},
            "nld": {"official": "Republiek van Palau", "common": "Palau"},
            "por": {"official": "Rep\u00fablica de Palau", "common": "Palau"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041f\u0430\u043b\u0430\u0443", "common": "\u041f\u0430\u043b\u0430\u0443"},
            "spa": {"official": "Rep\u00fablica de Palau", "common": "Palau"},
            "fin": {"official": "Palaun tasavalta", "common": "Palau"}
        },
        "latlng": [7.5, 134.5],
        "demonym": "Palauan",
        "landlocked": false,
        "borders": [],
        "area": 459
    },
    {
        "name": {
            "common": "Papua New Guinea",
            "official": "Independent State of Papua New Guinea",
            "native": {
                "eng": {
                    "official": "Independent State of Papua New Guinea",
                    "common": "Papua New Guinea"
                },
                "hmo": {
                    "official": "Independen Stet bilong Papua Niugini",
                    "common": "Papua Niu Gini"
                },
                "tpi": {
                    "official": "Independen Stet bilong Papua Niugini",
                    "common": "Papua Niugini"
                }
            }
        },
        "tld": [".pg"],
        "cca2": "PG",
        "ccn3": "598",
        "cca3": "PNG",
        "cioc": "PNG",
        "currency": ["PGK"],
        "callingCode": ["675"],
        "capital": "Port Moresby",
        "altSpellings": ["PG", "Independent State of Papua New Guinea", "Independen Stet bilong Papua Niugini"],
        "region": "Oceania",
        "subregion": "Melanesia",
        "languages": {
            "eng": "English",
            "hmo": "Hiri Motu",
            "tpi": "Tok Pisin"
        },
        "translations": {
            "deu": {"official": "Unabh\u00e4ngige Staat Papua-Neuguinea", "common": "Papua-Neuguinea"},
            "fra": {"official": "\u00c9tat ind\u00e9pendant de Papouasie- Nouvelle-Guin\u00e9e", "common": "Papouasie-Nouvelle-Guin\u00e9e"},
            "hrv": {"official": "Nezavisna Dr\u017eava Papui Novoj Gvineji", "common": "Papua Nova Gvineja"},
            "ita": {"official": "Stato indipendente di Papua Nuova Guinea", "common": "Papua Nuova Guinea"},
            "jpn": {"official": "\u30d1\u30d7\u30a2\u30cb\u30e5\u30fc\u30ae\u30cb\u30a2\u72ec\u7acb\u56fd", "common": "\u30d1\u30d7\u30a2\u30cb\u30e5\u30fc\u30ae\u30cb\u30a2"},
            "nld": {"official": "Onafhankelijke Staat Papoea -Nieuw-Guinea", "common": "Papoea-Nieuw-Guinea"},
            "por": {"official": "Estado Independente da Papua Nova Guin\u00e9", "common": "Papua Nova Guin\u00e9"},
            "rus": {"official": "\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0435 \u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u041f\u0430\u043f\u0443\u0430-\u041d\u043e\u0432\u043e\u0439 \u0413\u0432\u0438\u043d\u0435\u0438", "common": "\u041f\u0430\u043f\u0443\u0430 \u2014 \u041d\u043e\u0432\u0430\u044f \u0413\u0432\u0438\u043d\u0435\u044f"},
            "spa": {"official": "Estado Independiente de Pap\u00faa Nueva Guinea", "common": "Pap\u00faa Nueva Guinea"},
            "fin": {"official": "Papua-Uuden-Guinean Itsen\u00e4inen valtio", "common": "Papua-Uusi-Guinea"}
        },
        "latlng": [-6, 147],
        "demonym": "Papua New Guinean",
        "landlocked": false,
        "borders": ["IDN"],
        "area": 462840
    },
    {
        "name": {
            "common": "Poland",
            "official": "Republic of Poland",
            "native": {
                "pol": {
                    "official": "Rzeczpospolita Polska",
                    "common": "Polska"
                }
            }
        },
        "tld": [".pl"],
        "cca2": "PL",
        "ccn3": "616",
        "cca3": "POL",
        "cioc": "POL",
        "currency": ["PLN"],
        "callingCode": ["48"],
        "capital": "Warsaw",
        "altSpellings": ["PL", "Republic of Poland", "Rzeczpospolita Polska"],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "pol": "Polish"
        },
        "translations": {
            "deu": {"official": "Republik Polen", "common": "Polen"},
            "fra": {"official": "R\u00e9publique de Pologne", "common": "Pologne"},
            "hrv": {"official": "Republika Poljska", "common": "Poljska"},
            "ita": {"official": "Repubblica di Polonia", "common": "Polonia"},
            "jpn": {"official": "\u30dd\u30fc\u30e9\u30f3\u30c9\u5171\u548c\u56fd", "common": "\u30dd\u30fc\u30e9\u30f3\u30c9"},
            "nld": {"official": "Republiek Polen", "common": "Polen"},
            "por": {"official": "Rep\u00fablica da Pol\u00f3nia", "common": "Pol\u00f3nia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041f\u043e\u043b\u044c\u0448\u0430", "common": "\u041f\u043e\u043b\u044c\u0448\u0430"},
            "spa": {"official": "Rep\u00fablica de Polonia", "common": "Polonia"},
            "fin": {"official": "Puolan tasavalta", "common": "Puola"}
        },
        "latlng": [52, 20],
        "demonym": "Polish",
        "landlocked": false,
        "borders": ["BLR", "CZE", "DEU", "LTU", "RUS", "SVK", "UKR"],
        "area": 312679
    },
    {
        "name": {
            "common": "Puerto Rico",
            "official": "Commonwealth of Puerto Rico",
            "native": {
                "eng": {
                    "official": "Commonwealth of Puerto Rico",
                    "common": "Puerto Rico"
                },
                "spa": {
                    "official": "Estado Libre Asociado de Puerto Rico",
                    "common": "Puerto Rico"
                }
            }
        },
        "tld": [".pr"],
        "cca2": "PR",
        "ccn3": "630",
        "cca3": "PRI",
        "cioc": "PUR",
        "currency": ["USD"],
        "callingCode": ["1787", "1939"],
        "capital": "San Juan",
        "altSpellings": ["PR", "Commonwealth of Puerto Rico", "Estado Libre Asociado de Puerto Rico"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English",
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "Commonwealth von Puerto Rico", "common": "Puerto Rico"},
            "fra": {"official": "Commonwealth de Porto Rico", "common": "Porto Rico"},
            "hrv": {"official": "Zajednica Puerto Rico", "common": "Portoriko"},
            "ita": {"official": "Commonwealth di Porto Rico", "common": "Porto Rico"},
            "jpn": {"official": "\u30d7\u30a8\u30eb\u30c8\u30ea\u30b3\u306e\u30b3\u30e2\u30f3\u30a6\u30a7\u30eb\u30b9", "common": "\u30d7\u30a8\u30eb\u30c8\u30ea\u30b3"},
            "nld": {"official": "Gemenebest van Puerto Rico", "common": "Puerto Rico"},
            "por": {"official": "Commonwealth of Puerto Rico", "common": "Porto Rico"},
            "rus": {"official": "\u0421\u043e\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043e \u041f\u0443\u044d\u0440\u0442\u043e- \u0420\u0438\u043a\u043e", "common": "\u041f\u0443\u044d\u0440\u0442\u043e-\u0420\u0438\u043a\u043e"},
            "spa": {"official": "Asociado de Puerto Rico", "common": "Puerto Rico"},
            "fin": {"official": "Puerto Rico", "common": "Puerto Rico"}
        },
        "latlng": [18.25, -66.5],
        "demonym": "Puerto Rican",
        "landlocked": false,
        "borders": [],
        "area": 8870
    },
    {
        "name": {
            "common": "North Korea",
            "official": "Democratic People's Republic of Korea",
            "native": {
                "kor": {
                    "official": "\uc870\uc120 \ubbfc\uc8fc\uc8fc\uc758 \uc778\ubbfc \uacf5\ud654\uad6d",
                    "common": "\ubd81\ud55c"
                }
            }
        },
        "tld": [".kp"],
        "cca2": "KP",
        "ccn3": "408",
        "cca3": "PRK",
        "cioc": "PRK",
        "currency": ["KPW"],
        "callingCode": ["850"],
        "capital": "Pyongyang",
        "altSpellings": ["KP", "Democratic People's Republic of Korea", "\uc870\uc120\ubbfc\uc8fc\uc8fc\uc758\uc778\ubbfc\uacf5\ud654\uad6d", "Chos\u014fn Minjuju\u016di Inmin Konghwaguk", "Korea, Democratic People's Republic of"],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "kor": "Korean"
        },
        "translations": {
            "deu": {"official": "Demokratische Volksrepublik Korea", "common": "Nordkorea"},
            "fra": {"official": "R\u00e9publique populaire d\u00e9mocratique de Cor\u00e9e", "common": "Cor\u00e9e du Nord"},
            "hrv": {"official": "Demokratska Narodna Republika Koreja", "common": "Sjeverna Koreja"},
            "ita": {"official": "Repubblica democratica popolare di Corea", "common": "Corea del Nord"},
            "jpn": {"official": "\u671d\u9bae\u6c11\u4e3b\u4e3b\u7fa9\u4eba\u6c11\u5171\u548c\u56fd", "common": "\u671d\u9bae\u6c11\u4e3b\u4e3b\u7fa9\u4eba\u6c11\u5171\u548c\u56fd"},
            "nld": {"official": "Democratische Volksrepubliek Korea", "common": "Noord-Korea"},
            "por": {"official": "Rep\u00fablica Popular Democr\u00e1tica da Coreia", "common": "Coreia do Norte"},
            "rus": {"official": "\u041a\u043e\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u043e-\u0414\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u0440\u0435\u044f", "common": "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041a\u043e\u0440\u0435\u044f"},
            "spa": {"official": "Rep\u00fablica Popular Democr\u00e1tica de Corea", "common": "Corea del Norte"},
            "fin": {"official": "Korean demokraattinen kansantasavalta", "common": "Pohjois-Korea"}
        },
        "latlng": [40, 127],
        "demonym": "North Korean",
        "landlocked": false,
        "borders": ["CHN", "KOR", "RUS"],
        "area": 120538
    },
    {
        "name": {
            "common": "Portugal",
            "official": "Portuguese Republic",
            "native": {
                "por": {
                    "official": "Rep\u00fablica portugu\u00eas",
                    "common": "Portugal"
                }
            }
        },
        "tld": [".pt"],
        "cca2": "PT",
        "ccn3": "620",
        "cca3": "PRT",
        "cioc": "POR",
        "currency": ["EUR"],
        "callingCode": ["351"],
        "capital": "Lisbon",
        "altSpellings": ["PT", "Portuguesa", "Portuguese Republic", "Rep\u00fablica Portuguesa"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "deu": {"official": "Portugiesische Republik", "common": "Portugal"},
            "fra": {"official": "R\u00e9publique portugaise", "common": "Portugal"},
            "hrv": {"official": "Portugalska Republika", "common": "Portugal"},
            "ita": {"official": "Repubblica portoghese", "common": "Portogallo"},
            "jpn": {"official": "\u30dd\u30eb\u30c8\u30ac\u30eb\u5171\u548c\u56fd", "common": "\u30dd\u30eb\u30c8\u30ac\u30eb"},
            "nld": {"official": "Portugese Republiek", "common": "Portugal"},
            "por": {"official": "Rep\u00fablica portugu\u00eas", "common": "Portugal"},
            "rus": {"official": "\u041f\u043e\u0440\u0442\u0443\u0433\u0430\u043b\u044c\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u041f\u043e\u0440\u0442\u0443\u0433\u0430\u043b\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica Portuguesa", "common": "Portugal"},
            "fin": {"official": "Portugalin tasavalta", "common": "Portugali"}
        },
        "latlng": [39.5, -8],
        "demonym": "Portuguese",
        "landlocked": false,
        "borders": ["ESP"],
        "area": 92090
    },
    {
        "name": {
            "common": "Paraguay",
            "official": "Republic of Paraguay",
            "native": {
                "grn": {
                    "official": "Tet\u00e3 Paragu\u00e1i",
                    "common": "Paragu\u00e1i"
                },
                "spa": {
                    "official": "Rep\u00fablica de Paraguay",
                    "common": "Paraguay"
                }
            }
        },
        "tld": [".py"],
        "cca2": "PY",
        "ccn3": "600",
        "cca3": "PRY",
        "cioc": "PAR",
        "currency": ["PYG"],
        "callingCode": ["595"],
        "capital": "Asunci\u00f3n",
        "altSpellings": ["PY", "Republic of Paraguay", "Rep\u00fablica del Paraguay", "Tet\u00e3 Paragu\u00e1i"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "grn": "Guaran\u00ed",
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "Republik Paraguay", "common": "Paraguay"},
            "fra": {"official": "R\u00e9publique du Paraguay", "common": "Paraguay"},
            "hrv": {"official": "Republika Paragvaj", "common": "Paragvaj"},
            "ita": {"official": "Repubblica del Paraguay", "common": "Paraguay"},
            "jpn": {"official": "\u30d1\u30e9\u30b0\u30a2\u30a4\u5171\u548c\u56fd", "common": "\u30d1\u30e9\u30b0\u30a2\u30a4"},
            "nld": {"official": "Republiek Paraguay", "common": "Paraguay"},
            "por": {"official": "Rep\u00fablica do Paraguai", "common": "Paraguai"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041f\u0430\u0440\u0430\u0433\u0432\u0430\u0439", "common": "\u041f\u0430\u0440\u0430\u0433\u0432\u0430\u0439"},
            "spa": {"official": "Rep\u00fablica de Paraguay", "common": "Paraguay"},
            "fin": {"official": "Paraguayn tasavalta", "common": "Paraguay"}
        },
        "latlng": [-23, -58],
        "demonym": "Paraguayan",
        "landlocked": true,
        "borders": ["ARG", "BOL", "BRA"],
        "area": 406752
    },
    {
        "name": {
            "common": "Palestine",
            "official": "State of Palestine",
            "native": {
                "ara": {
                    "official": "\u062f\u0648\u0644\u0629 \u0641\u0644\u0633\u0637\u064a\u0646",
                    "common": "\u0641\u0644\u0633\u0637\u064a\u0646"
                }
            }
        },
        "tld": [".ps", "\u0641\u0644\u0633\u0637\u064a\u0646."],
        "cca2": "PS",
        "ccn3": "275",
        "cca3": "PSE",
        "cioc": "PLE",
        "currency": ["ILS"],
        "callingCode": ["970"],
        "capital": "Ramallah",
        "altSpellings": ["PS", "Palestine, State of", "State of Palestine", "Dawlat Filas\u1e6din"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "deu": {"official": "Staat Pal\u00e4stina", "common": "Pal\u00e4stina"},
            "fra": {"official": "Etat de Palestine", "common": "Palestine"},
            "hrv": {"official": "State of Palestine", "common": "Palestina"},
            "ita": {"official": "Stato di Palestina", "common": "Palestina"},
            "jpn": {"official": "\u30d1\u30ec\u30b9\u30c1\u30ca\u81ea\u6cbb\u653f\u5e9c", "common": "\u30d1\u30ec\u30b9\u30c1\u30ca"},
            "nld": {"official": "Staat Palestina", "common": "Palestijnse gebieden"},
            "por": {"official": "Estado da Palestina", "common": "Palestina"},
            "rus": {"official": "\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u041f\u0430\u043b\u0435\u0441\u0442\u0438\u043d\u0430", "common": "\u041f\u0430\u043b\u0435\u0441\u0442\u0438\u043d\u0430"},
            "spa": {"official": "Estado de Palestina", "common": "Palestina"},
            "fin": {"official": "Palestiinan valtio", "common": "Palestiina"}
        },
        "latlng": [31.9, 35.2],
        "demonym": "Palestinian",
        "landlocked": false,
        "borders": ["ISR", "EGY", "JOR"],
        "area": 6220
    },
    {
        "name": {
            "common": "French Polynesia",
            "official": "French Polynesia",
            "native": {
                "fra": {
                    "official": "Polyn\u00e9sie fran\u00e7aise",
                    "common": "Polyn\u00e9sie fran\u00e7aise"
                }
            }
        },
        "tld": [".pf"],
        "cca2": "PF",
        "ccn3": "258",
        "cca3": "PYF",
        "cioc": "",
        "currency": ["XPF"],
        "callingCode": ["689"],
        "capital": "Papeet\u0113",
        "altSpellings": ["PF", "Polyn\u00e9sie fran\u00e7aise", "French Polynesia", "P\u014dr\u012bnetia Far\u0101ni"],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Franz\u00f6sisch-Polynesien", "common": "Franz\u00f6sisch-Polynesien"},
            "fra": {"official": "Polyn\u00e9sie fran\u00e7aise", "common": "Polyn\u00e9sie fran\u00e7aise"},
            "hrv": {"official": "Francuska Polinezija", "common": "Francuska Polinezija"},
            "ita": {"official": "Polinesia Francese", "common": "Polinesia Francese"},
            "jpn": {"official": "\u30d5\u30e9\u30f3\u30b9\u9818\u30dd\u30ea\u30cd\u30b7\u30a2", "common": "\u30d5\u30e9\u30f3\u30b9\u9818\u30dd\u30ea\u30cd\u30b7\u30a2"},
            "nld": {"official": "Frans-Polynesi\u00eb", "common": "Frans-Polynesi\u00eb"},
            "por": {"official": "Polin\u00e9sia Francesa", "common": "Polin\u00e9sia Francesa"},
            "rus": {"official": "\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0430\u044f \u041f\u043e\u043b\u0438\u043d\u0435\u0437\u0438\u044f", "common": "\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0430\u044f \u041f\u043e\u043b\u0438\u043d\u0435\u0437\u0438\u044f"},
            "spa": {"official": "Polinesia franc\u00e9s", "common": "Polinesia Francesa"},
            "fin": {"official": "Ranskan Polynesia", "common": "Ranskan Polynesia"}
        },
        "latlng": [-15, -140],
        "demonym": "French Polynesian",
        "landlocked": false,
        "borders": [],
        "area": 4167
    },
    {
        "name": {
            "common": "Qatar",
            "official": "State of Qatar",
            "native": {
                "ara": {
                    "official": "\u062f\u0648\u0644\u0629 \u0642\u0637\u0631",
                    "common": "\u0642\u0637\u0631"
                }
            }
        },
        "tld": [".qa", "\u0642\u0637\u0631."],
        "cca2": "QA",
        "ccn3": "634",
        "cca3": "QAT",
        "cioc": "QAT",
        "currency": ["QAR"],
        "callingCode": ["974"],
        "capital": "Doha",
        "altSpellings": ["QA", "State of Qatar", "Dawlat Qa\u1e6dar"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "deu": {"official": "Staat Katar", "common": "Katar"},
            "fra": {"official": "\u00c9tat du Qatar", "common": "Qatar"},
            "hrv": {"official": "Dr\u017eava Katar", "common": "Katar"},
            "ita": {"official": "Stato del Qatar", "common": "Qatar"},
            "jpn": {"official": "\u30ab\u30bf\u30fc\u30eb\u56fd", "common": "\u30ab\u30bf\u30fc\u30eb"},
            "nld": {"official": "Staat Qatar", "common": "Qatar"},
            "por": {"official": "Estado do Qatar", "common": "Catar"},
            "rus": {"official": "\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u041a\u0430\u0442\u0430\u0440", "common": "\u041a\u0430\u0442\u0430\u0440"},
            "spa": {"official": "Estado de Qatar", "common": "Catar"},
            "fin": {"official": "Qatarin valtio", "common": "Qatar"}
        },
        "latlng": [25.5, 51.25],
        "demonym": "Qatari",
        "landlocked": false,
        "borders": ["SAU"],
        "area": 11586
    },
    {
        "name": {
            "common": "R\u00e9union",
            "official": "R\u00e9union Island",
            "native": {
                "fra": {
                    "official": "Ile de la R\u00e9union",
                    "common": "La R\u00e9union"
                }
            }
        },
        "tld": [".re"],
        "cca2": "RE",
        "ccn3": "638",
        "cca3": "REU",
        "cioc": "",
        "currency": ["EUR"],
        "callingCode": ["262"],
        "capital": "Saint-Denis",
        "altSpellings": ["RE", "Reunion"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "R\u00e9union", "common": "R\u00e9union"},
            "fra": {"official": "Ile de la R\u00e9union", "common": "R\u00e9union"},
            "hrv": {"official": "R\u00e9union Island", "common": "R\u00e9union"},
            "ita": {"official": "R\u00e9union", "common": "Riunione"},
            "jpn": {"official": "\u30ec\u30e6\u30cb\u30aa\u30f3\u5cf6", "common": "\u30ec\u30e6\u30cb\u30aa\u30f3"},
            "nld": {"official": "R\u00e9union", "common": "R\u00e9union"},
            "por": {"official": "Ilha da Reuni\u00e3o", "common": "Reuni\u00e3o"},
            "rus": {"official": "\u0420\u0435\u044e\u043d\u044c\u043e\u043d", "common": "\u0420\u0435\u044e\u043d\u044c\u043e\u043d"},
            "spa": {"official": "Isla de la Reuni\u00f3n", "common": "Reuni\u00f3n"},
            "fin": {"official": "R\u00e9union", "common": "R\u00e9union"}
        },
        "latlng": [-21.15, 55.5],
        "demonym": "French",
        "landlocked": false,
        "borders": [],
        "area": 2511
    },
    {
        "name": {
            "common": "Romania",
            "official": "Romania",
            "native": {
                "ron": {
                    "official": "Rom\u00e2nia",
                    "common": "Rom\u00e2nia"
                }
            }
        },
        "tld": [".ro"],
        "cca2": "RO",
        "ccn3": "642",
        "cca3": "ROU",
        "cioc": "ROU",
        "currency": ["RON"],
        "callingCode": ["40"],
        "capital": "Bucharest",
        "altSpellings": ["RO", "Rumania", "Roumania", "Rom\u00e2nia"],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "ron": "Romanian"
        },
        "translations": {
            "deu": {"official": "Rum\u00e4nien", "common": "Rum\u00e4nien"},
            "fra": {"official": "Roumanie", "common": "Roumanie"},
            "hrv": {"official": "Rumunija", "common": "Rumunjska"},
            "ita": {"official": "Romania", "common": "Romania"},
            "jpn": {"official": "\u30eb\u30fc\u30de\u30cb\u30a2", "common": "\u30eb\u30fc\u30de\u30cb\u30a2"},
            "nld": {"official": "Roemeni\u00eb", "common": "Roemeni\u00eb"},
            "por": {"official": "Rom\u00eania", "common": "Rom\u00e9nia"},
            "rus": {"official": "\u0420\u0443\u043c\u044b\u043d\u0438\u044f", "common": "\u0420\u0443\u043c\u044b\u043d\u0438\u044f"},
            "spa": {"official": "Rumania", "common": "Rumania"},
            "fin": {"official": "Romania", "common": "Romania"}
        },
        "latlng": [46, 25],
        "demonym": "Romanian",
        "landlocked": false,
        "borders": ["BGR", "HUN", "MDA", "SRB", "UKR"],
        "area": 238391
    },
    {
        "name": {
            "common": "Russia",
            "official": "Russian Federation",
            "native": {
                "rus": {
                    "official": "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044f",
                    "common": "\u0420\u043e\u0441\u0441\u0438\u044f"
                }
            }
        },
        "tld": [".ru", ".su", ".\u0440\u0444"],
        "cca2": "RU",
        "ccn3": "643",
        "cca3": "RUS",
        "cioc": "RUS",
        "currency": ["RUB"],
        "callingCode": ["7"],
        "capital": "Moscow",
        "altSpellings": ["RU", "Rossiya", "Russian Federation", "\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0430\u044f \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044f", "Rossiyskaya Federatsiya"],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "rus": "Russian"
        },
        "translations": {
            "deu": {"official": "Russische F\u00f6deration", "common": "Russland"},
            "fra": {"official": "F\u00e9d\u00e9ration de Russie", "common": "Russie"},
            "hrv": {"official": "Ruska Federacija", "common": "Rusija"},
            "ita": {"official": "Federazione russa", "common": "Russia"},
            "jpn": {"official": "\u30ed\u30b7\u30a2\u9023\u90a6", "common": "\u30ed\u30b7\u30a2\u9023\u90a6"},
            "nld": {"official": "Russische Federatie", "common": "Rusland"},
            "por": {"official": "Federa\u00e7\u00e3o Russa", "common": "R\u00fassia"},
            "rus": {"official": "\u0420\u043e\u0441\u0441\u0438\u044f \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044f", "common": "\u0420\u043e\u0441\u0441\u0438\u044f"},
            "spa": {"official": "Federaci\u00f3n de Rusia", "common": "Rusia"},
            "fin": {"official": "Ven\u00e4j\u00e4n federaatio", "common": "Ven\u00e4j\u00e4"}
        },
        "latlng": [60, 100],
        "demonym": "Russian",
        "landlocked": false,
        "borders": ["AZE", "BLR", "CHN", "EST", "FIN", "GEO", "KAZ", "PRK", "LVA", "LTU", "MNG", "NOR", "POL", "UKR"],
        "area": 17098242
    },
    {
        "name": {
            "common": "Rwanda",
            "official": "Republic of Rwanda",
            "native": {
                "eng": {
                    "official": "Republic of Rwanda",
                    "common": "Rwanda"
                },
                "fra": {
                    "official": "R\u00e9publique du Rwanda",
                    "common": "Rwanda"
                },
                "kin": {
                    "official": "Repubulika y'u Rwanda",
                    "common": "Rwanda"
                }
            }
        },
        "tld": [".rw"],
        "cca2": "RW",
        "ccn3": "646",
        "cca3": "RWA",
        "cioc": "RWA",
        "currency": ["RWF"],
        "callingCode": ["250"],
        "capital": "Kigali",
        "altSpellings": ["RW", "Republic of Rwanda", "Repubulika y'u Rwanda", "R\u00e9publique du Rwanda"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English",
            "fra": "French",
            "kin": "Kinyarwanda"
        },
        "translations": {
            "deu": {"official": "Republik Ruanda", "common": "Ruanda"},
            "fra": {"official": "R\u00e9publique du Rwanda", "common": "Rwanda"},
            "hrv": {"official": "Republika Ruandi", "common": "Ruanda"},
            "ita": {"official": "Repubblica del Ruanda", "common": "Ruanda"},
            "jpn": {"official": "\u30eb\u30ef\u30f3\u30c0\u5171\u548c\u56fd", "common": "\u30eb\u30ef\u30f3\u30c0"},
            "nld": {"official": "Republiek Rwanda", "common": "Rwanda"},
            "por": {"official": "Rep\u00fablica do Ruanda", "common": "Ruanda"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0420\u0443\u0430\u043d\u0434\u0430", "common": "\u0420\u0443\u0430\u043d\u0434\u0430"},
            "spa": {"official": "Rep\u00fablica de Rwanda", "common": "Ruanda"},
            "fin": {"official": "Ruandan tasavalta", "common": "Ruanda"}
        },
        "latlng": [-2, 30],
        "demonym": "Rwandan",
        "landlocked": true,
        "borders": ["BDI", "COD", "TZA", "UGA"],
        "area": 26338
    },
    {
        "name": {
            "common": "Saudi Arabia",
            "official": "Kingdom of Saudi Arabia",
            "native": {
                "ara": {
                    "official": "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629",
                    "common": "\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"
                }
            }
        },
        "tld": [".sa", ".\u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"],
        "cca2": "SA",
        "ccn3": "682",
        "cca3": "SAU",
        "cioc": "KSA",
        "currency": ["SAR"],
        "callingCode": ["966"],
        "capital": "Riyadh",
        "altSpellings": ["Saudi", "SA", "Kingdom of Saudi Arabia", "Al-Mamlakah al-\u2018Arabiyyah as-Su\u2018\u016bdiyyah"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "deu": {"official": "K\u00f6nigreich Saudi-Arabien", "common": "Saudi-Arabien"},
            "fra": {"official": "Royaume d'Arabie Saoudite", "common": "Arabie Saoudite"},
            "hrv": {"official": "Kraljevina Saudijska Arabija", "common": "Saudijska Arabija"},
            "ita": {"official": "Arabia Saudita", "common": "Arabia Saudita"},
            "jpn": {"official": "\u30b5\u30a6\u30b8\u30a2\u30e9\u30d3\u30a2\u738b\u56fd", "common": "\u30b5\u30a6\u30b8\u30a2\u30e9\u30d3\u30a2"},
            "nld": {"official": "Koninkrijk van Saoedi-Arabi\u00eb", "common": "Saoedi-Arabi\u00eb"},
            "por": {"official": "Reino da Ar\u00e1bia Saudita", "common": "Ar\u00e1bia Saudita"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u0421\u0430\u0443\u0434\u043e\u0432\u0441\u043a\u0430\u044f \u0410\u0440\u0430\u0432\u0438\u044f", "common": "\u0421\u0430\u0443\u0434\u043e\u0432\u0441\u043a\u0430\u044f \u0410\u0440\u0430\u0432\u0438\u044f"},
            "spa": {"official": "Reino de Arabia Saudita", "common": "Arabia Saud\u00ed"},
            "fin": {"official": "Saudi-Arabian kuningaskunta", "common": "Saudi-Arabia"}
        },
        "latlng": [25, 45],
        "demonym": "Saudi Arabian",
        "landlocked": false,
        "borders": ["IRQ", "JOR", "KWT", "OMN", "QAT", "ARE", "YEM"],
        "area": 2149690
    },
    {
        "name": {
            "common": "Sudan",
            "official": "Republic of the Sudan",
            "native": {
                "ara": {
                    "official": "\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u0633\u0648\u062f\u0627\u0646",
                    "common": "\u0627\u0644\u0633\u0648\u062f\u0627\u0646"
                },
                "eng": {
                    "official": "Republic of the Sudan",
                    "common": "Sudan"
                }
            }
        },
        "tld": [".sd"],
        "cca2": "SD",
        "ccn3": "729",
        "cca3": "SDN",
        "cioc": "SUD",
        "currency": ["SDG"],
        "callingCode": ["249"],
        "capital": "Khartoum",
        "altSpellings": ["SD", "Republic of the Sudan", "Jumh\u016br\u012byat as-S\u016bd\u0101n"],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic",
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Republik Sudan", "common": "Sudan"},
            "fra": {"official": "R\u00e9publique du Soudan", "common": "Soudan"},
            "hrv": {"official": "Republika Sudan", "common": "Sudan"},
            "ita": {"official": "Repubblica del Sudan", "common": "Sudan"},
            "jpn": {"official": "\u30b9\u30fc\u30c0\u30f3\u5171\u548c\u56fd", "common": "\u30b9\u30fc\u30c0\u30f3"},
            "nld": {"official": "Republiek Soedan", "common": "Soedan"},
            "por": {"official": "Rep\u00fablica do Sud\u00e3o", "common": "Sud\u00e3o"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0443\u0434\u0430\u043d", "common": "\u0421\u0443\u0434\u0430\u043d"},
            "spa": {"official": "Rep\u00fablica de Sud\u00e1n", "common": "Sud\u00e1n"},
            "fin": {"official": "Sudanin tasavalta", "common": "Sudan"}
        },
        "latlng": [15, 30],
        "demonym": "Sudanese",
        "landlocked": false,
        "borders": ["CAF", "TCD", "EGY", "ERI", "ETH", "LBY", "SSD"],
        "area": 1886068
    },
    {
        "name": {
            "common": "Senegal",
            "official": "Republic of Senegal",
            "native": {
                "fra": {
                    "official": "R\u00e9publique du S\u00e9n\u00e9gal",
                    "common": "S\u00e9n\u00e9gal"
                }
            }
        },
        "tld": [".sn"],
        "cca2": "SN",
        "ccn3": "686",
        "cca3": "SEN",
        "cioc": "SEN",
        "currency": ["XOF"],
        "callingCode": ["221"],
        "capital": "Dakar",
        "altSpellings": ["SN", "Republic of Senegal", "R\u00e9publique du S\u00e9n\u00e9gal"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Republik Senegal", "common": "Senegal"},
            "fra": {"official": "R\u00e9publique du S\u00e9n\u00e9gal", "common": "S\u00e9n\u00e9gal"},
            "hrv": {"official": "Republika Senegal", "common": "Senegal"},
            "ita": {"official": "Repubblica del Senegal", "common": "Senegal"},
            "jpn": {"official": "\u30bb\u30cd\u30ac\u30eb\u5171\u548c\u56fd", "common": "\u30bb\u30cd\u30ac\u30eb"},
            "nld": {"official": "Republiek Senegal", "common": "Senegal"},
            "por": {"official": "Rep\u00fablica do Senegal", "common": "Senegal"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0435\u043d\u0435\u0433\u0430\u043b", "common": "\u0421\u0435\u043d\u0435\u0433\u0430\u043b"},
            "spa": {"official": "Rep\u00fablica de Senegal", "common": "Senegal"},
            "fin": {"official": "Senegalin tasavalta", "common": "Senegal"}
        },
        "latlng": [14, -14],
        "demonym": "Senegalese",
        "landlocked": false,
        "borders": ["GMB", "GIN", "GNB", "MLI", "MRT"],
        "area": 196722
    },
    {
        "name": {
            "common": "Singapore",
            "official": "Republic of Singapore",
            "native": {
                "cmn": {
                    "official": "\u65b0\u52a0\u5761\u5171\u548c\u56fd",
                    "common": "\u65b0\u52a0\u5761"
                },
                "eng": {
                    "official": "Republic of Singapore",
                    "common": "Singapore"
                },
                "msa": {
                    "official": "Republik Singapura",
                    "common": "Singapura"
                },
                "tam": {
                    "official": "\u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd \u0b95\u0bc1\u0b9f\u0bbf\u0baf\u0bb0\u0b9a\u0bc1",
                    "common": "\u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd"
                }
            }
        },
        "tld": [".sg", ".\u65b0\u52a0\u5761", ".\u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd"],
        "cca2": "SG",
        "ccn3": "702",
        "cca3": "SGP",
        "cioc": "SIN",
        "currency": ["SGD"],
        "callingCode": ["65"],
        "capital": "Singapore",
        "altSpellings": ["SG", "Singapura", "Republik Singapura", "\u65b0\u52a0\u5761\u5171\u548c\u56fd"],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "cmn": "Mandarin",
            "eng": "English",
            "msa": "Malay",
            "tam": "Tamil"
        },
        "translations": {
            "deu": {"official": "Republik Singapur", "common": "Singapur"},
            "fra": {"official": "R\u00e9publique de Singapour", "common": "Singapour"},
            "hrv": {"official": "Republika Singapur", "common": "Singapur"},
            "ita": {"official": "Repubblica di Singapore", "common": "Singapore"},
            "jpn": {"official": "\u30b7\u30f3\u30ac\u30dd\u30fc\u30eb\u5171\u548c\u56fd", "common": "\u30b7\u30f3\u30ac\u30dd\u30fc\u30eb"},
            "nld": {"official": "Republiek Singapore", "common": "Singapore"},
            "por": {"official": "Rep\u00fablica de Singapura", "common": "Singapura"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440", "common": "\u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440"},
            "spa": {"official": "Rep\u00fablica de Singapur", "common": "Singapur"},
            "fin": {"official": "Singaporen tasavalta", "common": "Singapore"}
        },
        "latlng": [1.36666666, 103.8],
        "demonym": "Singaporean",
        "landlocked": false,
        "borders": [],
        "area": 710
    },
    {
        "name": {
            "common": "South Georgia",
            "official": "South Georgia and the South Sandwich Islands",
            "native": {
                "eng": {
                    "official": "South Georgia and the South Sandwich Islands",
                    "common": "South Georgia"
                }
            }
        },
        "tld": [".gs"],
        "cca2": "GS",
        "ccn3": "239",
        "cca3": "SGS",
        "cioc": "",
        "currency": ["GBP"],
        "callingCode": ["500"],
        "capital": "King Edward Point",
        "altSpellings": ["GS", "South Georgia and the South Sandwich Islands"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "S\u00fcdgeorgien und die S\u00fcdlichen Sandwichinseln", "common": "S\u00fcdgeorgien und die S\u00fcdlichen Sandwichinseln"},
            "fra": {"official": "G\u00e9orgie du Sud et les \u00eeles Sandwich du Sud", "common": "G\u00e9orgie du Sud-et-les \u00celes Sandwich du Sud"},
            "hrv": {"official": "Ju\u017ena D\u017eord\u017eija i Otoci Ju\u017eni Sendvi\u010d", "common": "Ju\u017ena Georgija i oto\u010dje Ju\u017eni Sandwich"},
            "ita": {"official": "Georgia del Sud e isole Sandwich del Sud", "common": "Georgia del Sud e Isole Sandwich Meridionali"},
            "jpn": {"official": "\u30b5\u30a6\u30b9\u30b8\u30e7\u30fc\u30b8\u30a2\u00b7\u30b5\u30a6\u30b9\u30b5\u30f3\u30c9\u30a6\u30a3\u30c3\u30c1\u8af8\u5cf6", "common": "\u30b5\u30a6\u30b9\u30b8\u30e7\u30fc\u30b8\u30a2\u30fb\u30b5\u30a6\u30b9\u30b5\u30f3\u30c9\u30a6\u30a3\u30c3\u30c1\u8af8\u5cf6"},
            "nld": {"official": "Zuid-Georgi\u00eb en de Zuidelijke Sandwich-eilanden", "common": "Zuid-Georgia en Zuidelijke Sandwicheilanden"},
            "por": {"official": "Ge\u00f3rgia do Sul e Sandwich do Sul", "common": "Ilhas Ge\u00f3rgia do Sul e Sandwich do Sul"},
            "rus": {"official": "\u042e\u0436\u043d\u0430\u044f \u0413\u0435\u043e\u0440\u0433\u0438\u044f \u0438 \u042e\u0436\u043d\u044b\u0435 \u0421\u0430\u043d\u0434\u0432\u0438\u0447\u0435\u0432\u044b \u043e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u042e\u0436\u043d\u0430\u044f \u0413\u0435\u043e\u0440\u0433\u0438\u044f \u0438 \u042e\u0436\u043d\u044b\u0435 \u0421\u0430\u043d\u0434\u0432\u0438\u0447\u0435\u0432\u044b \u043e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "Georgia del Sur y las Islas Sandwich del Sur", "common": "Islas Georgias del Sur y Sandwich del Sur"},
            "fin": {"official": "Etel\u00e4-Georgia ja Etel\u00e4iset Sandwichsaaret", "common": "Etel\u00e4-Georgia ja Etel\u00e4iset Sandwichsaaret"}
        },
        "latlng": [-54.5, -37],
        "demonym": "South Georgian South Sandwich Islander",
        "landlocked": false,
        "borders": [],
        "area": 3903
    },
    {
        "name": {
            "common": "Svalbard and Jan Mayen",
            "official": "Svalbard og Jan Mayen",
            "native": {
                "nor": {
                    "official": "Svalbard og Jan Mayen",
                    "common": "Svalbard og Jan Mayen"
                }
            }
        },
        "tld": [".sj"],
        "cca2": "SJ",
        "ccn3": "744",
        "cca3": "SJM",
        "cioc": "",
        "currency": ["NOK"],
        "callingCode": ["4779"],
        "capital": "Longyearbyen",
        "altSpellings": ["SJ", "Svalbard and Jan Mayen Islands"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "nor": "Norwegian"
        },
        "translations": {
            "deu": {"official": "Inselgruppe Spitzbergen", "common": "Spitzbergen"},
            "fra": {"official": "Jan Mayen Svalbard", "common": "Svalbard et Jan Mayen"},
            "hrv": {"official": "Svalbard og Jan Mayen", "common": "Svalbard i Jan Mayen"},
            "ita": {"official": "Svalbard og Jan Mayen", "common": "Svalbard e Jan Mayen"},
            "jpn": {"official": "\u30b9\u30d0\u30fc\u30eb\u30d0\u30eb\u8af8\u5cf6OG\u30e4\u30f3\u30de\u30a4\u30a8\u30f3", "common": "\u30b9\u30f4\u30a1\u30fc\u30eb\u30d0\u30eb\u8af8\u5cf6\u304a\u3088\u3073\u30e4\u30f3\u30de\u30a4\u30a8\u30f3\u5cf6"},
            "nld": {"official": "Svalbard og Jan Mayen", "common": "Svalbard en Jan Mayen"},
            "por": {"official": "Svalbard og Jan Mayen", "common": "Ilhas Svalbard e Jan Mayen"},
            "rus": {"official": "\u0421\u0432\u0430\u043b\u044c\u0431\u0430\u0440\u0434\u0430 \u043e\u0433 \u042f\u043d-\u041c\u0430\u0439\u0435\u043d", "common": "\u0428\u043f\u0438\u0446\u0431\u0435\u0440\u0433\u0435\u043d \u0438 \u042f\u043d-\u041c\u0430\u0439\u0435\u043d"},
            "spa": {"official": "Svalbard og Jan Mayen", "common": "Islas Svalbard y Jan Mayen"},
            "fin": {"official": "Huippuvuoret", "common": "Huippuvuoret"}
        },
        "latlng": [78, 20],
        "demonym": "Norwegian",
        "landlocked": false,
        "borders": [],
        "area": -1
    },
    {
        "name": {
            "common": "Solomon Islands",
            "official": "Solomon Islands",
            "native": {
                "eng": {
                    "official": "Solomon Islands",
                    "common": "Solomon Islands"
                }
            }
        },
        "tld": [".sb"],
        "cca2": "SB",
        "ccn3": "090",
        "cca3": "SLB",
        "cioc": "SOL",
        "currency": ["SBD"],
        "callingCode": ["677"],
        "capital": "Honiara",
        "altSpellings": ["SB"],
        "region": "Oceania",
        "subregion": "Melanesia",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Salomon-Inseln", "common": "Salomonen"},
            "fra": {"official": "Iles Salomon", "common": "\u00celes Salomon"},
            "hrv": {"official": "Solomonski Otoci", "common": "Solomonski Otoci"},
            "ita": {"official": "Isole Salomone", "common": "Isole Salomone"},
            "jpn": {"official": "\u30bd\u30ed\u30e2\u30f3\u8af8\u5cf6", "common": "\u30bd\u30ed\u30e2\u30f3\u8af8\u5cf6"},
            "nld": {"official": "Solomon eilanden", "common": "Salomonseilanden"},
            "por": {"official": "Ilhas Salom\u00e3o", "common": "Ilhas Salom\u00e3o"},
            "rus": {"official": "\u0421\u043e\u043b\u043e\u043c\u043e\u043d\u043e\u0432\u044b \u043e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u0421\u043e\u043b\u043e\u043c\u043e\u043d\u043e\u0432\u044b \u041e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "islas Salom\u00f3n", "common": "Islas Salom\u00f3n"},
            "fin": {"official": "Salomonsaaret", "common": "Salomonsaaret"}
        },
        "latlng": [-8, 159],
        "demonym": "Solomon Islander",
        "landlocked": false,
        "borders": [],
        "area": 28896
    },
    {
        "name": {
            "common": "Sierra Leone",
            "official": "Republic of Sierra Leone",
            "native": {
                "eng": {
                    "official": "Republic of Sierra Leone",
                    "common": "Sierra Leone"
                }
            }
        },
        "tld": [".sl"],
        "cca2": "SL",
        "ccn3": "694",
        "cca3": "SLE",
        "cioc": "SLE",
        "currency": ["SLL"],
        "callingCode": ["232"],
        "capital": "Freetown",
        "altSpellings": ["SL", "Republic of Sierra Leone"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Republik Sierra Leone", "common": "Sierra Leone"},
            "fra": {"official": "R\u00e9publique de Sierra Leone", "common": "Sierra Leone"},
            "hrv": {"official": "Republika Sijera Leone", "common": "Sijera Leone"},
            "ita": {"official": "Repubblica della Sierra Leone", "common": "Sierra Leone"},
            "jpn": {"official": "\u30b7\u30a8\u30e9\u30ec\u30aa\u30cd\u5171\u548c\u56fd", "common": "\u30b7\u30a8\u30e9\u30ec\u30aa\u30cd"},
            "nld": {"official": "Republiek Sierra Leone", "common": "Sierra Leone"},
            "por": {"official": "Rep\u00fablica da Serra Leoa", "common": "Serra Leoa"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u044c\u0435\u0440\u0440\u0430- \u041b\u0435\u043e\u043d\u0435", "common": "\u0421\u044c\u0435\u0440\u0440\u0430-\u041b\u0435\u043e\u043d\u0435"},
            "spa": {"official": "Rep\u00fablica de Sierra Leona", "common": "Sierra Leone"},
            "fin": {"official": "Sierra Leonen tasavalta", "common": "Sierra Leone"}
        },
        "latlng": [8.5, -11.5],
        "demonym": "Sierra Leonean",
        "landlocked": false,
        "borders": ["GIN", "LBR"],
        "area": 71740
    },
    {
        "name": {
            "common": "El Salvador",
            "official": "Republic of El Salvador",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica de El Salvador",
                    "common": "El Salvador"
                }
            }
        },
        "tld": [".sv"],
        "cca2": "SV",
        "ccn3": "222",
        "cca3": "SLV",
        "cioc": "ESA",
        "currency": ["SVC", "USD"],
        "callingCode": ["503"],
        "capital": "San Salvador",
        "altSpellings": ["SV", "Republic of El Salvador", "Rep\u00fablica de El Salvador"],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "cym": {"official": "Republic of El Salvador", "common": "El Salvador"},
            "deu": {"official": "Republik El Salvador", "common": "El Salvador"},
            "fra": {"official": "R\u00e9publique d'El Salvador", "common": "Salvador"},
            "hrv": {"official": "Republika El Salvador", "common": "Salvador"},
            "ita": {"official": "Repubblica di El Salvador", "common": "El Salvador"},
            "jpn": {"official": "\u30a8\u30eb\u30b5\u30eb\u30d0\u30c9\u30eb\u5171\u548c\u56fd", "common": "\u30a8\u30eb\u30b5\u30eb\u30d0\u30c9\u30eb"},
            "nld": {"official": "Republiek El Salvador", "common": "El Salvador"},
            "por": {"official": "Rep\u00fablica de El Salvador", "common": "El Salvador"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u042d\u043b\u044c- \u0421\u0430\u043b\u044c\u0432\u0430\u0434\u043e\u0440", "common": "\u0421\u0430\u043b\u044c\u0432\u0430\u0434\u043e\u0440"},
            "spa": {"official": "Rep\u00fablica de El Salvador", "common": "El Salvador"},
            "fin": {"official": "El Salvadorin tasavalta", "common": "El Salvador"}
        },
        "latlng": [13.83333333, -88.91666666],
        "demonym": "Salvadoran",
        "landlocked": false,
        "borders": ["GTM", "HND"],
        "area": 21041
    },
    {
        "name": {
            "common": "San Marino",
            "official": "Most Serene Republic of San Marino",
            "native": {
                "ita": {
                    "official": "Serenissima Repubblica di San Marino",
                    "common": "San Marino"
                }
            }
        },
        "tld": [".sm"],
        "cca2": "SM",
        "ccn3": "674",
        "cca3": "SMR",
        "cioc": "SMR",
        "currency": ["EUR"],
        "callingCode": ["378"],
        "capital": "City of San Marino",
        "altSpellings": ["SM", "Republic of San Marino", "Repubblica di San Marino"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "ita": "Italian"
        },
        "translations": {
            "deu": {"official": "Republik San Marino", "common": "San Marino"},
            "fra": {"official": "S\u00e9r\u00e9nissime R\u00e9publique de Saint-Marin", "common": "Saint-Marin"},
            "hrv": {"official": "Ve\u0107ina Serene Republika San Marino", "common": "San Marino"},
            "ita": {"official": "Serenissima Repubblica di San Marino", "common": "San Marino"},
            "jpn": {"official": "\u30b5\u30f3\u30de\u30ea\u30ce\u306e\u307b\u3068\u3093\u3069\u30bb\u30ea\u30fc\u30cc\u5171\u548c\u56fd", "common": "\u30b5\u30f3\u30de\u30ea\u30ce"},
            "nld": {"official": "Meest Serene Republiek San Marino", "common": "San Marino"},
            "por": {"official": "Seren\u00edssima Rep\u00fablica de San Marino", "common": "San Marino"},
            "rus": {"official": "\u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e Serene \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0430\u043d- \u041c\u0430\u0440\u0438\u043d\u043e", "common": "\u0421\u0430\u043d-\u041c\u0430\u0440\u0438\u043d\u043e"},
            "spa": {"official": "Seren\u00edsima Rep\u00fablica de San Marino", "common": "San Marino"},
            "fin": {"official": "San Marinon seesteinen tasavalta", "common": "San Marino"}
        },
        "latlng": [43.76666666, 12.41666666],
        "demonym": "Sammarinese",
        "landlocked": true,
        "borders": ["ITA"],
        "area": 61
    },
    {
        "name": {
            "common": "Somalia",
            "official": "Federal Republic of Somalia",
            "native": {
                "ara": {
                    "official": "\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u0635\u0648\u0645\u0627\u0644\u200e\u200e",
                    "common": "\u0627\u0644\u0635\u0648\u0645\u0627\u0644\u200e\u200e"
                },
                "som": {
                    "official": "Jamhuuriyadda Federaalka Soomaaliya",
                    "common": "Soomaaliya"
                }
            }
        },
        "tld": [".so"],
        "cca2": "SO",
        "ccn3": "706",
        "cca3": "SOM",
        "cioc": "SOM",
        "currency": ["SOS"],
        "callingCode": ["252"],
        "capital": "Mogadishu",
        "altSpellings": ["SO", "a\u1e63-\u1e62\u016bm\u0101l", "Federal Republic of Somalia", "Jamhuuriyadda Federaalka Soomaaliya", "Jumh\u016briyyat a\u1e63-\u1e62\u016bm\u0101l al-Fider\u0101liyya"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "ara": "Arabic",
            "som": "Somali"
        },
        "translations": {
            "deu": {"official": "Bundesrepublik Somalia", "common": "Somalia"},
            "fra": {"official": "R\u00e9publique f\u00e9d\u00e9rale de la Somalie", "common": "Somalie"},
            "hrv": {"official": "Savezna Republika Somaliji", "common": "Somalija"},
            "ita": {"official": "Repubblica federale di Somalia", "common": "Somalia"},
            "jpn": {"official": "\u30bd\u30de\u30ea\u30a2\u9023\u90a6\u5171\u548c\u56fd", "common": "\u30bd\u30de\u30ea\u30a2"},
            "nld": {"official": "Federale Republiek Somali\u00eb", "common": "Somali\u00eb"},
            "por": {"official": "Rep\u00fablica Federal da Som\u00e1lia", "common": "Som\u00e1lia"},
            "rus": {"official": "\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u043e\u043c\u0430\u043b\u0438", "common": "\u0421\u043e\u043c\u0430\u043b\u0438"},
            "spa": {"official": "Rep\u00fablica Federal de Somalia", "common": "Somalia"},
            "fin": {"official": "Somalian liittotasavalta", "common": "Somalia"}
        },
        "latlng": [10, 49],
        "demonym": "Somali",
        "landlocked": false,
        "borders": ["DJI", "ETH", "KEN"],
        "area": 637657
    },
    {
        "name": {
            "common": "Saint Pierre and Miquelon",
            "official": "Saint Pierre and Miquelon",
            "native": {
                "fra": {
                    "official": "Collectivit\u00e9 territoriale de Saint-Pierre-et-Miquelon",
                    "common": "Saint-Pierre-et-Miquelon"
                }
            }
        },
        "tld": [".pm"],
        "cca2": "PM",
        "ccn3": "666",
        "cca3": "SPM",
        "cioc": "",
        "currency": ["EUR"],
        "callingCode": ["508"],
        "capital": "Saint-Pierre",
        "altSpellings": ["PM", "Collectivit\u00e9 territoriale de Saint-Pierre-et-Miquelon"],
        "region": "Americas",
        "subregion": "Northern America",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "St. Pierre und Miquelon", "common": "Saint-Pierre und Miquelon"},
            "fra": {"official": "Saint-Pierre-et-Miquelon", "common": "Saint-Pierre-et-Miquelon"},
            "hrv": {"official": "Saint Pierre i Miquelon", "common": "Sveti Petar i Mikelon"},
            "ita": {"official": "Saint Pierre e Miquelon", "common": "Saint-Pierre e Miquelon"},
            "jpn": {"official": "\u30b5\u30f3\u30d4\u30a8\u30fc\u30eb\u5cf6\u00b7\u30df\u30af\u30ed\u30f3\u5cf6", "common": "\u30b5\u30f3\u30d4\u30a8\u30fc\u30eb\u5cf6\u30fb\u30df\u30af\u30ed\u30f3\u5cf6"},
            "nld": {"official": "Saint-Pierre en Miquelon", "common": "Saint Pierre en Miquelon"},
            "por": {"official": "Saint Pierre e Miquelon", "common": "Saint-Pierre e Miquelon"},
            "rus": {"official": "\u0421\u0435\u043d-\u041f\u044c\u0435\u0440 \u0438 \u041c\u0438\u043a\u0435\u043b\u043e\u043d", "common": "\u0421\u0435\u043d-\u041f\u044c\u0435\u0440 \u0438 \u041c\u0438\u043a\u0435\u043b\u043e\u043d"},
            "spa": {"official": "San Pedro y Miquel\u00f3n", "common": "San Pedro y Miquel\u00f3n"},
            "fin": {"official": "Saint-Pierre ja Miquelon", "common": "Saint-Pierre ja Miquelon"}
        },
        "latlng": [46.83333333, -56.33333333],
        "demonym": "French",
        "landlocked": false,
        "borders": [],
        "area": 242
    },
    {
        "name": {
            "common": "Serbia",
            "official": "Republic of Serbia",
            "native": {
                "srp": {
                    "official": "\u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0440\u0431\u0438\u0458\u0430",
                    "common": "\u0421\u0440\u0431\u0438\u0458\u0430"
                }
            }
        },
        "tld": [".rs", ".\u0441\u0440\u0431"],
        "cca2": "RS",
        "ccn3": "688",
        "cca3": "SRB",
        "cioc": "SRB",
        "currency": ["RSD"],
        "callingCode": ["381"],
        "capital": "Belgrade",
        "altSpellings": ["RS", "Srbija", "Republic of Serbia", "\u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0440\u0431\u0438\u0458\u0430", "Republika Srbija"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "srp": "Serbian"
        },
        "translations": {
            "deu": {"official": "Republik Serbien", "common": "Serbien"},
            "fra": {"official": "R\u00e9publique de Serbie", "common": "Serbie"},
            "hrv": {"official": "Republika Srbija", "common": "Srbija"},
            "ita": {"official": "Repubblica di Serbia", "common": "Serbia"},
            "jpn": {"official": "\u30bb\u30eb\u30d3\u30a2\u5171\u548c\u56fd", "common": "\u30bb\u30eb\u30d3\u30a2"},
            "nld": {"official": "Republiek Servi\u00eb", "common": "Servi\u00eb"},
            "por": {"official": "Rep\u00fablica da S\u00e9rvia", "common": "S\u00e9rvia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0435\u0440\u0431\u0438\u044f", "common": "\u0421\u0435\u0440\u0431\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Serbia", "common": "Serbia"},
            "fin": {"official": "Serbian tasavalta", "common": "Serbia"}
        },
        "latlng": [44, 21],
        "demonym": "Serbian",
        "landlocked": true,
        "borders": ["BIH", "BGR", "HRV", "HUN", "KOS", "MKD", "MNE", "ROU"],
        "area": 88361
    },
    {
        "name": {
            "common": "South Sudan",
            "official": "Republic of South Sudan",
            "native": {
                "eng": {
                    "official": "Republic of South Sudan",
                    "common": "South Sudan"
                }
            }
        },
        "tld": [".ss"],
        "cca2": "SS",
        "ccn3": "728",
        "cca3": "SSD",
        "cioc": "",
        "currency": ["SSP"],
        "callingCode": ["211"],
        "capital": "Juba",
        "altSpellings": ["SS"],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Republik S\u00fcdsudan", "common": "S\u00fcdsudan"},
            "fra": {"official": "R\u00e9publique du Soudan du Sud", "common": "Soudan du Sud"},
            "hrv": {"official": "Republika Ju\u017eni Sudan", "common": "Ju\u017eni Sudan"},
            "ita": {"official": "Repubblica del Sudan del Sud", "common": "Sudan del sud"},
            "jpn": {"official": "\u5357\u30b9\u30fc\u30c0\u30f3\u5171\u548c\u56fd", "common": "\u5357\u30b9\u30fc\u30c0\u30f3"},
            "nld": {"official": "Republiek Zuid-Soedan", "common": "Zuid-Soedan"},
            "por": {"official": "Rep\u00fablica do Sud\u00e3o do Sul", "common": "Sud\u00e3o do Sul"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u042e\u0436\u043d\u044b\u0439 \u0421\u0443\u0434\u0430\u043d", "common": "\u042e\u0436\u043d\u044b\u0439 \u0421\u0443\u0434\u0430\u043d"},
            "spa": {"official": "Rep\u00fablica de Sud\u00e1n del Sur", "common": "Sud\u00e1n del Sur"},
            "fin": {"official": "Etel\u00e4-Sudanin tasavalta", "common": "Etel\u00e4-Sudan"}
        },
        "latlng": [7, 30],
        "demonym": "South Sudanese",
        "landlocked": true,
        "borders": ["CAF", "COD", "ETH", "KEN", "SDN", "UGA"],
        "area": 619745
    },
    {
        "name": {
            "common": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
            "official": "Democratic Republic of S\u00e3o Tom\u00e9 and Pr\u00edncipe",
            "native": {
                "por": {
                    "official": "Rep\u00fablica Democr\u00e1tica do S\u00e3o Tom\u00e9 e Pr\u00edncipe",
                    "common": "S\u00e3o Tom\u00e9 e Pr\u00edncipe"
                }
            }
        },
        "tld": [".st"],
        "cca2": "ST",
        "ccn3": "678",
        "cca3": "STP",
        "cioc": "STP",
        "currency": ["STD"],
        "callingCode": ["239"],
        "capital": "S\u00e3o Tom\u00e9",
        "altSpellings": ["ST", "Democratic Republic of S\u00e3o Tom\u00e9 and Pr\u00edncipe", "Sao Tome and Principe", "Rep\u00fablica Democr\u00e1tica de S\u00e3o Tom\u00e9 e Pr\u00edncipe"],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "deu": {"official": "Demokratische Republik S\u00e3o Tom\u00e9 und Pr\u00edncipe", "common": "S\u00e3o Tom\u00e9 und Pr\u00edncipe"},
            "fra": {"official": "R\u00e9publique d\u00e9mocratique de S\u00e3o Tom\u00e9 et Pr\u00edncipe", "common": "Sao Tom\u00e9-et-Principe"},
            "hrv": {"official": "Demokratska Republika S\u00e3o Tome i Principe", "common": "Sveti Toma i Princip"},
            "ita": {"official": "Repubblica democratica di S\u00e3o Tom\u00e9 e Pr\u00edncipe", "common": "S\u00e3o Tom\u00e9 e Pr\u00edncipe"},
            "jpn": {"official": "\u30b5\u30f3\u30c8\u30e1\u00b7\u30d7\u30ea\u30f3\u30b7\u30da\u6c11\u4e3b\u5171\u548c\u56fd", "common": "\u30b5\u30f3\u30c8\u30e1\u30fb\u30d7\u30ea\u30f3\u30b7\u30da"},
            "nld": {"official": "Democratische Republiek Sao Tom\u00e9 en Principe", "common": "Sao Tom\u00e9 en Principe"},
            "por": {"official": "Rep\u00fablica Democr\u00e1tica de S\u00e3o Tom\u00e9 e Pr\u00edncipe", "common": "S\u00e3o Tom\u00e9 e Pr\u00edncipe"},
            "rus": {"official": "\u0414\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0430\u043d-\u0422\u043e\u043c\u0435 \u0438 \u041f\u0440\u0438\u043d\u0441\u0438\u043f\u0438", "common": "\u0421\u0430\u043d-\u0422\u043e\u043c\u0435 \u0438 \u041f\u0440\u0438\u043d\u0441\u0438\u043f\u0438"},
            "spa": {"official": "Rep\u00fablica Democr\u00e1tica de Santo Tom\u00e9 y Pr\u00edncipe", "common": "Santo Tom\u00e9 y Pr\u00edncipe"},
            "fin": {"official": "S\u00e3o Tom\u00e9 ja Pr\u00edncipen demokraattinen tasavalta", "common": "S\u00e3o T\u00e9me ja Pr\u00edncipe"}
        },
        "latlng": [1, 7],
        "demonym": "Sao Tomean",
        "landlocked": false,
        "borders": [],
        "area": 964
    },
    {
        "name": {
            "common": "Suriname",
            "official": "Republic of Suriname",
            "native": {
                "nld": {
                    "official": "Republiek Suriname",
                    "common": "Suriname"
                }
            }
        },
        "tld": [".sr"],
        "cca2": "SR",
        "ccn3": "740",
        "cca3": "SUR",
        "cioc": "SUR",
        "currency": ["SRD"],
        "callingCode": ["597"],
        "capital": "Paramaribo",
        "altSpellings": ["SR", "Sarnam", "Sranangron", "Republic of Suriname", "Republiek Suriname"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "nld": "Dutch"
        },
        "translations": {
            "deu": {"official": "Republik Suriname", "common": "Suriname"},
            "fra": {"official": "R\u00e9publique du Suriname", "common": "Surinam"},
            "hrv": {"official": "Republika Surinam", "common": "Surinam"},
            "ita": {"official": "Repubblica del Suriname", "common": "Suriname"},
            "jpn": {"official": "\u30b9\u30ea\u30ca\u30e0\u5171\u548c\u56fd", "common": "\u30b9\u30ea\u30ca\u30e0"},
            "nld": {"official": "Republiek Suriname", "common": "Suriname"},
            "por": {"official": "Rep\u00fablica do Suriname", "common": "Suriname"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0443\u0440\u0438\u043d\u0430\u043c", "common": "\u0421\u0443\u0440\u0438\u043d\u0430\u043c"},
            "spa": {"official": "Rep\u00fablica de Suriname", "common": "Surinam"},
            "fin": {"official": "Surinamen tasavalta", "common": "Suriname"}
        },
        "latlng": [4, -56],
        "demonym": "Surinamer",
        "landlocked": false,
        "borders": ["BRA", "GUF", "GUY"],
        "area": 163820
    },
    {
        "name": {
            "common": "Slovakia",
            "official": "Slovak Republic",
            "native": {
                "slk": {
                    "official": "Slovensk\u00e1 republika",
                    "common": "Slovensko"
                }
            }
        },
        "tld": [".sk"],
        "cca2": "SK",
        "ccn3": "703",
        "cca3": "SVK",
        "cioc": "SVK",
        "currency": ["EUR"],
        "callingCode": ["421"],
        "capital": "Bratislava",
        "altSpellings": ["SK", "Slovak Republic", "Slovensk\u00e1 republika"],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "slk": "Slovak"
        },
        "translations": {
            "deu": {"official": "Slowakische Republik", "common": "Slowakei"},
            "fra": {"official": "R\u00e9publique slovaque", "common": "Slovaquie"},
            "hrv": {"official": "slova\u010dka", "common": "Slova\u010dka"},
            "ita": {"official": "Repubblica slovacca", "common": "Slovacchia"},
            "jpn": {"official": "\u30b9\u30ed\u30d0\u30ad\u30a2\u5171\u548c\u56fd", "common": "\u30b9\u30ed\u30d0\u30ad\u30a2"},
            "nld": {"official": "Slowaakse Republiek", "common": "Slowakije"},
            "por": {"official": "Rep\u00fablica Eslovaca", "common": "Eslov\u00e1quia"},
            "rus": {"official": "\u0421\u043b\u043e\u0432\u0430\u0446\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0421\u043b\u043e\u0432\u0430\u043a\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica Eslovaca", "common": "Rep\u00fablica Eslovaca"},
            "fin": {"official": "Slovakian tasavalta", "common": "Slovakia"}
        },
        "latlng": [48.66666666, 19.5],
        "demonym": "Slovak",
        "landlocked": true,
        "borders": ["AUT", "CZE", "HUN", "POL", "UKR"],
        "area": 49037
    },
    {
        "name": {
            "common": "Slovenia",
            "official": "Republic of Slovenia",
            "native": {
                "slv": {
                    "official": "Republika Slovenija",
                    "common": "Slovenija"
                }
            }
        },
        "tld": [".si"],
        "cca2": "SI",
        "ccn3": "705",
        "cca3": "SVN",
        "cioc": "SLO",
        "currency": ["EUR"],
        "callingCode": ["386"],
        "capital": "Ljubljana",
        "altSpellings": ["SI", "Republic of Slovenia", "Republika Slovenija"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "slv": "Slovene"
        },
        "translations": {
            "deu": {"official": "Republik Slowenien", "common": "Slowenien"},
            "fra": {"official": "R\u00e9publique de Slov\u00e9nie", "common": "Slov\u00e9nie"},
            "hrv": {"official": "Republika Slovenija", "common": "Slovenija"},
            "ita": {"official": "Repubblica di Slovenia", "common": "Slovenia"},
            "jpn": {"official": "\u30b9\u30ed\u30d9\u30cb\u30a2\u5171\u548c\u56fd", "common": "\u30b9\u30ed\u30d9\u30cb\u30a2"},
            "nld": {"official": "Republiek Sloveni\u00eb", "common": "Sloveni\u00eb"},
            "por": {"official": "Rep\u00fablica da Eslov\u00e9nia", "common": "Eslov\u00e9nia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u043b\u043e\u0432\u0435\u043d\u0438\u044f", "common": "\u0421\u043b\u043e\u0432\u0435\u043d\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Eslovenia", "common": "Eslovenia"},
            "fin": {"official": "Slovenian tasavalta", "common": "Slovenia"}
        },
        "latlng": [46.11666666, 14.81666666],
        "demonym": "Slovene",
        "landlocked": false,
        "borders": ["AUT", "HRV", "ITA", "HUN"],
        "area": 20273
    },
    {
        "name": {
            "common": "Sweden",
            "official": "Kingdom of Sweden",
            "native": {
                "swe": {
                    "official": "Konungariket Sverige",
                    "common": "Sverige"
                }
            }
        },
        "tld": [".se"],
        "cca2": "SE",
        "ccn3": "752",
        "cca3": "SWE",
        "cioc": "SWE",
        "currency": ["SEK"],
        "callingCode": ["46"],
        "capital": "Stockholm",
        "altSpellings": ["SE", "Kingdom of Sweden", "Konungariket Sverige"],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "swe": "Swedish"
        },
        "translations": {
            "deu": {"official": "K\u00f6nigreich Schweden", "common": "Schweden"},
            "fra": {"official": "Royaume de Su\u00e8de", "common": "Su\u00e8de"},
            "hrv": {"official": "Kraljevina \u0160vedska", "common": "\u0160vedska"},
            "ita": {"official": "Regno di Svezia", "common": "Svezia"},
            "jpn": {"official": "\u30b9\u30a6\u30a7\u30fc\u30c7\u30f3\u738b\u56fd", "common": "\u30b9\u30a6\u30a7\u30fc\u30c7\u30f3"},
            "nld": {"official": "Koninkrijk Zweden", "common": "Zweden"},
            "por": {"official": "Reino da Su\u00e9cia", "common": "Su\u00e9cia"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u0428\u0432\u0435\u0446\u0438\u044f", "common": "\u0428\u0432\u0435\u0446\u0438\u044f"},
            "spa": {"official": "Reino de Suecia", "common": "Suecia"},
            "fin": {"official": "Ruotsin kuningaskunta", "common": "Ruotsi"}
        },
        "latlng": [62, 15],
        "demonym": "Swedish",
        "landlocked": false,
        "borders": ["FIN", "NOR"],
        "area": 450295
    },
    {
        "name": {
            "common": "Swaziland",
            "official": "Kingdom of Swaziland",
            "native": {
                "eng": {
                    "official": "Kingdom of Swaziland",
                    "common": "Swaziland"
                },
                "ssw": {
                    "official": "Kingdom of Swaziland",
                    "common": "Swaziland"
                }
            }
        },
        "tld": [".sz"],
        "cca2": "SZ",
        "ccn3": "748",
        "cca3": "SWZ",
        "cioc": "SWZ",
        "currency": ["SZL"],
        "callingCode": ["268"],
        "capital": "Lobamba",
        "altSpellings": ["SZ", "weSwatini", "Swatini", "Ngwane", "Kingdom of Swaziland", "Umbuso waseSwatini"],
        "region": "Africa",
        "subregion": "Southern Africa",
        "languages": {
            "eng": "English",
            "ssw": "Swazi"
        },
        "translations": {
            "deu": {"official": "K\u00f6nigreich Swasiland", "common": "Swasiland"},
            "fra": {"official": "Royaume du Swaziland", "common": "Swaziland"},
            "hrv": {"official": "Kraljevina Svazi", "common": "Svazi"},
            "ita": {"official": "Regno dello Swaziland", "common": "Swaziland"},
            "jpn": {"official": "\u30b9\u30ef\u30b8\u30e9\u30f3\u30c9\u738b\u56fd", "common": "\u30b9\u30ef\u30b8\u30e9\u30f3\u30c9"},
            "nld": {"official": "Koninkrijk Swaziland", "common": "Swaziland"},
            "por": {"official": "Reino da Suazil\u00e2ndia", "common": "Suazil\u00e2ndia"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u0421\u0432\u0430\u0437\u0438\u043b\u0435\u043d\u0434", "common": "\u0421\u0432\u0430\u0437\u0438\u043b\u0435\u043d\u0434"},
            "spa": {"official": "Reino de Swazilandia", "common": "Suazilandia"},
            "fin": {"official": "Swazimaan kuningaskunta", "common": "Swazimaa"}
        },
        "latlng": [-26.5, 31.5],
        "demonym": "Swazi",
        "landlocked": true,
        "borders": ["MOZ", "ZAF"],
        "area": 17364
    },
    {
        "name": {
            "common": "Sint Maarten",
            "official": "Sint Maarten",
            "native": {
                "eng": {
                    "official": "Sint Maarten",
                    "common": "Sint Maarten"
                },
                "fra": {
                    "official": "Saint-Martin",
                    "common": "Saint-Martin"
                },
                "nld": {
                    "official": "Sint Maarten",
                    "common": "Sint Maarten"
                }
            }
        },
        "tld": [".sx"],
        "cca2": "SX",
        "ccn3": "534",
        "cca3": "SXM",
        "cioc": "",
        "currency": ["ANG"],
        "callingCode": ["1721"],
        "capital": "Philipsburg",
        "altSpellings": ["SX", "Sint Maarten (Dutch part)"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English",
            "fra": "French",
            "nld": "Dutch"
        },
        "translations": {
            "deu": {"official": "Sint Maarten", "common": "Sint Maarten"},
            "fra": {"official": "Sint Maarten", "common": "Saint-Martin"},
            "ita": {"official": "Sint Maarten", "common": "Sint Maarten"},
            "jpn": {"official": "\u30b7\u30f3\u30c8\u30de\u30fc\u30eb\u30c6\u30f3\u5cf6", "common": "\u30b7\u30f3\u30c8\u30fb\u30de\u30fc\u30eb\u30c6\u30f3"},
            "nld": {"official": "Sint Maarten", "common": "Sint Maarten"},
            "por": {"official": "Sint Maarten", "common": "S\u00e3o Martinho"},
            "rus": {"official": "\u0421\u0438\u043d\u0442-\u041c\u0430\u0430\u0440\u0442\u0435\u043d", "common": "\u0421\u0438\u043d\u0442-\u041c\u0430\u0440\u0442\u0435\u043d"},
            "spa": {"official": "Sint Maarten", "common": "Sint Maarten"},
            "fin": {"official": "Sint Maarten", "common": "Sint Maarten"}
        },
        "latlng": [18.033333, -63.05],
        "demonym": "St. Maartener",
        "landlocked": false,
        "borders": ["MAF"],
        "area": 34
    },
    {
        "name": {
            "common": "Seychelles",
            "official": "Republic of Seychelles",
            "native": {
                "crs": {
                    "official": "Repiblik Sesel",
                    "common": "Sesel"
                },
                "eng": {
                    "official": "Republic of Seychelles",
                    "common": "Seychelles"
                },
                "fra": {
                    "official": "R\u00e9publique des Seychelles",
                    "common": "Seychelles"
                }
            }
        },
        "tld": [".sc"],
        "cca2": "SC",
        "ccn3": "690",
        "cca3": "SYC",
        "cioc": "SEY",
        "currency": ["SCR"],
        "callingCode": ["248"],
        "capital": "Victoria",
        "altSpellings": ["SC", "Republic of Seychelles", "Repiblik Sesel", "R\u00e9publique des Seychelles"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "crs": "Seychellois Creole",
            "eng": "English",
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Republik der Seychellen", "common": "Seychellen"},
            "fra": {"official": "R\u00e9publique des Seychelles", "common": "Seychelles"},
            "hrv": {"official": "Republika Sej\u0161eli", "common": "Sej\u0161eli"},
            "ita": {"official": "Repubblica delle Seychelles", "common": "Seychelles"},
            "jpn": {"official": "\u30bb\u30a4\u30b7\u30a7\u30eb\u5171\u548c\u56fd", "common": "\u30bb\u30fc\u30b7\u30a7\u30eb"},
            "nld": {"official": "Republiek der Seychellen", "common": "Seychellen"},
            "por": {"official": "Rep\u00fablica das Seychelles", "common": "Seicheles"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0435\u0439\u0448\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u041e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u0421\u0435\u0439\u0448\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u041e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "Rep\u00fablica de las Seychelles", "common": "Seychelles"},
            "fin": {"official": "Seychellien tasavalta", "common": "Seychellit"}
        },
        "latlng": [-4.58333333, 55.66666666],
        "demonym": "Seychellois",
        "landlocked": false,
        "borders": [],
        "area": 452
    },
    {
        "name": {
            "common": "Syria",
            "official": "Syrian Arab Republic",
            "native": {
                "ara": {
                    "official": "\u0627\u0644\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0648\u0631\u064a\u0629",
                    "common": "\u0633\u0648\u0631\u064a\u0627"
                }
            }
        },
        "tld": [".sy", "\u0633\u0648\u0631\u064a\u0627."],
        "cca2": "SY",
        "ccn3": "760",
        "cca3": "SYR",
        "cioc": "SYR",
        "currency": ["SYP"],
        "callingCode": ["963"],
        "capital": "Damascus",
        "altSpellings": ["SY", "Syrian Arab Republic", "Al-Jumh\u016br\u012byah Al-\u02bbArab\u012byah As-S\u016br\u012byah"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "deu": {"official": "Arabische Republik Syrien", "common": "Syrien"},
            "fra": {"official": "R\u00e9publique arabe syrienne", "common": "Syrie"},
            "hrv": {"official": "Sirijska Arapska Republika", "common": "Sirija"},
            "ita": {"official": "Repubblica araba siriana", "common": "Siria"},
            "jpn": {"official": "\u30b7\u30ea\u30a2\u30a2\u30e9\u30d6\u5171\u548c\u56fd", "common": "\u30b7\u30ea\u30a2\u30fb\u30a2\u30e9\u30d6\u5171\u548c\u56fd"},
            "nld": {"official": "Syrische Arabische Republiek", "common": "Syri\u00eb"},
            "por": {"official": "Rep\u00fablica \u00c1rabe S\u00edria", "common": "S\u00edria"},
            "rus": {"official": "\u0421\u0438\u0440\u0438\u0439\u0441\u043a\u0430\u044f \u0410\u0440\u0430\u0431\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0421\u0438\u0440\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica \u00c1rabe Siria", "common": "Siria"},
            "fin": {"official": "Syyrian arabitasavalta", "common": "Syyria"}
        },
        "latlng": [35, 38],
        "demonym": "Syrian",
        "landlocked": false,
        "borders": ["IRQ", "ISR", "JOR", "LBN", "TUR"],
        "area": 185180
    },
    {
        "name": {
            "common": "Turks and Caicos Islands",
            "official": "Turks and Caicos Islands",
            "native": {
                "eng": {
                    "official": "Turks and Caicos Islands",
                    "common": "Turks and Caicos Islands"
                }
            }
        },
        "tld": [".tc"],
        "cca2": "TC",
        "ccn3": "796",
        "cca3": "TCA",
        "cioc": "",
        "currency": ["USD"],
        "callingCode": ["1649"],
        "capital": "Cockburn Town",
        "altSpellings": ["TC"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Turks und Caicos Inseln", "common": "Turks- und Caicosinseln"},
            "fra": {"official": "\u00celes Turques et Ca\u00efques", "common": "\u00celes Turques-et-Ca\u00efques"},
            "hrv": {"official": "Otoci Turks i Caicos", "common": "Otoci Turks i Caicos"},
            "ita": {"official": "Turks e Caicos", "common": "Isole Turks e Caicos"},
            "jpn": {"official": "\u30bf\u30fc\u30af\u30b9\u00b7\u30ab\u30a4\u30b3\u30b9\u8af8\u5cf6", "common": "\u30bf\u30fc\u30af\u30b9\u30fb\u30ab\u30a4\u30b3\u30b9\u8af8\u5cf6"},
            "nld": {"official": "Turks- en Caicoseilanden", "common": "Turks- en Caicoseilanden"},
            "por": {"official": "Ilhas Turks e Caicos", "common": "Ilhas Turks e Caicos"},
            "rus": {"official": "\u0422\u0435\u0440\u043a\u0441 \u0438 \u041a\u0430\u0439\u043a\u043e\u0441 \u043e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u0422\u0435\u0440\u043a\u0441 \u0438 \u041a\u0430\u0439\u043a\u043e\u0441"},
            "spa": {"official": "Islas Turcas y Caicos", "common": "Islas Turks y Caicos"},
            "fin": {"official": "Turks- ja Caicossaaret", "common": "Turks- ja Caicossaaret"}
        },
        "latlng": [21.75, -71.58333333],
        "demonym": "Turks and Caicos Islander",
        "landlocked": false,
        "borders": [],
        "area": 948
    },
    {
        "name": {
            "common": "Chad",
            "official": "Republic of Chad",
            "native": {
                "ara": {
                    "official": "\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u062a\u0634\u0627\u062f",
                    "common": "\u062a\u0634\u0627\u062f\u200e"
                },
                "fra": {
                    "official": "R\u00e9publique du Tchad",
                    "common": "Tchad"
                }
            }
        },
        "tld": [".td"],
        "cca2": "TD",
        "ccn3": "148",
        "cca3": "TCD",
        "cioc": "CHA",
        "currency": ["XAF"],
        "callingCode": ["235"],
        "capital": "N'Djamena",
        "altSpellings": ["TD", "Tchad", "Republic of Chad", "R\u00e9publique du Tchad"],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "ara": "Arabic",
            "fra": "French"
        },
        "translations": {
            "cym": {"official": "Republic of Chad", "common": "Tsiad"},
            "deu": {"official": "Republik Tschad", "common": "Tschad"},
            "fra": {"official": "R\u00e9publique du Tchad", "common": "Tchad"},
            "hrv": {"official": "\u010cadu", "common": "\u010cad"},
            "ita": {"official": "Repubblica del Ciad", "common": "Ciad"},
            "jpn": {"official": "\u30c1\u30e3\u30c9\u5171\u548c\u56fd", "common": "\u30c1\u30e3\u30c9"},
            "nld": {"official": "Republiek Tsjaad", "common": "Tsjaad"},
            "por": {"official": "Rep\u00fablica do Chade", "common": "Chade"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0427\u0430\u0434", "common": "\u0427\u0430\u0434"},
            "spa": {"official": "Rep\u00fablica de Chad", "common": "Chad"},
            "fin": {"official": "T\u0161adin tasavalta", "common": "T\u0161ad"}
        },
        "latlng": [15, 19],
        "demonym": "Chadian",
        "landlocked": true,
        "borders": ["CMR", "CAF", "LBY", "NER", "NGA", "SSD"],
        "area": 1284000
    },
    {
        "name": {
            "common": "Togo",
            "official": "Togolese Republic",
            "native": {
                "fra": {
                    "official": "R\u00e9publique togolaise",
                    "common": "Togo"
                }
            }
        },
        "tld": [".tg"],
        "cca2": "TG",
        "ccn3": "768",
        "cca3": "TGO",
        "cioc": "TOG",
        "currency": ["XOF"],
        "callingCode": ["228"],
        "capital": "Lom\u00e9",
        "altSpellings": ["TG", "Togolese", "Togolese Republic", "R\u00e9publique Togolaise"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Republik Togo", "common": "Togo"},
            "fra": {"official": "R\u00e9publique togolaise", "common": "Togo"},
            "hrv": {"official": "Togolese Republika", "common": "Togo"},
            "ita": {"official": "Repubblica del Togo", "common": "Togo"},
            "jpn": {"official": "\u30c8\u30fc\u30b4\u5171\u548c\u56fd", "common": "\u30c8\u30fc\u30b4"},
            "nld": {"official": "Republiek Togo", "common": "Togo"},
            "por": {"official": "Rep\u00fablica do Togo", "common": "Togo"},
            "rus": {"official": "\u0422\u043e\u0433\u043e \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0422\u043e\u0433\u043e"},
            "spa": {"official": "Rep\u00fablica de Togo", "common": "Togo"},
            "fin": {"official": "Togon tasavalta", "common": "Togo"}
        },
        "latlng": [8, 1.16666666],
        "demonym": "Togolese",
        "landlocked": false,
        "borders": ["BEN", "BFA", "GHA"],
        "area": 56785
    },
    {
        "name": {
            "common": "Thailand",
            "official": "Kingdom of Thailand",
            "native": {
                "tha": {
                    "official": "\u0e23\u0e32\u0e0a\u0e2d\u0e32\u0e13\u0e32\u0e08\u0e31\u0e01\u0e23\u0e44\u0e17\u0e22",
                    "common": "\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22"
                }
            }
        },
        "tld": [".th", ".\u0e44\u0e17\u0e22"],
        "cca2": "TH",
        "ccn3": "764",
        "cca3": "THA",
        "cioc": "THA",
        "currency": ["THB"],
        "callingCode": ["66"],
        "capital": "Bangkok",
        "altSpellings": ["TH", "Prathet", "Thai", "Kingdom of Thailand", "\u0e23\u0e32\u0e0a\u0e2d\u0e32\u0e13\u0e32\u0e08\u0e31\u0e01\u0e23\u0e44\u0e17\u0e22", "Ratcha Anachak Thai"],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "tha": "Thai"
        },
        "translations": {
            "deu": {"official": "K\u00f6nigreich Thailand", "common": "Thailand"},
            "fra": {"official": "Royaume de Tha\u00eflande", "common": "Tha\u00eflande"},
            "hrv": {"official": "Kraljevina Tajland", "common": "Tajland"},
            "ita": {"official": "Regno di Thailandia", "common": "Tailandia"},
            "jpn": {"official": "\u30bf\u30a4\u738b\u56fd", "common": "\u30bf\u30a4"},
            "nld": {"official": "Koninkrijk Thailand", "common": "Thailand"},
            "por": {"official": "Reino da Tail\u00e2ndia", "common": "Tail\u00e2ndia"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u0422\u0430\u0438\u043b\u0430\u043d\u0434", "common": "\u0422\u0430\u0438\u043b\u0430\u043d\u0434"},
            "spa": {"official": "Reino de Tailandia", "common": "Tailandia"},
            "fin": {"official": "Thaimaan kuningaskunta", "common": "Thaimaa"}
        },
        "latlng": [15, 100],
        "demonym": "Thai",
        "landlocked": false,
        "borders": ["MMR", "KHM", "LAO", "MYS"],
        "area": 513120
    },
    {
        "name": {
            "common": "Tajikistan",
            "official": "Republic of Tajikistan",
            "native": {
                "rus": {
                    "official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0430\u0434\u0436\u0438\u043a\u0438\u0441\u0442\u0430\u043d",
                    "common": "\u0422\u0430\u0434\u0436\u0438\u043a\u0438\u0441\u0442\u0430\u043d"
                },
                "tgk": {
                    "official": "\u04b6\u0443\u043c\u04b3\u0443\u0440\u0438\u0438 \u0422\u043e\u04b7\u0438\u043a\u0438\u0441\u0442\u043e\u043d",
                    "common": "\u0422\u043e\u04b7\u0438\u043a\u0438\u0441\u0442\u043e\u043d"
                }
            }
        },
        "tld": [".tj"],
        "cca2": "TJ",
        "ccn3": "762",
        "cca3": "TJK",
        "cioc": "TJK",
        "currency": ["TJS"],
        "callingCode": ["992"],
        "capital": "Dushanbe",
        "altSpellings": ["TJ", "To\u00e7ikiston", "Republic of Tajikistan", "\u04b6\u0443\u043c\u04b3\u0443\u0440\u0438\u0438 \u0422\u043e\u04b7\u0438\u043a\u0438\u0441\u0442\u043e\u043d", "\u00c7umhuriyi To\u00e7ikiston"],
        "region": "Asia",
        "subregion": "Central Asia",
        "languages": {
            "rus": "Russian",
            "tgk": "Tajik"
        },
        "translations": {
            "deu": {"official": "Republik Tadschikistan", "common": "Tadschikistan"},
            "fra": {"official": "R\u00e9publique du Tadjikistan", "common": "Tadjikistan"},
            "hrv": {"official": "Republika Tad\u017eikistan", "common": "Ta\u0111ikistan"},
            "ita": {"official": "Repubblica del Tajikistan", "common": "Tagikistan"},
            "jpn": {"official": "\u30bf\u30b8\u30ad\u30b9\u30bf\u30f3\u5171\u548c\u56fd", "common": "\u30bf\u30b8\u30ad\u30b9\u30bf\u30f3"},
            "nld": {"official": "Tadzjikistan", "common": "Tadzjikistan"},
            "por": {"official": "Rep\u00fablica do Tajiquist\u00e3o", "common": "Tajiquist\u00e3o"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0430\u0434\u0436\u0438\u043a\u0438\u0441\u0442\u0430\u043d", "common": "\u0422\u0430\u0434\u0436\u0438\u043a\u0438\u0441\u0442\u0430\u043d"},
            "spa": {"official": "Rep\u00fablica de Tayikist\u00e1n", "common": "Tayikist\u00e1n"},
            "fin": {"official": "Tad\u017eikistanin tasavalta", "common": "Tad\u017eikistan"}
        },
        "latlng": [39, 71],
        "demonym": "Tadzhik",
        "landlocked": true,
        "borders": ["AFG", "CHN", "KGZ", "UZB"],
        "area": 143100
    },
    {
        "name": {
            "common": "Tokelau",
            "official": "Tokelau",
            "native": {
                "eng": {
                    "official": "Tokelau",
                    "common": "Tokelau"
                },
                "smo": {
                    "official": "Tokelau",
                    "common": "Tokelau"
                },
                "tkl": {
                    "official": "Tokelau",
                    "common": "Tokelau"
                }
            }
        },
        "tld": [".tk"],
        "cca2": "TK",
        "ccn3": "772",
        "cca3": "TKL",
        "cioc": "",
        "currency": ["NZD"],
        "callingCode": ["690"],
        "capital": "Fakaofo",
        "altSpellings": ["TK"],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "smo": "Samoan",
            "tkl": "Tokelauan"
        },
        "translations": {
            "deu": {"official": "Tokelau", "common": "Tokelau"},
            "fra": {"official": "Tok\u00e9laou", "common": "Tokelau"},
            "hrv": {"official": "Tokelau", "common": "Tokelau"},
            "ita": {"official": "Tokelau", "common": "Isole Tokelau"},
            "jpn": {"official": "\u30c8\u30b1\u30e9\u30a6\u8af8\u5cf6", "common": "\u30c8\u30b1\u30e9\u30a6"},
            "nld": {"official": "Tokelau", "common": "Tokelau"},
            "por": {"official": "Tokelau", "common": "Tokelau"},
            "rus": {"official": "\u0422\u043e\u043a\u0435\u043b\u0430\u0443", "common": "\u0422\u043e\u043a\u0435\u043b\u0430\u0443"},
            "spa": {"official": "Tokelau", "common": "Islas Tokelau"},
            "fin": {"official": "Tokelau", "common": "Tokelau"}
        },
        "latlng": [-9, -172],
        "demonym": "Tokelauan",
        "landlocked": false,
        "borders": [],
        "area": 12
    },
    {
        "name": {
            "common": "Turkmenistan",
            "official": "Turkmenistan",
            "native": {
                "rus": {
                    "official": "\u0422\u0443\u0440\u043a\u043c\u0435\u043d\u0438\u0441\u0442\u0430\u043d",
                    "common": "\u0422\u0443\u0440\u043a\u043c\u0435\u043d\u0438\u044f"
                },
                "tuk": {
                    "official": "T\u00fcrkmenistan",
                    "common": "T\u00fcrkmenistan"
                }
            }
        },
        "tld": [".tm"],
        "cca2": "TM",
        "ccn3": "795",
        "cca3": "TKM",
        "cioc": "TKM",
        "currency": ["TMT"],
        "callingCode": ["993"],
        "capital": "Ashgabat",
        "altSpellings": ["TM"],
        "region": "Asia",
        "subregion": "Central Asia",
        "languages": {
            "rus": "Russian",
            "tuk": "Turkmen"
        },
        "translations": {
            "deu": {"official": "Turkmenistan", "common": "Turkmenistan"},
            "fra": {"official": "Turkm\u00e9nistan", "common": "Turkm\u00e9nistan"},
            "hrv": {"official": "Turkmenistan", "common": "Turkmenistan"},
            "ita": {"official": "Turkmenistan", "common": "Turkmenistan"},
            "jpn": {"official": "\u30c8\u30eb\u30af\u30e1\u30cb\u30b9\u30bf\u30f3", "common": "\u30c8\u30eb\u30af\u30e1\u30cb\u30b9\u30bf\u30f3"},
            "nld": {"official": "Turkmenistan", "common": "Turkmenistan"},
            "por": {"official": "Turcomenist\u00e3o", "common": "Turquemenist\u00e3o"},
            "rus": {"official": "\u0422\u0443\u0440\u043a\u043c\u0435\u043d\u0438\u0441\u0442\u0430\u043d", "common": "\u0422\u0443\u0440\u043a\u043c\u0435\u043d\u0438\u044f"},
            "spa": {"official": "Turkmenist\u00e1n", "common": "Turkmenist\u00e1n"},
            "fin": {"official": "Turkmenistan", "common": "Turkmenistan"}
        },
        "latlng": [40, 60],
        "demonym": "Turkmen",
        "landlocked": true,
        "borders": ["AFG", "IRN", "KAZ", "UZB"],
        "area": 488100
    },
    {
        "name": {
            "common": "Timor-Leste",
            "official": "Democratic Republic of Timor-Leste",
            "native": {
                "por": {
                    "official": "Rep\u00fablica Democr\u00e1tica de Timor-Leste",
                    "common": "Timor-Leste"
                },
                "tet": {
                    "official": "Rep\u00fablika Demokr\u00e1tika Tim\u00f3r-Leste",
                    "common": "Tim\u00f3r-Leste"
                }
            }
        },
        "tld": [".tl"],
        "cca2": "TL",
        "ccn3": "626",
        "cca3": "TLS",
        "cioc": "TLS",
        "currency": ["USD"],
        "callingCode": ["670"],
        "capital": "Dili",
        "altSpellings": ["TL", "East Timor", "Democratic Republic of Timor-Leste", "Rep\u00fablica Democr\u00e1tica de Timor-Leste", "Rep\u00fablika Demokr\u00e1tika Tim\u00f3r-Leste", "Tim\u00f3r Lorosa'e", "Timor Lorosae"],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "por": "Portuguese",
            "tet": "Tetum"
        },
        "translations": {
            "deu": {"official": "Demokratische Republik Timor-Leste", "common": "Timor-Leste"},
            "fra": {"official": "R\u00e9publique d\u00e9mocratique du Timor -Leste", "common": "Timor oriental"},
            "hrv": {"official": "Demokratska Republika Timor - Leste", "common": "Isto\u010dni Timor"},
            "ita": {"official": "Repubblica Democratica di Timor Est", "common": "Timor Est"},
            "jpn": {"official": "\u6771\u30c6\u30a3\u30e2\u30fc\u30eb\u6c11\u4e3b\u5171\u548c\u56fd", "common": "\u6771\u30c6\u30a3\u30e2\u30fc\u30eb"},
            "nld": {"official": "Democratische Republiek Oost - Timor", "common": "Oost-Timor"},
            "por": {"official": "Rep\u00fablica Democr\u00e1tica de Timor-Leste", "common": "Timor-Leste"},
            "rus": {"official": "\u0414\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0438\u043c\u043e\u0440 -\u041b\u0435\u0448\u0442\u0438", "common": "\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439 \u0422\u0438\u043c\u043e\u0440"},
            "spa": {"official": "Rep\u00fablica Democr\u00e1tica de Timor-Leste", "common": "Timor Oriental"},
            "fin": {"official": "It\u00e4-Timorin demokraattinen tasavalta", "common": "It\u00e4-Timor"}
        },
        "latlng": [-8.83333333, 125.91666666],
        "demonym": "East Timorese",
        "landlocked": false,
        "borders": ["IDN"],
        "area": 14874
    },
    {
        "name": {
            "common": "Tonga",
            "official": "Kingdom of Tonga",
            "native": {
                "eng": {
                    "official": "Kingdom of Tonga",
                    "common": "Tonga"
                },
                "ton": {
                    "official": "Kingdom of Tonga",
                    "common": "Tonga"
                }
            }
        },
        "tld": [".to"],
        "cca2": "TO",
        "ccn3": "776",
        "cca3": "TON",
        "cioc": "TGA",
        "currency": ["TOP"],
        "callingCode": ["676"],
        "capital": "Nuku'alofa",
        "altSpellings": ["TO"],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "ton": "Tongan"
        },
        "translations": {
            "deu": {"official": "K\u00f6nigreich Tonga", "common": "Tonga"},
            "fra": {"official": "Royaume des Tonga", "common": "Tonga"},
            "hrv": {"official": "Kraljevina Tonga", "common": "Tonga"},
            "ita": {"official": "Regno di Tonga", "common": "Tonga"},
            "jpn": {"official": "\u30c8\u30f3\u30ac\u738b\u56fd", "common": "\u30c8\u30f3\u30ac"},
            "nld": {"official": "Koninkrijk Tonga", "common": "Tonga"},
            "por": {"official": "Reino de Tonga", "common": "Tonga"},
            "rus": {"official": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u0422\u043e\u043d\u0433\u0430", "common": "\u0422\u043e\u043d\u0433\u0430"},
            "spa": {"official": "Reino de Tonga", "common": "Tonga"},
            "fin": {"official": "Tongan kuningaskunta", "common": "Tonga"}
        },
        "latlng": [-20, -175],
        "demonym": "Tongan",
        "landlocked": false,
        "borders": [],
        "area": 747
    },
    {
        "name": {
            "common": "Trinidad and Tobago",
            "official": "Republic of Trinidad and Tobago",
            "native": {
                "eng": {
                    "official": "Republic of Trinidad and Tobago",
                    "common": "Trinidad and Tobago"
                }
            }
        },
        "tld": [".tt"],
        "cca2": "TT",
        "ccn3": "780",
        "cca3": "TTO",
        "cioc": "TTO",
        "currency": ["TTD"],
        "callingCode": ["1868"],
        "capital": "Port of Spain",
        "altSpellings": ["TT", "Republic of Trinidad and Tobago"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Republik Trinidad und Tobago", "common": "Trinidad und Tobago"},
            "fra": {"official": "R\u00e9publique de Trinit\u00e9 -et-Tobago", "common": "Trinit\u00e9 et Tobago"},
            "hrv": {"official": "Republika Trinidad i Tobago", "common": "Trinidad i Tobago"},
            "ita": {"official": "Repubblica di Trinidad e Tobago", "common": "Trinidad e Tobago"},
            "jpn": {"official": "\u30c8\u30ea\u30cb\u30c0\u30fc\u30c9\u00b7\u30c8\u30d0\u30b4\u5171\u548c\u56fd", "common": "\u30c8\u30ea\u30cb\u30c0\u30fc\u30c9\u30fb\u30c8\u30d0\u30b4"},
            "nld": {"official": "Republiek Trinidad en Tobago", "common": "Trinidad en Tobago"},
            "por": {"official": "Rep\u00fablica de Trinidad e Tobago", "common": "Trinidade e Tobago"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0440\u0438\u043d\u0438\u0434\u0430\u0434 \u0438 \u0422\u043e\u0431\u0430\u0433\u043e", "common": "\u0422\u0440\u0438\u043d\u0438\u0434\u0430\u0434 \u0438 \u0422\u043e\u0431\u0430\u0433\u043e"},
            "spa": {"official": "Rep\u00fablica de Trinidad y Tobago", "common": "Trinidad y Tobago"},
            "fin": {"official": "Trinidadin ja Tobagon tasavalta", "common": "Trinidad ja Tobago"}
        },
        "latlng": [11, -61],
        "demonym": "Trinidadian",
        "landlocked": false,
        "borders": [],
        "area": 5130
    },
    {
        "name": {
            "common": "Tunisia",
            "official": "Tunisian Republic",
            "native": {
                "ara": {
                    "official": "\u0627\u0644\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u062a\u0648\u0646\u0633\u064a\u0629",
                    "common": "\u062a\u0648\u0646\u0633"
                }
            }
        },
        "tld": [".tn"],
        "cca2": "TN",
        "ccn3": "788",
        "cca3": "TUN",
        "cioc": "TUN",
        "currency": ["TND"],
        "callingCode": ["216"],
        "capital": "Tunis",
        "altSpellings": ["TN", "Republic of Tunisia", "al-Jumh\u016briyyah at-T\u016bnisiyyah"],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "deu": {"official": "Tunesische Republik", "common": "Tunesien"},
            "fra": {"official": "R\u00e9publique tunisienne", "common": "Tunisie"},
            "hrv": {"official": "Tuniski Republika", "common": "Tunis"},
            "ita": {"official": "Repubblica tunisina", "common": "Tunisia"},
            "jpn": {"official": "\u30c1\u30e5\u30cb\u30b8\u30a2\u5171\u548c\u56fd", "common": "\u30c1\u30e5\u30cb\u30b8\u30a2"},
            "nld": {"official": "Republiek Tunesi\u00eb", "common": "Tunesi\u00eb"},
            "por": {"official": "Rep\u00fablica da Tun\u00edsia", "common": "Tun\u00edsia"},
            "rus": {"official": "\u0422\u0443\u043d\u0438\u0441\u0441\u043a\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438", "common": "\u0422\u0443\u043d\u0438\u0441"},
            "spa": {"official": "Rep\u00fablica de T\u00fanez", "common": "T\u00fanez"},
            "fin": {"official": "Tunisian tasavalta", "common": "Tunisia"}
        },
        "latlng": [34, 9],
        "demonym": "Tunisian",
        "landlocked": false,
        "borders": ["DZA", "LBY"],
        "area": 163610
    },
    {
        "name": {
            "common": "Turkey",
            "official": "Republic of Turkey",
            "native": {
                "tur": {
                    "official": "T\u00fcrkiye Cumhuriyeti",
                    "common": "T\u00fcrkiye"
                }
            }
        },
        "tld": [".tr"],
        "cca2": "TR",
        "ccn3": "792",
        "cca3": "TUR",
        "cioc": "TUR",
        "currency": ["TRY"],
        "callingCode": ["90"],
        "capital": "Ankara",
        "altSpellings": ["TR", "Turkiye", "Republic of Turkey", "T\u00fcrkiye Cumhuriyeti"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "tur": "Turkish"
        },
        "translations": {
            "deu": {"official": "Republik T\u00fcrkei", "common": "T\u00fcrkei"},
            "fra": {"official": "R\u00e9publique de Turquie", "common": "Turquie"},
            "hrv": {"official": "Republika Turska", "common": "Turska"},
            "ita": {"official": "Repubblica di Turchia", "common": "Turchia"},
            "jpn": {"official": "\u30c8\u30eb\u30b3\u5171\u548c\u56fd", "common": "\u30c8\u30eb\u30b3"},
            "nld": {"official": "Republiek Turkije", "common": "Turkije"},
            "por": {"official": "Rep\u00fablica da Turquia", "common": "Turquia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0443\u0440\u0446\u0438\u0438", "common": "\u0422\u0443\u0440\u0446\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Turqu\u00eda", "common": "Turqu\u00eda"},
            "fin": {"official": "Turkin tasavalta", "common": "Turkki"}
        },
        "latlng": [39, 35],
        "demonym": "Turkish",
        "landlocked": false,
        "borders": ["ARM", "AZE", "BGR", "GEO", "GRC", "IRN", "IRQ", "SYR"],
        "area": 783562
    },
    {
        "name": {
            "common": "Tuvalu",
            "official": "Tuvalu",
            "native": {
                "eng": {
                    "official": "Tuvalu",
                    "common": "Tuvalu"
                },
                "tvl": {
                    "official": "Tuvalu",
                    "common": "Tuvalu"
                }
            }
        },
        "tld": [".tv"],
        "cca2": "TV",
        "ccn3": "798",
        "cca3": "TUV",
        "cioc": "TUV",
        "currency": ["AUD"],
        "callingCode": ["688"],
        "capital": "Funafuti",
        "altSpellings": ["TV"],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "tvl": "Tuvaluan"
        },
        "translations": {
            "deu": {"official": "Tuvalu", "common": "Tuvalu"},
            "fra": {"official": "Tuvalu", "common": "Tuvalu"},
            "hrv": {"official": "Tuvalu", "common": "Tuvalu"},
            "ita": {"official": "Tuvalu", "common": "Tuvalu"},
            "jpn": {"official": "\u30c4\u30d0\u30eb", "common": "\u30c4\u30d0\u30eb"},
            "nld": {"official": "Tuvalu", "common": "Tuvalu"},
            "por": {"official": "Tuvalu", "common": "Tuvalu"},
            "rus": {"official": "\u0422\u0443\u0432\u0430\u043b\u0443", "common": "\u0422\u0443\u0432\u0430\u043b\u0443"},
            "spa": {"official": "Tuvalu", "common": "Tuvalu"},
            "fin": {"official": "Tuvalu", "common": "Tuvalu"}
        },
        "latlng": [-8, 178],
        "demonym": "Tuvaluan",
        "landlocked": false,
        "borders": [],
        "area": 26
    },
    {
        "name": {
            "common": "Taiwan",
            "official": "Republic of China",
            "native": {
                "cmn": {
                    "official": "\u4e2d\u534e\u6c11\u56fd",
                    "common": "\u81fa\u7063"
                }
            }
        },
        "tld": [".tw", ".\u53f0\u6e7e", ".\u53f0\u7063"],
        "cca2": "TW",
        "ccn3": "158",
        "cca3": "TWN",
        "cioc": "TPE",
        "currency": ["TWD"],
        "callingCode": ["886"],
        "capital": "Taipei",
        "altSpellings": ["TW", "T\u00e1iw\u0101n", "Republic of China", "\u4e2d\u83ef\u6c11\u570b", "Zh\u014dnghu\u00e1 M\u00edngu\u00f3", "Chinese Taipei for IOC", "Taiwan, Province of China"],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "cmn": "Mandarin"
        },
        "translations": {
            "deu": {"official": "Republik China", "common": "Taiwan"},
            "fra": {"official": "R\u00e9publique de Chine", "common": "Ta\u00efwan"},
            "hrv": {"official": "Republika Kina", "common": "Tajvan"},
            "ita": {"official": "Repubblica popolare cinese", "common": "Taiwan"},
            "jpn": {"official": "\u4e2d\u83ef\u6c11\u56fd", "common": "\u53f0\u6e7e\uff08\u53f0\u6e7e\u7701/\u4e2d\u83ef\u6c11\u56fd\uff09"},
            "nld": {"official": "Republic of China", "common": "Taiwan"},
            "por": {"official": "Rep\u00fablica da China", "common": "Ilha Formosa"},
            "rus": {"official": "\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0422\u0430\u0439\u0432\u0430\u043d\u044c"},
            "spa": {"official": "Rep\u00fablica Popular de China", "common": "Taiw\u00e1n"},
            "fin": {"official": "Kiinan tasavalta", "common": "Taiwan"}
        },
        "latlng": [23.5, 121],
        "demonym": "Taiwanese",
        "landlocked": false,
        "borders": [],
        "area": 36193
    },
    {
        "name": {
            "common": "Tanzania",
            "official": "United Republic of Tanzania",
            "native": {
                "eng": {
                    "official": "United Republic of Tanzania",
                    "common": "Tanzania"
                },
                "swa": {
                    "official": "Jamhuri ya Muungano wa Tanzania",
                    "common": "Tanzania"
                }
            }
        },
        "tld": [".tz"],
        "cca2": "TZ",
        "ccn3": "834",
        "cca3": "TZA",
        "cioc": "TAN",
        "currency": ["TZS"],
        "callingCode": ["255"],
        "capital": "Dodoma",
        "altSpellings": ["TZ", "Tanzania, United Republic of", "United Republic of Tanzania", "Jamhuri ya Muungano wa Tanzania"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English",
            "swa": "Swahili"
        },
        "translations": {
            "deu": {"official": "Vereinigte Republik Tansania", "common": "Tansania"},
            "fra": {"official": "R\u00e9publique -Unie de Tanzanie", "common": "Tanzanie"},
            "hrv": {"official": "Ujedinjena Republika Tanzanija", "common": "Tanzanija"},
            "ita": {"official": "Repubblica Unita di Tanzania", "common": "Tanzania"},
            "jpn": {"official": "\u30bf\u30f3\u30b6\u30cb\u30a2\u9023\u5408\u5171\u548c\u56fd", "common": "\u30bf\u30f3\u30b6\u30cb\u30a2"},
            "nld": {"official": "Verenigde Republiek Tanzania", "common": "Tanzania"},
            "por": {"official": "Rep\u00fablica Unida da Tanz\u00e2nia", "common": "Tanz\u00e2nia"},
            "rus": {"official": "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0430\u043d\u0437\u0430\u043d\u0438\u044f", "common": "\u0422\u0430\u043d\u0437\u0430\u043d\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica Unida de Tanzania", "common": "Tanzania"},
            "fin": {"official": "Tansanian yhdistynyt tasavalta", "common": "Tansania"}
        },
        "latlng": [-6, 35],
        "demonym": "Tanzanian",
        "landlocked": false,
        "borders": ["BDI", "COD", "KEN", "MWI", "MOZ", "RWA", "UGA", "ZMB"],
        "area": 945087
    },
    {
        "name": {
            "common": "Uganda",
            "official": "Republic of Uganda",
            "native": {
                "eng": {
                    "official": "Republic of Uganda",
                    "common": "Uganda"
                },
                "swa": {
                    "official": "Republic of Uganda",
                    "common": "Uganda"
                }
            }
        },
        "tld": [".ug"],
        "cca2": "UG",
        "ccn3": "800",
        "cca3": "UGA",
        "cioc": "UGA",
        "currency": ["UGX"],
        "callingCode": ["256"],
        "capital": "Kampala",
        "altSpellings": ["UG", "Republic of Uganda", "Jamhuri ya Uganda"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English",
            "swa": "Swahili"
        },
        "translations": {
            "deu": {"official": "Republik Uganda", "common": "Uganda"},
            "fra": {"official": "R\u00e9publique de l'Ouganda", "common": "Uganda"},
            "hrv": {"official": "Republika Uganda", "common": "Uganda"},
            "ita": {"official": "Repubblica di Uganda", "common": "Uganda"},
            "jpn": {"official": "\u30a6\u30ac\u30f3\u30c0\u5171\u548c\u56fd", "common": "\u30a6\u30ac\u30f3\u30c0"},
            "nld": {"official": "Republiek Uganda", "common": "Oeganda"},
            "por": {"official": "Rep\u00fablica do Uganda", "common": "Uganda"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0423\u0433\u0430\u043d\u0434\u0430", "common": "\u0423\u0433\u0430\u043d\u0434\u0430"},
            "spa": {"official": "Rep\u00fablica de Uganda", "common": "Uganda"},
            "fin": {"official": "Ugandan tasavalta", "common": "Uganda"}
        },
        "latlng": [1, 32],
        "demonym": "Ugandan",
        "landlocked": true,
        "borders": ["COD", "KEN", "RWA", "SSD", "TZA"],
        "area": 241550
    },
    {
        "name": {
            "common": "Ukraine",
            "official": "Ukraine",
            "native": {
                "rus": {
                    "official": "\u0423\u043a\u0440\u0430\u0438\u043d\u0430",
                    "common": "\u0423\u043a\u0440\u0430\u0438\u043d\u0430"
                },
                "ukr": {
                    "official": "\u0423\u043a\u0440\u0430\u0457\u043d\u0430",
                    "common": "\u0423\u043a\u0440\u0430\u0457\u043d\u0430"
                }
            }
        },
        "tld": [".ua", ".\u0443\u043a\u0440"],
        "cca2": "UA",
        "ccn3": "804",
        "cca3": "UKR",
        "cioc": "UKR",
        "currency": ["UAH"],
        "callingCode": ["380"],
        "capital": "Kiev",
        "altSpellings": ["UA", "Ukrayina"],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "rus": "Russian",
            "ukr": "Ukrainian"
        },
        "translations": {
            "deu": {"official": "Ukraine", "common": "Ukraine"},
            "fra": {"official": "Ukraine", "common": "Ukraine"},
            "hrv": {"official": "Ukrajina", "common": "Ukrajina"},
            "ita": {"official": "Ucraina", "common": "Ucraina"},
            "jpn": {"official": "\u30a6\u30af\u30e9\u30a4\u30ca", "common": "\u30a6\u30af\u30e9\u30a4\u30ca"},
            "nld": {"official": "Oekra\u00efne", "common": "Oekra\u00efne"},
            "por": {"official": "Ucr\u00e2nia", "common": "Ucr\u00e2nia"},
            "rus": {"official": "\u0423\u043a\u0440\u0430\u0438\u043d\u0430", "common": "\u0423\u043a\u0440\u0430\u0438\u043d\u0430"},
            "spa": {"official": "Ucrania", "common": "Ucrania"},
            "fin": {"official": "Ukraina", "common": "Ukraina"}
        },
        "latlng": [49, 32],
        "demonym": "Ukrainian",
        "landlocked": false,
        "borders": ["BLR", "HUN", "MDA", "POL", "ROU", "RUS", "SVK"],
        "area": 603500
    },
    {
        "name": {
            "common": "United States Minor Outlying Islands",
            "official": "United States Minor Outlying Islands",
            "native": {
                "eng": {
                    "official": "United States Minor Outlying Islands",
                    "common": "United States Minor Outlying Islands"
                }
            }
        },
        "tld": [".us"],
        "cca2": "UM",
        "ccn3": "581",
        "cca3": "UMI",
        "cioc": "",
        "currency": ["USD"],
        "callingCode": [],
        "capital": "",
        "altSpellings": ["UM"],
        "region": "Americas",
        "subregion": "Northern America",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "USA, kleinere ausgelagerte Inseln", "common": "Kleinere Inselbesitzungen der Vereinigten Staaten"},
            "fra": {"official": "\u00celes mineures \u00e9loign\u00e9es des \u00c9tats-Unis", "common": "\u00celes mineures \u00e9loign\u00e9es des \u00c9tats-Unis"},
            "hrv": {"official": "Mali udaljeni otoci SAD-a", "common": "Mali udaljeni otoci SAD-a"},
            "ita": {"official": "Stati Uniti Isole Minori", "common": "Isole minori esterne degli Stati Uniti d'America"},
            "jpn": {"official": "\u30a2\u30e1\u30ea\u30ab\u5408\u8846\u56fd\u5916\u8af8\u5cf6", "common": "\u5408\u8846\u56fd\u9818\u6709\u5c0f\u96e2\u5cf6"},
            "nld": {"official": "Kleine afgelegen eilanden van de Verenigde Staten", "common": "Kleine afgelegen eilanden van de Verenigde Staten"},
            "por": {"official": "Estados Unidos Ilhas Menores Distantes", "common": "Ilhas Menores Distantes dos Estados Unidos"},
            "rus": {"official": "\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u043c\u0430\u043b\u044b\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430 \u0421\u0428\u0410", "common": "\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u043c\u0430\u043b\u044b\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430 \u0421\u0428\u0410"},
            "spa": {"official": "Estados Unidos Islas menores alejadas de", "common": "Islas Ultramarinas Menores de Estados Unidos"},
            "fin": {"official": "Yhdysvaltain asumattomat saaret", "common": "Yhdysvaltain asumattomat saaret"}
        },
        "latlng": [],
        "demonym": "American",
        "landlocked": false,
        "borders": [],
        "area": 34.2
    },
    {
        "name": {
            "common": "Uruguay",
            "official": "Oriental Republic of Uruguay",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica Oriental del Uruguay",
                    "common": "Uruguay"
                }
            }
        },
        "tld": [".uy"],
        "cca2": "UY",
        "ccn3": "858",
        "cca3": "URY",
        "cioc": "URU",
        "currency": ["UYI", "UYU"],
        "callingCode": ["598"],
        "capital": "Montevideo",
        "altSpellings": ["UY", "Oriental Republic of Uruguay", "Rep\u00fablica Oriental del Uruguay"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "Republik \u00d6stlich des Uruguay", "common": "Uruguay"},
            "fra": {"official": "R\u00e9publique orientale de l'Uruguay", "common": "Uruguay"},
            "hrv": {"official": "Orijentalna Republika Urugvaj", "common": "Urugvaj"},
            "ita": {"official": "Repubblica Orientale dell'Uruguay", "common": "Uruguay"},
            "jpn": {"official": "\u30a6\u30eb\u30b0\u30a2\u30a4\u6771\u65b9\u5171\u548c\u56fd", "common": "\u30a6\u30eb\u30b0\u30a2\u30a4"},
            "nld": {"official": "Oosterse Republiek Uruguay", "common": "Uruguay"},
            "por": {"official": "Rep\u00fablica Oriental do Uruguai", "common": "Uruguai"},
            "rus": {"official": "\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u0423\u0440\u0443\u0433\u0432\u0430\u0439", "common": "\u0423\u0440\u0443\u0433\u0432\u0430\u0439"},
            "spa": {"official": "Rep\u00fablica Oriental del Uruguay", "common": "Uruguay"},
            "fin": {"official": "Uruguayn it\u00e4inen tasavalta", "common": "Uruguay"}
        },
        "latlng": [-33, -56],
        "demonym": "Uruguayan",
        "landlocked": false,
        "borders": ["ARG", "BRA"],
        "area": 181034
    },
    {
        "name": {
            "common": "United States",
            "official": "United States of America",
            "native": {
                "eng": {
                    "official": "United States of America",
                    "common": "United States"
                }
            }
        },
        "tld": [".us"],
        "cca2": "US",
        "ccn3": "840",
        "cca3": "USA",
        "cioc": "USA",
        "currency": ["USD", "USN", "USS"],
        "callingCode": ["1"],
        "capital": "Washington D.C.",
        "altSpellings": ["US", "USA", "United States of America"],
        "region": "Americas",
        "subregion": "Northern America",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Vereinigte Staaten von Amerika", "common": "Vereinigte Staaten von Amerika"},
            "fra": {"official": "Les \u00e9tats-unis d'Am\u00e9rique", "common": "\u00c9tats-Unis"},
            "hrv": {"official": "Sjedinjene Dr\u017eave Amerike", "common": "Sjedinjene Ameri\u010dke Dr\u017eave"},
            "ita": {"official": "Stati Uniti d'America", "common": "Stati Uniti D'America"},
            "jpn": {"official": "\u30a2\u30e1\u30ea\u30ab\u5408\u8846\u56fd", "common": "\u30a2\u30e1\u30ea\u30ab\u5408\u8846\u56fd"},
            "nld": {"official": "Verenigde Staten van Amerika", "common": "Verenigde Staten"},
            "por": {"official": "Estados Unidos da Am\u00e9rica", "common": "Estados Unidos"},
            "rus": {"official": "\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0435 \u0428\u0442\u0430\u0442\u044b \u0410\u043c\u0435\u0440\u0438\u043a\u0438", "common": "\u0421\u043e\u0435\u0434\u0438\u043d\u0451\u043d\u043d\u044b\u0435 \u0428\u0442\u0430\u0442\u044b \u0410\u043c\u0435\u0440\u0438\u043a\u0438"},
            "spa": {"official": "Estados Unidos de Am\u00e9rica", "common": "Estados Unidos"},
            "fin": {"official": "Amerikan yhdysvallat", "common": "Yhdysvallat"}
        },
        "latlng": [38, -97],
        "demonym": "American",
        "landlocked": false,
        "borders": ["CAN", "MEX"],
        "area": 9372610
    },
    {
        "name": {
            "common": "Uzbekistan",
            "official": "Republic of Uzbekistan",
            "native": {
                "rus": {
                    "official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0423\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u0430\u043d",
                    "common": "\u0423\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u0430\u043d"
                },
                "uzb": {
                    "official": "O'zbekiston Respublikasi",
                    "common": "O\u2018zbekiston"
                }
            }
        },
        "tld": [".uz"],
        "cca2": "UZ",
        "ccn3": "860",
        "cca3": "UZB",
        "cioc": "UZB",
        "currency": ["UZS"],
        "callingCode": ["998"],
        "capital": "Tashkent",
        "altSpellings": ["UZ", "Republic of Uzbekistan", "O\u2018zbekiston Respublikasi", "\u040e\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u043e\u043d \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0441\u0438"],
        "region": "Asia",
        "subregion": "Central Asia",
        "languages": {
            "rus": "Russian",
            "uzb": "Uzbek"
        },
        "translations": {
            "deu": {"official": "Republik Usbekistan", "common": "Usbekistan"},
            "fra": {"official": "R\u00e9publique d'Ouzb\u00e9kistan", "common": "Ouzb\u00e9kistan"},
            "hrv": {"official": "Republika Uzbekistan", "common": "Uzbekistan"},
            "ita": {"official": "Repubblica di Uzbekistan", "common": "Uzbekistan"},
            "jpn": {"official": "\u30a6\u30ba\u30d9\u30ad\u30b9\u30bf\u30f3\u5171\u548c\u56fd", "common": "\u30a6\u30ba\u30d9\u30ad\u30b9\u30bf\u30f3"},
            "nld": {"official": "Republiek Oezbekistan", "common": "Oezbekistan"},
            "por": {"official": "Rep\u00fablica do Usbequist\u00e3o", "common": "Uzbequist\u00e3o"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0423\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u0430\u043d", "common": "\u0423\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u0430\u043d"},
            "spa": {"official": "Rep\u00fablica de Uzbekist\u00e1n", "common": "Uzbekist\u00e1n"},
            "fin": {"official": "Uzbekistanin tasavalta", "common": "Uzbekistan"}
        },
        "latlng": [41, 64],
        "demonym": "Uzbekistani",
        "landlocked": true,
        "borders": ["AFG", "KAZ", "KGZ", "TJK", "TKM"],
        "area": 447400
    },
    {
        "name": {
            "common": "Vatican City",
            "official": "Vatican City State",
            "native": {
                "ita": {
                    "official": "Stato della Citt\u00e0 del Vaticano",
                    "common": "Vaticano"
                },
                "lat": {
                    "official": "Status Civitatis Vatican\u00e6",
                    "common": "Vatican\u00e6"
                }
            }
        },
        "tld": [".va"],
        "cca2": "VA",
        "ccn3": "336",
        "cca3": "VAT",
        "cioc": "",
        "currency": ["EUR"],
        "callingCode": ["3906698", "379"],
        "capital": "Vatican City",
        "altSpellings": ["VA", "Holy See (Vatican City State)", "Vatican City State", "Stato della Citt\u00e0 del Vaticano"],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "ita": "Italian",
            "lat": "Latin"
        },
        "translations": {
            "deu": {"official": "Staat Vatikanstadt", "common": "Vatikanstadt"},
            "fra": {"official": "Cit\u00e9 du Vatican", "common": "Cit\u00e9 du Vatican"},
            "hrv": {"official": "Vatikan", "common": "Vatikan"},
            "ita": {"official": "Citt\u00e0 del Vaticano", "common": "Citt\u00e0 del Vaticano"},
            "jpn": {"official": "\u30d0\u30c1\u30ab\u30f3\u5e02\u56fd\u306e\u72b6\u614b", "common": "\u30d0\u30c1\u30ab\u30f3\u5e02\u56fd"},
            "nld": {"official": "Vaticaanstad", "common": "Vaticaanstad"},
            "por": {"official": "Cidade do Vaticano", "common": "Cidade do Vaticano"},
            "rus": {"official": "\u0413\u043e\u0440\u043e\u0434-\u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u0412\u0430\u0442\u0438\u043a\u0430\u043d", "common": "\u0412\u0430\u0442\u0438\u043a\u0430\u043d"},
            "spa": {"official": "Ciudad del Vaticano", "common": "Ciudad del Vaticano"},
            "fin": {"official": "Vatikaanin kaupunkivaltio", "common": "Vatikaani"}
        },
        "latlng": [41.9, 12.45],
        "demonym": "Italian",
        "landlocked": true,
        "borders": ["ITA"],
        "area": 0.44
    },
    {
        "name": {
            "common": "Saint Vincent and the Grenadines",
            "official": "Saint Vincent and the Grenadines",
            "native": {
                "eng": {
                    "official": "Saint Vincent and the Grenadines",
                    "common": "Saint Vincent and the Grenadines"
                }
            }
        },
        "tld": [".vc"],
        "cca2": "VC",
        "ccn3": "670",
        "cca3": "VCT",
        "cioc": "VIN",
        "currency": ["XCD"],
        "callingCode": ["1784"],
        "capital": "Kingstown",
        "altSpellings": ["VC"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "St. Vincent und die Grenadinen", "common": "Saint Vincent und die Grenadinen"},
            "fra": {"official": "Saint-Vincent- et-les Grenadines", "common": "Saint-Vincent-et-les-Grenadines"},
            "hrv": {"official": "Sveti Vincent i Grenadini", "common": "Sveti Vincent i Grenadini"},
            "ita": {"official": "Saint Vincent e Grenadine", "common": "Saint Vincent e Grenadine"},
            "jpn": {"official": "\u30bb\u30f3\u30c8\u30d3\u30f3\u30bb\u30f3\u30c8\u304a\u3088\u3073\u30b0\u30ec\u30ca\u30c7\u30a3\u30fc\u30f3\u8af8\u5cf6", "common": "\u30bb\u30f3\u30c8\u30d3\u30f3\u30bb\u30f3\u30c8\u304a\u3088\u3073\u30b0\u30ec\u30ca\u30c7\u30a3\u30fc\u30f3\u8af8\u5cf6"},
            "nld": {"official": "Saint Vincent en de Grenadines", "common": "Saint Vincent en de Grenadines"},
            "por": {"official": "S\u00e3o Vicente e Granadinas", "common": "S\u00e3o Vincente e Granadinas"},
            "rus": {"official": "\u0421\u0435\u043d\u0442-\u0412\u0438\u043d\u0441\u0435\u043d\u0442 \u0438 \u0413\u0440\u0435\u043d\u0430\u0434\u0438\u043d\u044b", "common": "\u0421\u0435\u043d\u0442-\u0412\u0438\u043d\u0441\u0435\u043d\u0442 \u0438 \u0413\u0440\u0435\u043d\u0430\u0434\u0438\u043d\u044b"},
            "spa": {"official": "San Vicente y las Granadinas", "common": "San Vicente y Granadinas"},
            "fin": {"official": "Saint Vincent ja Grenadiinit", "common": "Saint Vincent ja Grenadiinit"}
        },
        "latlng": [13.25, -61.2],
        "demonym": "Saint Vincentian",
        "landlocked": false,
        "borders": [],
        "area": 389
    },
    {
        "name": {
            "common": "Venezuela",
            "official": "Bolivarian Republic of Venezuela",
            "native": {
                "spa": {
                    "official": "Rep\u00fablica Bolivariana de Venezuela",
                    "common": "Venezuela"
                }
            }
        },
        "tld": [".ve"],
        "cca2": "VE",
        "ccn3": "862",
        "cca3": "VEN",
        "cioc": "VEN",
        "currency": ["VEF"],
        "callingCode": ["58"],
        "capital": "Caracas",
        "altSpellings": ["VE", "Bolivarian Republic of Venezuela", "Venezuela, Bolivarian Republic of", "Rep\u00fablica Bolivariana de Venezuela"],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "deu": {"official": "Bolivarische Republik Venezuela", "common": "Venezuela"},
            "fra": {"official": "R\u00e9publique bolivarienne du Venezuela", "common": "Venezuela"},
            "hrv": {"official": "BOLIVARIJANSKA Republika Venezuela", "common": "Venezuela"},
            "ita": {"official": "Repubblica Bolivariana del Venezuela", "common": "Venezuela"},
            "jpn": {"official": "\u30d9\u30cd\u30ba\u30a8\u30e9\u00b7\u30dc\u30ea\u30d0\u30eb\u5171\u548c\u56fd", "common": "\u30d9\u30cd\u30ba\u30a8\u30e9\u30fb\u30dc\u30ea\u30d0\u30eb\u5171\u548c\u56fd"},
            "nld": {"official": "Bolivariaanse Republiek Venezuela", "common": "Venezuela"},
            "por": {"official": "Rep\u00fablica Bolivariana da Venezuela", "common": "Venezuela"},
            "rus": {"official": "\u0411\u043e\u043b\u0438\u0432\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0412\u0435\u043d\u0435\u0441\u0443\u044d\u043b\u0430", "common": "\u0412\u0435\u043d\u0435\u0441\u0443\u044d\u043b\u0430"},
            "spa": {"official": "Rep\u00fablica Bolivariana de Venezuela", "common": "Venezuela"},
            "fin": {"official": "Venezuelan bolivariaainen tasavalta", "common": "Venezuela"}
        },
        "latlng": [8, -66],
        "demonym": "Venezuelan",
        "landlocked": false,
        "borders": ["BRA", "COL", "GUY"],
        "area": 916445
    },
    {
        "name": {
            "common": "British Virgin Islands",
            "official": "Virgin Islands",
            "native": {
                "eng": {
                    "official": "Virgin Islands",
                    "common": "British Virgin Islands"
                }
            }
        },
        "tld": [".vg"],
        "cca2": "VG",
        "ccn3": "092",
        "cca3": "VGB",
        "cioc": "IVB",
        "currency": ["USD"],
        "callingCode": ["1284"],
        "capital": "Road Town",
        "altSpellings": ["VG", "Virgin Islands, British"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Jungferninseln", "common": "Britische Jungferninseln"},
            "fra": {"official": "\u00eeles Vierges", "common": "\u00celes Vierges britanniques"},
            "hrv": {"official": "Djevi\u010danski Otoci", "common": "Britanski Djevi\u010danski Otoci"},
            "ita": {"official": "Isole Vergini", "common": "Isole Vergini Britanniche"},
            "jpn": {"official": "\u30d0\u30fc\u30b8\u30f3\u8af8\u5cf6", "common": "\u30a4\u30ae\u30ea\u30b9\u9818\u30f4\u30a1\u30fc\u30b8\u30f3\u8af8\u5cf6"},
            "nld": {"official": "Maagdeneilanden", "common": "Britse Maagdeneilanden"},
            "por": {"official": "Ilhas Virgens", "common": "Ilhas Virgens"},
            "rus": {"official": "\u0412\u0438\u0440\u0433\u0438\u043d\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u0411\u0440\u0438\u0442\u0430\u043d\u0441\u043a\u0438\u0435 \u0412\u0438\u0440\u0433\u0438\u043d\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "Islas V\u00edrgenes", "common": "Islas V\u00edrgenes del Reino Unido"},
            "fin": {"official": "Brittil\u00e4iset Neitsytsaaret", "common": "Neitsytsaaret"}
        },
        "latlng": [18.431383, -64.62305],
        "demonym": "Virgin Islander",
        "landlocked": false,
        "borders": [],
        "area": 151
    },
    {
        "name": {
            "common": "United States Virgin Islands",
            "official": "Virgin Islands of the United States",
            "native": {
                "eng": {
                    "official": "Virgin Islands of the United States",
                    "common": "United States Virgin Islands"
                }
            }
        },
        "tld": [".vi"],
        "cca2": "VI",
        "ccn3": "850",
        "cca3": "VIR",
        "cioc": "ISV",
        "currency": ["USD"],
        "callingCode": ["1340"],
        "capital": "Charlotte Amalie",
        "altSpellings": ["VI", "Virgin Islands, U.S."],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Jungferninseln der Vereinigten Staaten", "common": "Amerikanische Jungferninseln"},
            "fra": {"official": "\u00celes Vierges des \u00c9tats-Unis", "common": "\u00celes Vierges des \u00c9tats-Unis"},
            "hrv": {"official": "Djevi\u010danski Otoci SAD", "common": "Ameri\u010dki Djevi\u010danski Otoci"},
            "ita": {"official": "Isole Vergini degli Stati Uniti", "common": "Isole Vergini americane"},
            "jpn": {"official": "\u7c73\u56fd\u306e\u30d0\u30fc\u30b8\u30f3\u8af8\u5cf6", "common": "\u30a2\u30e1\u30ea\u30ab\u9818\u30f4\u30a1\u30fc\u30b8\u30f3\u8af8\u5cf6"},
            "nld": {"official": "Maagdeneilanden van de Verenigde Staten", "common": "Amerikaanse Maagdeneilanden"},
            "por": {"official": "Ilhas Virgens dos Estados Unidos", "common": "Ilhas Virgens dos Estados Unidos"},
            "rus": {"official": "\u0412\u0438\u0440\u0433\u0438\u043d\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430 \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0445 \u0428\u0442\u0430\u0442\u043e\u0432", "common": "\u0412\u0438\u0440\u0433\u0438\u043d\u0441\u043a\u0438\u0435 \u041e\u0441\u0442\u0440\u043e\u0432\u0430"},
            "spa": {"official": "Islas V\u00edrgenes de los Estados Unidos", "common": "Islas V\u00edrgenes de los Estados Unidos"},
            "fin": {"official": "Yhdysvaltain Neitsytsaaret", "common": "Neitsytsaaret"}
        },
        "latlng": [18.35, -64.933333],
        "demonym": "Virgin Islander",
        "landlocked": false,
        "borders": [],
        "area": 347
    },
    {
        "name": {
            "common": "Vietnam",
            "official": "Socialist Republic of Vietnam",
            "native": {
                "vie": {
                    "official": "C\u1ed9ng h\u00f2a x\u00e3 h\u1ed9i ch\u1ee7 ngh\u0129a Vi\u1ec7t Nam",
                    "common": "Vi\u1ec7t Nam"
                }
            }
        },
        "tld": [".vn"],
        "cca2": "VN",
        "ccn3": "704",
        "cca3": "VNM",
        "cioc": "VIE",
        "currency": ["VND"],
        "callingCode": ["84"],
        "capital": "Hanoi",
        "altSpellings": ["VN", "Socialist Republic of Vietnam", "C\u1ed9ng h\u00f2a X\u00e3 h\u1ed9i ch\u1ee7 ngh\u0129a Vi\u1ec7t Nam", "Viet Nam"],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "vie": "Vietnamese"
        },
        "translations": {
            "deu": {"official": "Sozialistische Republik Vietnam", "common": "Vietnam"},
            "fra": {"official": "R\u00e9publique socialiste du Vietnam", "common": "Vi\u00eat Nam"},
            "hrv": {"official": "Socijalisti\u010dka Republika Vijetnam", "common": "Vijetnam"},
            "ita": {"official": "Repubblica socialista del Vietnam", "common": "Vietnam"},
            "jpn": {"official": "\u30d9\u30c8\u30ca\u30e0\u793e\u4f1a\u4e3b\u7fa9\u5171\u548c\u56fd", "common": "\u30d9\u30c8\u30ca\u30e0"},
            "nld": {"official": "Socialistische Republiek Vietnam", "common": "Vietnam"},
            "por": {"official": "Rep\u00fablica Socialista do Vietname", "common": "Vietname"},
            "rus": {"official": "\u0421\u043e\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0412\u044c\u0435\u0442\u043d\u0430\u043c", "common": "\u0412\u044c\u0435\u0442\u043d\u0430\u043c"},
            "spa": {"official": "Rep\u00fablica Socialista de Vietnam", "common": "Vietnam"},
            "fin": {"official": "Vietnamin sosialistinen tasavalta", "common": "Vietnam"}
        },
        "latlng": [16.16666666, 107.83333333],
        "demonym": "Vietnamese",
        "landlocked": false,
        "borders": ["KHM", "CHN", "LAO"],
        "area": 331212
    },
    {
        "name": {
            "common": "Vanuatu",
            "official": "Republic of Vanuatu",
            "native": {
                "bis": {
                    "official": "Ripablik blong Vanuatu",
                    "common": "Vanuatu"
                },
                "eng": {
                    "official": "Republic of Vanuatu",
                    "common": "Vanuatu"
                },
                "fra": {
                    "official": "R\u00e9publique de Vanuatu",
                    "common": "Vanuatu"
                }
            }
        },
        "tld": [".vu"],
        "cca2": "VU",
        "ccn3": "548",
        "cca3": "VUT",
        "cioc": "VAN",
        "currency": ["VUV"],
        "callingCode": ["678"],
        "capital": "Port Vila",
        "altSpellings": ["VU", "Republic of Vanuatu", "Ripablik blong Vanuatu", "R\u00e9publique de Vanuatu"],
        "region": "Oceania",
        "subregion": "Melanesia",
        "languages": {
            "bis": "Bislama",
            "eng": "English",
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Vanuatu", "common": "Vanuatu"},
            "fra": {"official": "R\u00e9publique de Vanuatu", "common": "Vanuatu"},
            "hrv": {"official": "Republika Vanuatu", "common": "Vanuatu"},
            "ita": {"official": "Repubblica di Vanuatu", "common": "Vanuatu"},
            "jpn": {"official": "\u30d0\u30cc\u30a2\u30c4\u5171\u548c\u56fd", "common": "\u30d0\u30cc\u30a2\u30c4"},
            "nld": {"official": "Republiek Vanuatu", "common": "Vanuatu"},
            "por": {"official": "Rep\u00fablica de Vanuatu", "common": "Vanuatu"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0412\u0430\u043d\u0443\u0430\u0442\u0443", "common": "\u0412\u0430\u043d\u0443\u0430\u0442\u0443"},
            "spa": {"official": "Rep\u00fablica de Vanuatu", "common": "Vanuatu"},
            "fin": {"official": "Vanuatun tasavalta", "common": "Vanuatu"}
        },
        "latlng": [-16, 167],
        "demonym": "Ni-Vanuatu",
        "landlocked": false,
        "borders": [],
        "area": 12189
    },
    {
        "name": {
            "common": "Wallis and Futuna",
            "official": "Territory of the Wallis and Futuna Islands",
            "native": {
                "fra": {
                    "official": "Territoire des \u00eeles Wallis et Futuna",
                    "common": "Wallis et Futuna"
                }
            }
        },
        "tld": [".wf"],
        "cca2": "WF",
        "ccn3": "876",
        "cca3": "WLF",
        "cioc": "",
        "currency": ["XPF"],
        "callingCode": ["681"],
        "capital": "Mata-Utu",
        "altSpellings": ["WF", "Territory of the Wallis and Futuna Islands", "Territoire des \u00eeles Wallis et Futuna"],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "deu": {"official": "Gebiet der Wallis und Futuna", "common": "Wallis und Futuna"},
            "fra": {"official": "Territoire des \u00eeles Wallis et Futuna", "common": "Wallis-et-Futuna"},
            "hrv": {"official": "Teritoriju Wallis i Futuna", "common": "Wallis i Fortuna"},
            "ita": {"official": "Territorio delle Isole Wallis e Futuna", "common": "Wallis e Futuna"},
            "jpn": {"official": "\u30a6\u30a9\u30ea\u30b9\u00b7\u30d5\u30c4\u30ca\u8af8\u5cf6\u306e\u9818\u571f", "common": "\u30a6\u30a9\u30ea\u30b9\u30fb\u30d5\u30c4\u30ca"},
            "nld": {"official": "Grondgebied van de Wallis en Futuna", "common": "Wallis en Futuna"},
            "por": {"official": "Territ\u00f3rio das Ilhas Wallis e Futuna", "common": "Wallis e Futuna"},
            "rus": {"official": "\u0422\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044f \u0423\u043e\u043b\u043b\u0438\u0441 \u0438 \u0424\u0443\u0442\u0443\u043d\u0430 \u043e\u0441\u0442\u0440\u043e\u0432\u0430", "common": "\u0423\u043e\u043b\u043b\u0438\u0441 \u0438 \u0424\u0443\u0442\u0443\u043d\u0430"},
            "spa": {"official": "Territorio de las Islas Wallis y Futuna", "common": "Wallis y Futuna"},
            "fin": {"official": "Wallisin ja Futunan yhteis\u00f6", "common": "Wallis ja Futuna"}
        },
        "latlng": [-13.3, -176.2],
        "demonym": "Wallis and Futuna Islander",
        "landlocked": false,
        "borders": [],
        "area": 142
    },
    {
        "name": {
            "common": "Samoa",
            "official": "Independent State of Samoa",
            "native": {
                "eng": {
                    "official": "Independent State of Samoa",
                    "common": "Samoa"
                },
                "smo": {
                    "official": "Malo Sa\u02bboloto Tuto\u02bbatasi o S\u0101moa",
                    "common": "S\u0101moa"
                }
            }
        },
        "tld": [".ws"],
        "cca2": "WS",
        "ccn3": "882",
        "cca3": "WSM",
        "cioc": "SAM",
        "currency": ["WST"],
        "callingCode": ["685"],
        "capital": "Apia",
        "altSpellings": ["WS", "Independent State of Samoa", "Malo Sa\u02bboloto Tuto\u02bbatasi o S\u0101moa"],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "smo": "Samoan"
        },
        "translations": {
            "deu": {"official": "Unabh\u00e4ngige Staat Samoa", "common": "Samoa"},
            "fra": {"official": "\u00c9tat ind\u00e9pendant du Samoa", "common": "Samoa"},
            "hrv": {"official": "Nezavisna Dr\u017eava Samoa", "common": "Samoa"},
            "ita": {"official": "Stato indipendente di Samoa", "common": "Samoa"},
            "jpn": {"official": "\u30b5\u30e2\u30a2\u72ec\u7acb\u56fd", "common": "\u30b5\u30e2\u30a2"},
            "nld": {"official": "Onafhankelijke Staat Samoa", "common": "Samoa"},
            "por": {"official": "Estado Independente de Samoa", "common": "Samoa"},
            "rus": {"official": "\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0435 \u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u0421\u0430\u043c\u043e\u0430", "common": "\u0421\u0430\u043c\u043e\u0430"},
            "spa": {"official": "Estado Independiente de Samoa", "common": "Samoa"},
            "fin": {"official": "Samoan itsen\u00e4inen valtio", "common": "Samoa"}
        },
        "latlng": [-13.58333333, -172.33333333],
        "demonym": "Samoan",
        "landlocked": false,
        "borders": [],
        "area": 2842
    },
    {
        "name": {
            "common": "Yemen",
            "official": "Republic of Yemen",
            "native": {
                "ara": {
                    "official": "\u0627\u0644\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u064a\u0645\u0646\u064a\u0629",
                    "common": "\u0627\u0644\u064a\u064e\u0645\u064e\u0646"
                }
            }
        },
        "tld": [".ye"],
        "cca2": "YE",
        "ccn3": "887",
        "cca3": "YEM",
        "cioc": "YEM",
        "currency": ["YER"],
        "callingCode": ["967"],
        "capital": "Sana'a",
        "altSpellings": ["YE", "Yemeni Republic", "al-Jumh\u016briyyah al-Yamaniyyah"],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "deu": {"official": "Republik Jemen", "common": "Jemen"},
            "fra": {"official": "R\u00e9publique du Y\u00e9men", "common": "Y\u00e9men"},
            "hrv": {"official": "Republika Jemen", "common": "Jemen"},
            "ita": {"official": "Repubblica dello Yemen", "common": "Yemen"},
            "jpn": {"official": "\u30a4\u30a8\u30e1\u30f3\u5171\u548c\u56fd", "common": "\u30a4\u30a8\u30e1\u30f3"},
            "nld": {"official": "Republiek Jemen", "common": "Jemen"},
            "por": {"official": "Rep\u00fablica do I\u00eamen", "common": "I\u00e9men"},
            "rus": {"official": "\u0419\u0435\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u0419\u0435\u043c\u0435\u043d"},
            "spa": {"official": "Rep\u00fablica de Yemen", "common": "Yemen"},
            "fin": {"official": "Jemenin tasavalta", "common": "Jemen"}
        },
        "latlng": [15, 48],
        "demonym": "Yemeni",
        "landlocked": false,
        "borders": ["OMN", "SAU"],
        "area": 527968
    },
    {
        "name": {
            "common": "South Africa",
            "official": "Republic of South Africa",
            "native": {
                "afr": {
                    "official": "Republiek van Suid-Afrika",
                    "common": "South Africa"
                },
                "eng": {
                    "official": "Republic of South Africa",
                    "common": "South Africa"
                },
                "nbl": {
                    "official": "IRiphabliki yeSewula Afrika",
                    "common": "Sewula Afrika"
                },
                "nso": {
                    "official": "Rephaboliki ya Afrika-Borwa ",
                    "common": "Afrika-Borwa"
                },
                "sot": {
                    "official": "Rephaboliki ya Afrika Borwa",
                    "common": "Afrika Borwa"
                },
                "ssw": {
                    "official": "IRiphabhulikhi yeNingizimu Afrika",
                    "common": "Ningizimu Afrika"
                },
                "tsn": {
                    "official": "Rephaboliki ya Aforika Borwa",
                    "common": "Aforika Borwa"
                },
                "tso": {
                    "official": "Riphabliki ra Afrika Dzonga",
                    "common": "Afrika Dzonga"
                },
                "ven": {
                    "official": "Riphabu\u1e3diki ya Afurika Tshipembe",
                    "common": "Afurika Tshipembe"
                },
                "xho": {
                    "official": "IRiphabliki yaseMzantsi Afrika",
                    "common": "Mzantsi Afrika"
                },
                "zul": {
                    "official": "IRiphabliki yaseNingizimu Afrika",
                    "common": "Ningizimu Afrika"
                }
            }
        },
        "tld": [".za"],
        "cca2": "ZA",
        "ccn3": "710",
        "cca3": "ZAF",
        "cioc": "RSA",
        "currency": ["ZAR"],
        "callingCode": ["27"],
        "capital": "Pretoria",
        "altSpellings": ["ZA", "RSA", "Suid-Afrika", "Republic of South Africa"],
        "region": "Africa",
        "subregion": "Southern Africa",
        "languages": {
            "afr": "Afrikaans",
            "eng": "English",
            "nbl": "Southern Ndebele",
            "nso": "Northern Sotho",
            "sot": "Southern Sotho",
            "ssw": "Swazi",
            "tsn": "Tswana",
            "tso": "Tsonga",
            "ven": "Venda",
            "xho": "Xhosa",
            "zul": "Zulu"
        },
        "translations": {
            "deu": {"official": "Republik S\u00fcdafrika", "common": "Republik S\u00fcdafrika"},
            "fra": {"official": "R\u00e9publique d'Afrique du Sud", "common": "Afrique du Sud"},
            "hrv": {"official": "Ju\u017enoafri\u010dka Republika", "common": "Ju\u017enoafri\u010dka Republika"},
            "ita": {"official": "Repubblica del Sud Africa", "common": "Sud Africa"},
            "jpn": {"official": "\u5357\u30a2\u30d5\u30ea\u30ab\u5171\u548c\u56fd", "common": "\u5357\u30a2\u30d5\u30ea\u30ab"},
            "nld": {"official": "Zuid -Afrika", "common": "Zuid-Afrika"},
            "por": {"official": "Rep\u00fablica da \u00c1frica do Sul", "common": "\u00c1frica do Sul"},
            "rus": {"official": "\u042e\u0436\u043d\u043e-\u0410\u0444\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430", "common": "\u042e\u0436\u043d\u043e-\u0410\u0444\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430"},
            "spa": {"official": "Rep\u00fablica de Sud\u00e1frica", "common": "Rep\u00fablica de Sud\u00e1frica"},
            "fin": {"official": "Etel\u00e4-Afrikan tasavalta", "common": "Etel\u00e4-Afrikka"}
        },
        "latlng": [-29, 24],
        "demonym": "South African",
        "landlocked": false,
        "borders": ["BWA", "LSO", "MOZ", "NAM", "SWZ", "ZWE"],
        "area": 1221037
    },
    {
        "name": {
            "common": "Zambia",
            "official": "Republic of Zambia",
            "native": {
                "eng": {
                    "official": "Republic of Zambia",
                    "common": "Zambia"
                }
            }
        },
        "tld": [".zm"],
        "cca2": "ZM",
        "ccn3": "894",
        "cca3": "ZMB",
        "cioc": "ZAM",
        "currency": ["ZMW"],
        "callingCode": ["260"],
        "capital": "Lusaka",
        "altSpellings": ["ZM", "Republic of Zambia"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "deu": {"official": "Republik Sambia", "common": "Sambia"},
            "fra": {"official": "R\u00e9publique de Zambie", "common": "Zambie"},
            "hrv": {"official": "Republika Zambija", "common": "Zambija"},
            "ita": {"official": "Repubblica di Zambia", "common": "Zambia"},
            "jpn": {"official": "\u30b6\u30f3\u30d3\u30a2\u5171\u548c\u56fd", "common": "\u30b6\u30f3\u30d3\u30a2"},
            "nld": {"official": "Republiek Zambia", "common": "Zambia"},
            "por": {"official": "Rep\u00fablica da Z\u00e2mbia", "common": "Z\u00e2mbia"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0417\u0430\u043c\u0431\u0438\u044f", "common": "\u0417\u0430\u043c\u0431\u0438\u044f"},
            "spa": {"official": "Rep\u00fablica de Zambia", "common": "Zambia"},
            "fin": {"official": "Sambian tasavalta", "common": "Sambia"}
        },
        "latlng": [-15, 30],
        "demonym": "Zambian",
        "landlocked": true,
        "borders": ["AGO", "BWA", "COD", "MWI", "MOZ", "NAM", "TZA", "ZWE"],
        "area": 752612
    },
    {
        "name": {
            "common": "Zimbabwe",
            "official": "Republic of Zimbabwe",
            "native": {
                "bwg": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "eng": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "kck": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "khi": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "ndc": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "nde": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "nya": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "sna": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "sot": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "toi": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "tsn": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "tso": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "ven": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "xho": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "zib": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                }
            }
        },
        "tld": [".zw"],
        "cca2": "ZW",
        "ccn3": "716",
        "cca3": "ZWE",
        "cioc": "ZIM",
        "currency": ["ZWL"],
        "callingCode": ["263"],
        "capital": "Harare",
        "altSpellings": ["ZW", "Republic of Zimbabwe"],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "bwg": "Chibarwe",
            "eng": "English",
            "kck": "Kalanga",
            "khi": "Khoisan",
            "ndc": "Ndau",
            "nde": "Northern Ndebele",
            "nya": "Chewa",
            "sna": "Shona",
            "sot": "Sotho",
            "toi": "Tonga",
            "tsn": "Tswana",
            "tso": "Tsonga",
            "ven": "Venda",
            "xho": "Xhosa",
            "zib": "Zimbabwean Sign Language"
        },
        "translations": {
            "deu": {"official": "Republik Simbabwe", "common": "Simbabwe"},
            "fra": {"official": "R\u00e9publique du Zimbabwe", "common": "Zimbabwe"},
            "hrv": {"official": "Republika Zimbabve", "common": "Zimbabve"},
            "ita": {"official": "Repubblica dello Zimbabwe", "common": "Zimbabwe"},
            "jpn": {"official": "\u30b8\u30f3\u30d0\u30d6\u30a8\u5171\u548c\u56fd", "common": "\u30b8\u30f3\u30d0\u30d6\u30a8"},
            "nld": {"official": "Republiek Zimbabwe", "common": "Zimbabwe"},
            "por": {"official": "Rep\u00fablica do Zimbabwe", "common": "Zimbabwe"},
            "rus": {"official": "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0417\u0438\u043c\u0431\u0430\u0431\u0432\u0435", "common": "\u0417\u0438\u043c\u0431\u0430\u0431\u0432\u0435"},
            "spa": {"official": "Rep\u00fablica de Zimbabwe", "common": "Zimbabue"},
            "fin": {"official": "Zimbabwen tasavalta", "common": "Zimbabwe"}
        },
        "latlng": [-20, 30],
        "demonym": "Zimbabwean",
        "landlocked": true,
        "borders": ["BWA", "MOZ", "ZAF", "ZMB"],
        "area": 390757
    }
]

            }
    };
 }