mapboxgl.accessToken = 'pk.eyJ1IjoicmFwaDU5IiwiYSI6ImNsYWY3bHRxcTA4dTEzeG83ZjB2bzkwYmUifQ.Ye2p9OAgykrdKe0fLWSN7A';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/raph59/claf81h0300bn15n7hevdbfl1', // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  center: [4.840, 45.755], // starting position
  zoom: 11 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.on('load', () => {
  map.addSource('route', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'LineString',
        'coordinates': polyline.decode('irgvGetk\\h@e@b@ChATvBXxCNp@CxASvAW^YTy@Ky@a@m@o@Os@?s@DeA^s@La@KaCyCYe@CkA\\m@h@[l@Sl@Kn@@p@Dd@Lf@Dn@?d@a@B}@S}@c@q@[_@[u@b@i@`@PZ~@f@d@r@A`@S^a@Vi@Lu@Fs@GcAWo@Om@d@kBp@_D\\o@f@@l@D\\_@H}@N{@Pm@Xc@b@Kb@@Ru@Hw@Ay@Fw@`@aBOo@{@Ug@@g@K[m@]j@g@?k@MsA]mAg@_@WSi@RoB\\oBVgB@s@Lw@b@{Aj@}AFaAl@gBJu@`@gBl@HfAf@fAn@nBxA^T^_@bCiLJq@Kq@f@C`@]T}@^uBjA{F`@eBb@{AHw@P{@Xs@Lu@fAaF\\kBf@mBNy@`@cBNu@|@kDR}@LeAf@aCpA{FnBuJxAgGZiBBw@Ru@Vm@XcBHs@g@U`@W~@cARm@Nq@Ds@b@mBN{@n@uBhAoFx@iDN{@Fw@Vs@Ju@d@}AZkBb@mBPq@Tk@Qq@VmBPk@@y@Vk@Ve@Pm@RgBv@E[^m@hB[d@Sp@e@VaAp@cA~@i@PYd@]\\e@Pm@Di@@sAYoAEwAOmF_Ac@Qc@@m@GeDm@oBc@oAQuA[g@Ai@KoAa@kEs@c@Ug@Ma@WWr@Mn@Gt@cAdFSx@c@~B]fCq@bCw@rBMp@o@nBsB`Ig@xBm@nBq@`BUr@Qv@]dCUz@q@rB[t@wAvC}@~AK|@qAbFc@|Bm@pBOv@]|@q@zBSfCSp@QbAg@zBMv@c@lBGr@c@jB{A|Kk@bDGr@Mt@Sl@Ov@AbAs@nDYtB_@lBYtBSv@Qx@aAlDo@rDOn@O`AE|@Up@Ot@Gr@O|@c@vBc@jBSp@a@tBYpBWj@i@@a@Se@Dc@XSnBg@@a@]e@S_@`@[h@Lt@Zd@hA^dAh@jBj@b@Tb@LZ\\`@XlBf@`@`@hAn@Lr@Tn@Ft@j@zCd@^d@TfAt@`@T\\`@Zf@Vh@Nv@\\^Xj@Nl@h@vARp@Lr@JhBMt@SvB').map(coords => ([coords[1], coords[0]]))
      }
    }
  });
  map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#f00',
      'line-width': 4
    }
  });
});