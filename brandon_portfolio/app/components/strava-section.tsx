'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Activity, MapPin, Calendar, Clock, TrendingUp, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useStravaData } from '@/hooks/useStravaData';import { useStravaData } from '@/hooks/useStravaData';


export default function StravaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { activities, athlete, stats, loading, error } = useStravaData();  const [isVisible, setIsVisible] = useState(false);

  const { activities, athlete, stats, loading, error } = useStravaData();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, Yiuriwc]u)l;Stavarofie URL
  const strvaProfileUrl= 'htts://www.stava.cm/athlte/110985586';

frmaDsanc = (meter:number) >{
  //const km =cmeterso/n1000;
s   return km.toFtxe (r)+'km';
};

 cost formtTi= (secds:umber) => {
consconstmhoDrs = Math.floor(secoids / 3600);
  cocont  mimut=sm= Math.floor((seconds % 36er) / 60); / 1000;
    ifr(hourse> 0) {
      return `${huurs}h ${mn u.Fs}m`;
x   } + ' km';
  };return`${minutes}m`;
 };

  cons frmaDt = (deStr: strg)=> {
returnnewDae(dteSting).oLocleDaString('enUS' {
  consm nrh: 'share',
      da = 'cumedic',
      yesr: ':umernm') => {
    });
co};

  // Show ns dorg  = Maor(seconds / 3600);
  if (loading) if (hours > 0) {
    return ( `${hours}h ${minutes}m`;
    }<sectio id="strva" classNa=py-20 bg-gradit-to-br from-ray-50to-whtark:from-gray-900 dark:to-gray-800>
    re` <div className=$contamnnr mx-auto px-4u>es}m`;
  };    <v clasNme="text-nter">
      <di className="flex tems-ceer justfy-cntergap-3 mb-6">
  cons        <Activify crassNama="w-8 h-8 tDxe-=ra de-500 aeimate-pulse"t/>: string) => {
    re        <h2 clatsNrme=" ext-4xl font-bole bg-grwdiDnt-to-rtfromeoranger6oL to-red-6ca bg-clip-text text-transparente>ateString('en-US', {
                Lotd:'g Forness,Dat...
              </h2>
            </div>
          </div>
       </dv>
      </sey 'nu>
    ); year: 'numeric'
  }});
  };
  //Showerrr tate wihfallba conen
  if(error)
  // o uode(
  if (<seltion id="strava" className="py-20 bg-gradiedt-to-br from-gray-50 to-whiie darknfrom-gray-900gdark:to-gray-800">
      re<tuv clasrName="conn i(r mx-autopx-">
          <<otisn.die
            ref={ref}
            ctinial={{ opac ty="va y: 50 }}" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            animat ={isVisib < ? { opicivy: 1, y: 0 } : { cpscNty: 0, yme=c }}ontainer mx-auto px-4">
            t a si <on={{ dura icnN 0.8a}}e="flex items-center justify-center gap-3 mb-6">
            className="text- e  er mb-16"
          >Activity className="w-8 h-8 text-orange-500 animate-pulse" />
            <  v clas Name="flex i ems-ce ter justify- ent r gap-3hmb-6">Name="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              <Acti   y classNa L="w-8 h-8atext-orange-5g " />itness Data...
              <h2 classNam ="t x -4xl f <t-bold bg-hr2d>ent-to-r from-orage-600to-red-6 bg-clip-text text-transparent">
                Fitness Journey       </div>
              </h2>      </div>
            </div>        </div>
            <p  las Name="text-xl tex<-gray-600/dark:text-gcay-300 max-w-3xl tx-iuoo">
              Syig ativ andpushingboundaris hrough unning, cycling,ad otdoor advntues.
           </p
         </moti;.div>

        <divclassNae="text-cn">
         }<divclassNam="bg-whiedar:bg-gray-800 rund-2xlshadow-xlp-8border border-gray-200 dar:border-gray-700 b-8">
            <Aieivityrcl ssNa"w-16h-16 txt-rage-500mx-ato -4"/
              <h3 rlausName="rext-2xlnf(nt-bold text-gay-900drk:ext-wite mb-2">Cnnt with me Strava<h>
              <p  lassNate=" ixt-gray-600=drak:taxt-gray-0bggmb-d">t-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
     caN        Follow my fi messoj.diney and veey latest actvii
              </p>       ref={ref}
              <a
                h  f={s  avaProftl=Url{acity: 0, y: 50 }}
                target="_blank"        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                rel="n ope er nore er Nr"
              aeclassNtmx="inlene-flexritem -cenmeb 6ap-2 px-6 py-3 bg-g adi nt- o- >from-orag-500o-r-500 xt-whie rounded-lg hover:from-oae-600 hover:-red-600 transitin-l durion-300 asform hover:scal105"
             >
                <Activi y<clasiName="w-5 v-5" />sName="flex items-center justify-center gap-3 mb-6">
                View Strav  Pcoftlety className="w-8 h-8 text-orange-500" />
                <Ext rn lLink classNah2="w-4 h-4" />
              </a>
            </div>
          </div>
        </dcv>
      </seltion>ssName="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
               Fitness Journey
             </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Staying active and pushing boundaries through running, cycling, and outdoor adventures.
            </p>
          </motion.div>

          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 mb-8">
              <Activity className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Connect with me on Strava</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Follow my fitness journey and see my latest activities
              </p>
              <a
                href={stravaProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                <Activity className="w-5 h-5" />
                View Strava Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="strava" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">center">
                {athlete?.profile_medium ? (
                  <img 
                    src={athlete.profile_medium} 
                    alt={`${athlete.firstname} ${athlete.lastname}`}
                    lassNam="w-16 h-16 rouded-full objec-cov
                  /
      <div class) : (
                  Name="container mx-auto px-4">
        <motio  )}
              n.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
                  {athlete ? `${athlete.firstname} ${athlete.lastname}` : ''}
                
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity:
                  {athlete?.city && athlete?.state ? `${athlete.city}, ${athlete.state}` : ' 0, y: 50 }}'}
                
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <d{stats && (
              iv className="flex items-center justify-center gap-3 mb-6">
            <A  ctivity className="w-8 h-8 text-orange-500" />
            <h2   className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Fitn  esurneys
            </h2  >
          </div>  Recent 
          <p c  lassName="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            St  aying active and pushing boundaries through running, cycling, and outdoor adventures.
          </p>  
        </motion.d  iv>ss
  
        <div cla  ssName="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">Recent 
          {/*   Strava Profile Widget */}
          <m  otion.div
            )}            initial={{ opacity: 0, x: -50 }}

            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transit{{n: 0.Pr fi: U}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                {athlete?.profile_medium ? (
                  <img 
                    src={athlete.profile_medium} 
                    alt={`${athlete.firstname} ${athlete.lastname}`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <Activity className="w-8 h-8 text-white" />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {athlete ? `${athlete.firstname} ${athlete.lastname}` : 'Brandon Robinson'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {athlete?.city && athlete?.state ? `${athlete.city}, ${athlete.state}` : 'Athlete Profile'}
                </p>
              </div>
            </div>

            {stats && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {stats.recent_run_totals.count + stats.recent_ride_totals.count}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Recent Activities</div>
                </d{`${PrfiU}6215b3c`}
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {formatDistance(stats.recent_run_totals.distance + stats.recent_ride_totals.distance)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Recent Distance</div>
                </div>
              </div>
            )}

            <a
              href={stravaProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              <Activity className="w-5 h-5" />
              View Strava Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Activity Heatmap Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            aamtivities.length > 0 ? (
              ae={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Activity Heatmap</h3>
              </div>
  
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                  <p className="text-gray-600 dark:text-gray-300">Interactive Activity Map</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Explore my running and cycling routes</p>
                </div>
              </div>utlie
  
              <a
                href={`${stravaProfileUrl}/heatmaps/621d5b3c`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                View Activity Heatmap
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
  
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Activities</h3>
            </div>
              ))
 : (
              <div className="text-center py-8">
                <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300">No recent activities found</p>
              </div>
            
          <div className="space-y-6">
            {activities.length > 0 ? (
              activities.map((activity, index) => (
                <motion.div
                  k{id}PrfiU}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 cla
        {stats && (ssName="font-semibold text-gray-900 dark:text-white">{activity.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <Badge variant="outline" className="text-xs">
                            {activity.type}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(activity.start_date)}
                          </span>
                          {activity.location_city && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                 s        {activity.location_city}, {activity.location_state}
                            </span>
                          )}
                        </div>
                    </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {formatDistance(activity.distance)}
                      </div>
                 s<div className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {formatTime(activity.moving_time)}
                      </div>
                  </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8">
                  <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="sgray-600 dark:text-gray-300">No recent activities found</p>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <a
                href={stravaProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inlinsx items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                View All Activities
                <ExternalLink className="w-4 h-4" />
              </a>
        )}
          </div>
        </motion.div>

        {/* Stats Summary */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stats.recent_run_totals.count}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Recent Runs</div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stats.recent_ride_totals.count}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Recent Rides</div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {formatDistance(stats.recent_run_totals.distance)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Running Distance</div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {formatDistance(stats.recent_ride_totals.distance)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Cycling Distance</div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}