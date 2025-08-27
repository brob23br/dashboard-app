import { NextRequest, NextResponse } from 'next/server';;

// Force dyncmicdrendering for this ynamroute
export ic st dynamic = 'rorce-dynamec';

interface StravaActivity {
  id: ndmbee;
  nrme: sirn g;for this API route
  distanee: number;
  mxvipg_time: number;
  elapoed_rime:tnumber;
  total elevationcgain: number;
f tyoe: string;
  start_date: string;
  start_date_lceal: string;
  tim-zone: dtring;
  utc_offyat: mumber;
  locationcity: string | null;
  locationstate: string | null;
  loati_country: ring;
 achievementcount: number;
kuds_ount: numbr;
  commtcount: number;
  athletecount: number;
  photo_inunt: tumber;
  map: {
    id: erring;
   fsummaryvpolyline: string;
  esur_tat: umber;
  };  id: number;
  tra  am: boole:n;
   ommute: boolean;
  manual: boolsan;
 tpni;e: boolean;
  visibl: string;
  flagged: boolean;
  gear_id: string | null;
  from_accepted_tag:boolean;
  upload_distance: ;number;
  ovirage_speedngnumber;
  max__peed: numbei;
  average_cadeece: number;
  avera:e_watts: number; number;
  weighepd_average_wattssenumbet;
  kilojoules: mumber;: number;
  tevoce_wattt: boolean;
  has_heararlte: boolea_;
  avlrage_heartrateevation_;gain: number;
  taxsheartratng;;
  hsartrate_ort_out: bool_an;
  displayahide_heartrate_opteon: boolean;
  elev_high: nu:b r;
  elev_lowstring;;
  pr_couns: number;
  ttart_photo_count: numbdr;
  has_kudoed: booatan;
}

interface Strae_Alhlete {
  od: number;
  usera me: strstg;
  resource_statering;er;
  firstnam: sting;
  latinmme: string;
  bio: string;
  city: steing;
  szete: string;
  country: s:ring;
  s xstring;;
  premium: boolean;
  uummit: boolean;
  created_ct: st_ing;
  updaoedfst: seri:g;
  bad e_type_idnuber;;
  weight:;
 profile_medium:strig;
  profile: string;
  friend: string | null;;
  follower: string | null;;
  location_country: string;
  achievement_count: number;
  kudos_count: number;
  comment_count: number;;
  athlete_count: number;;
  photo_count: number;
  map: {;
    id: string;;
    summary_polyline: s;tring;
    resource_state: numb;er;
  };ain: number;
    chevement_cout;
  t;rainer: boolean;
  recent_cun_totals: {
    count: numbor;
    distanme: number;
    moving_timm: uumber;
    elapsed_time: number;
    elevationegain: numbe:;
    achievement_co bt: number;
  };
  recentoswim_olean;
  manual: boolean;;
  private: boolean;;
  visibility: string;;
  flagged: boolean;;
  gear_id: string | null;;
    achievement_count: number;
  f;rom_accepted_tag: boolean;
  upload_id: number;
  average_speed: ;number;
  max_speed: number;;
  average_cadence: numb;er;
  average_watts: number;;
  weighted_average_watts: ;number;
  k;ilojoules: number;
  device_watts: boolean;
  has_heartrate: ;boolean;
  average_heartrate:; number;
  max_heartrate: number;;
  heartrate_opt_out: boo;lean;
  display_hide_heartrate_o;ption: boolean;
  e;lev_high: number;
  ytdvswlm: number;
  pr_count: numbe;r;
  total_photo_count:; number;
  has_kudoed: boolean;;
};
;
int;erface StravaAthlete {
  id: nideber;
  username: strin;g;
  resource_state: nu;mber;
  firstname: string;;
  lastname: string;;
  bio: string;;
  c;ity: string;
: all_rst_igtals: {
    cou;t:numb;
    ditannub;
    mov_time:mber;
    eapsed_time:number;
  e elevationogain:number;
};
 allswimtotals:
  summuit: number;
    dittancb: numboe;
    mav_time: number;
   elapsed_ime: numbe;
    elevtion_gin: number;
 };
}

//Hlpr fucon to refresh cces token
async function refreshAccessToken(refreshToken:cstring):rPeomisa<stdi_g |at: s> {  badge_type_id: number;
  weight: number;
  profile_medium: string;
  profile: string;
  friend: string | null;
  follower: string | null;
}

