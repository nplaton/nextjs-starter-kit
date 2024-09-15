declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: Element, opts?: MapOptions);
    }

    class Marker {
      constructor(opts?: MarkerOptions);
    }

    interface MapOptions {
      center: LatLngLiteral;
      zoom: number;
    }

    interface MarkerOptions {
      position: LatLngLiteral;
      map: Map;
      title?: string;
    }

    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
  }
}