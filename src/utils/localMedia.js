import brandLogo from "../assets/images/brand-logo.png";
import brandReference from "../assets/images/brand-reference.png";
import brandWordmark from "../assets/images/brand-wordmark.png";
import brandMark from "../assets/images/brand-mark.svg";
import layer1 from "../assets/images/Layer 1.png";
import layer2 from "../assets/images/Layer 2.png";
import layer3 from "../assets/images/Layer 3.png";
import layer4 from "../assets/images/Layer 4.png";
import layer5 from "../assets/images/Layer 5.png";
import layer6 from "../assets/images/Layer 6.png";
import layer7 from "../assets/images/Layer 7.png";
import veil from "../assets/banners/veil.svg";
import halo from "../assets/products/halo.svg";

export const media = {
  brandLogo,
  brandReference,
  brandWordmark,
  brandMark,
  veil,
  halo,
};

export const galleryImages = [layer2, layer4, layer5, layer6, layer7, layer3, layer1];

export const getGalleryImage = (index) => galleryImages[index % galleryImages.length];
