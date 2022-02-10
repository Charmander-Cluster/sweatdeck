export const ageCalc = (birthday) => {
  var start = new Date(birthday);
  var end = new Date(); //today's date
  return Math.floor((end - start) / (1000 * 3600 * 24 * 365));
};

export const latCalc = (state) => {
  if (state === "AL") {
    return 32.6010112;
  } else if (state === "AK") {
    return 61.3025006;
  } else if (state === "AZ") {
    return 34.1682185;
  } else if (state === "AR") {
    return 34.7519275;
  } else if (state === "CA") {
    return 37.2718745;
  } else if (state === "CO") {
    return 38.9979339;
  } else if (state === "CT") {
    return 41.5187835;
  } else if (state === "DE") {
    return 39.145251;
  } else if (state === "DC") {
    return 38.8993487;
  } else if (state === "FL") {
    return 27.9757279;
  } else if (state === "GA") {
    return 32.6781248;
  } else if (state === "HI") {
    return 20.46;
  } else if (state === "ID") {
    return 45.4945756;
  } else if (state === "IL") {
    return 39.739318;
  } else if (state === "IN") {
    return 39.7662195;
  } else if (state === "IA") {
    return 41.9383166;
  } else if (state === "KS") {
    return 38.4987789;
  } else if (state === "KY") {
    return 37.8222935;
  } else if (state === "LA") {
    return 30.9733766;
  } else if (state === "ME") {
    return 45.2185133;
  } else if (state === "MD") {
    return 38.8063524;
  } else if (state === "MA") {
    return 42.0629398;
  } else if (state === "MI") {
    return 44.9435598;
  } else if (state === "MN") {
    return 46.4418595;
  } else if (state === "MS") {
    return 32.5851062;
  } else if (state === "MO") {
    return 38.3046615;
  } else if (state === "MT") {
    return 46.6797995;
  } else if (state === "NE") {
    return 41.5008195;
  } else if (state === "NV") {
    return 38.502032;
  } else if (state === "NH") {
    return 44.0012306;
  } else if (state === "NJ") {
    return 40.1430058;
  } else if (state === "NM") {
    return 34.1662325;
  } else if (state === "NY") {
    return 40.7056258;
  } else if (state === "NC") {
    return 35.2145629;
  } else if (state === "ND") {
    return 47.4678819;
  } else if (state === "OH") {
    return 40.1903624;
  } else if (state === "OK") {
    return 35.3097654;
  } else if (state === "OR") {
    return 44.1419049;
  } else if (state === "PA") {
    return 40.9945928;
  } else if (state === "RI") {
    return 41.5827282;
  } else if (state === "SC") {
    return 33.62505;
  } else if (state === "SD") {
    return 44.2126995;
  } else if (state === "TN") {
    return 35.830521;
  } else if (state === "TX") {
    return 31.1693363;
  } else if (state === "UT") {
    return 39.4997605;
  } else if (state === "VT") {
    return 43.8717545;
  } else if (state === "VA") {
    return 38.0033855;
  } else if (state === "WA") {
    return 38.8993487;
  } else if (state === "WV") {
    return 38.9201705;
  } else if (state === "WI") {
    return 44.7862968;
  } else if (state === "WY") {
    return 43.000325;
  }
};

export const longCalc = (state) => {
  if (state === "AL") {
    return -86.6807365;
  } else if (state === "AK") {
    return -158.7750198;
  } else if (state === "AZ") {
    return -111.930907;
  } else if (state === "AR") {
    return -92.1313784;
  } else if (state === "CA") {
    return -119.2704153;
  } else if (state === "CO") {
    return -105.550567;
  } else if (state === "CT") {
    return -72.757507;
  } else if (state === "DE") {
    return -75.4189206;
  } else if (state === "DC") {
    return -77.0145666;
  } else if (state === "FL") {
    return -83.8330166;
  } else if (state === "GA") {
    return -83.2229757;
  } else if (state === "HI") {
    return -157.505;
  } else if (state === "ID") {
    return -114.1424303;
  } else if (state === "IL") {
    return -89.504139;
  } else if (state === "IN") {
    return -86.441277;
  } else if (state === "IA") {
    return -93.389798;
  } else if (state === "KS") {
    return -98.3200779;
  } else if (state === "KY") {
    return -85.7682399;
  } else if (state === "LA") {
    return -91.4299097;
  } else if (state === "ME") {
    return -69.0148656;
  } else if (state === "MD") {
    return -77.2684162;
  } else if (state === "MA") {
    return -71.718067;
  } else if (state === "MI") {
    return -86.4158049;
  } else if (state === "MN") {
    return -93.3655146;
  } else if (state === "MS") {
    return -89.8772196;
  } else if (state === "MO") {
    return -92.437099;
  } else if (state === "MT") {
    return -110.044783;
  } else if (state === "NE") {
    return -99.680902;
  } else if (state === "NV") {
    return -117.0230604;
  } else if (state === "NH") {
    return -71.5799231;
  } else if (state === "NJ") {
    return -74.7311156;
  } else if (state === "NM") {
    return -106.0260685;
  } else if (state === "NY") {
    return -73.97968;
  } else if (state === "NC") {
    return -79.8912675;
  } else if (state === "ND") {
    return -100.3022655;
  } else if (state === "OH") {
    return -82.6692525;
  } else if (state === "OK") {
    return -98.7165585;
  } else if (state === "OR") {
    return -120.5380993;
  } else if (state === "PA") {
    return -77.6046984;
  } else if (state === "RI") {
    return -71.5064508;
  } else if (state === "SC") {
    return -80.9470381;
  } else if (state === "SD") {
    return -100.2471641;
  } else if (state === "TN") {
    return -85.9785989;
  } else if (state === "TX") {
    return -100.0768425;
  } else if (state === "UT") {
    return -111.547028;
  } else if (state === "VT") {
    return -72.4477828;
  } else if (state === "VA") {
    return -79.4587861;
  } else if (state === "WA") {
    return -77.0145665;
  } else if (state === "WV") {
    return -80.1816905;
  } else if (state === "WI") {
    return -89.8267049;
  } else {
    return -107.5545669;
  }
};