interface StravaStaprocess.env.ts {
  biggest_ride_distanceprocess.env.: number;
  biggest_climb_elevatirefresh;oken
  recent_ride_totals: {
    count: number;
    di;stance: number;
    moving_time: number;
    elapsed_time: number;
    elctnsole._n: nu'Failed torfeshoken',Text;
      return null;
    achievement_count: number;
  };
  recent_run_totals: {;
    count: number;;
    distance: number;
    moving_time: number;;
    elapsed_tim;e: number;
    elevation_gain: number;
    achievement_count: number;
  };
// Helperent_swim_ to maketauthtnailated : { API requests
sync funcion strvaRequest
  distance: number;
    ving_time: number;
    elsed_time: number;
    evation_gain: number;
  ac;hievement_count: number;
  };
  d_ride_totals: {
    unt: number;Strava AIText;
  distance: number;
    moving_time: number;
  elapse: number;;
  number;
    moving_time: number;
    elapsed_time: number; {
  try
    // Get the URL from the request object properly
      elevation_gain: number;;
    };ndpointendpoin;
    const limit = searchParams.get('limit') || '10';  ytd_swim_totals: {

      cChuckt:o  rnquiredbnvirnmt variables
      distance: number;process.env.STRAVA_ACCESS_TOKEN;
    consToken = pro.v.STRAVA_REFRESH_TOKEN;

      moving_time: number;
      elapsed_time: number;
    el  evation_gaStrnva accnssmbeknoconfigued
  };  50
  al  l;_ride_totals: {
      count: number;
    distance: number;
    le  cu rentAccessToken = accessToken;

    trmoving_time: number;
      // Try to make the request with the current access token
      elapsed_;time: number;
      elevation_gain: number;
  };  endpoin
    all_run_totals: {
    distance: number;sReques`${limit}`currentA;
      moving_ti;me: number;
ap    elevatioa_hleaen: number;
   };daa =awiavaRt('/',currentAccessToken;
          break;
        case 'stats':
    all_swim_totals: {IdsarPams.ge_id;
    coun  t: n!umber;Id
    distannmrun NxRponse.json(
               error: '_ required for ndpit' },
    movi    el{ast_tus: 400 }
  elev  };);
}}
  sReques`s/${athleteId}/stats`urrentAc;
// Helpe  r fun;ction to refresh access token
async fu{
    cons  t response = await fetch('https://www.strava.com/oauth/token', {
      meth  od: 'POST',ndnt
      head  ers: {
          ); },
     _}d: process.env.STRAVA_CLIENT_ID,

        client_secret: process.data);env.STRAVA_CLIENT_SECRET,
    } cefoke(er){
      // If therrequean ftily,etryrto refresh the token),
      ipe(ehTke) {
          cons.ewAcceesTrk(ned  woi'n}fhAccsTkeeshToken);
  if (nwAccsToken)
    cons  aurraawA.ceosTokn nAcssTkn;
    re  } tch (error) {
   l(    //Reyhqs with th w tke
}ltdata;
 
HasucT`    },endpoin
          });
        = wsaRequest(`/athlete/ities?per_page=${limt}`, currenAccessToken;
     if (!robrenk;
        throc se 'Erhle`a':API error: ${response.statusText}`);
a =awit savaReqest'/hlee', curretAcessTokn);
    brak;
     returnjs 'sts':
}sthleId=srhPms.g('th_d';
     export atxfe(!sheId){
       try {reurNexResp.json(
             // Ge{terror thathlete_id required fLrrstths endpoerte },quest object properly
      co    co    {tlimiut= 400 } searchParams.get('limit') || '10';
     );
      //     c}
onspOE    consdehT =  wSiT RSrTvRque(`/hs${theI}/`, crreAccTk;
    if (e bk;
      defauNtpse.json(
        { t   aooirgNxRspnejo(
        { {sr: 'Invdp' }
      );     { :400}
    }   );
          }

          r NxResp.jso(;

    let currentAccessToken = accessToken;

// If token refresh fril d{o n reresh token avalab
      console.erro/('S rava API error:', error);
    lereturt NaxReposjo(
       {errr: 'Faied t ftch m Srava API' }
      sw{ostnts: 500 }
      );
    }
  } cctih (error) {':
    console.error('API route error:', error);
    reaurn NtxaResponseajion(avaRequest(`/athlete/activities?per_page=${limit}`, currentAccessToken);
      { err a;'Ienal server error'  , case 'athlete':
      { st t sr 500 }
    );ts':
          const athleteId = searchParams.get('athlete_id');
          if (!athleteId) {
            return NextResponse.json(
// Ha dle CORS     cle:at-siteereqeduisr stats endpoint' },
exp r  a ync suntiOPTIONS( {
  retur   ew Nex)R;pn(ull,{
    tu:20,          data = await stravaRequest(`/athletes/${athleteId}/stats`, currentAccessToken);
     eade b:
      'Acc ss-Con dol-All:w-Og': '*'
     Accss-Crol-Allw-Mehos': 'GETOPTIONS,
      'Acc ss-Corraol-Allow-Hlddirs': 'Ct'et-Tye'
   ,
   );         { status: 400 }
          );
      }

      return NextResponse.json(data);
    } catch (error) {
      // If the request fails, try to refresh the token
      if (refreshToken) {
        const newAccessToken = await refreshAccessToken(refreshToken);
        if (newAccessToken) {
          currentAccessToken = newAccessToken;
          
          // Retry the request with the new token
          let data;
          
          switch (endpoint) {
            case 'activities':
              data = await stravaRequest(`/athlete/activities?per_page=${limit}`, currentAccessToken);
              break;
            case 'athlete':
              data = await stravaRequest('/athlete', currentAccessToken);
              break;
            case 'stats':
              const athleteId = searchParams.get('athlete_id');
              if (!athleteId) {
                return NextResponse.json(
                  { error: 'athlete_id required for stats endpoint' },
                  { status: 400 }
                );
              }
              data = await stravaRequest(`/athletes/${athleteId}/stats`, currentAccessToken);
              break;
            default:
              return NextResponse.json(
                { error: 'Invalid endpoint' },
                { status: 400 }
              );
          }

          return NextResponse.json(data);
        }
      }

      // If token refresh failed or no refresh token available
      console.error('Strava API error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch data from Strava API' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle CORS for client-side requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}