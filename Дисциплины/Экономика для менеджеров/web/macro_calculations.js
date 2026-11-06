function gdp(q1,p1,q2,p2,Q1,P1,Q2,P2) {
  const base=q1*p1+q2*p2, nominal=Q1*P1+Q2*P2, real=Q1*p1+Q2*p2;
  return {base,nominal,real,deflator:real>0?nominal/real*100:null};
}
function unemployment(employed, unemployed) {
  const labor=employed+unemployed;
  return labor>0?unemployed/labor*100:null;
}
if(typeof module!=='undefined') module.exports={gdp,unemployment};
