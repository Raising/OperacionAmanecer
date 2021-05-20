<template functional>
  <span v-on="listeners">
    <svg
      width="1310"
      height="1001"
      viewBox="0 0 1310 1001"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g clip-path="url(#clip01)">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="241" width="1310" height="775">
          <rect y="241" width="1310" height="775" fill="url(#paint01_linear)" />
        </mask>
        <g mask="url(#mask0)">
          <g style="mix-blend-mode: overlay">
            <rect y="359" width="1310" height="874" fill="url(#pattern0)" />
          </g>
          <g style="mix-blend-mode: lighten" opacity="0.7">
            <rect y="465" width="1308" height="544" fill="url(#pattern1)" fill-opacity="0.7" />
          </g>
        </g>
        <g style="mix-blend-mode: overlay">
          <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="-50" width="1310" height="971">
            <rect y="-50" width="1310" height="971" fill="url(#paint1_radial)" />
          </mask>
          <g mask="url(#mask1)">
            <rect width="1307.54" height="872" transform="matrix(-1 0 0 1 1383.54 -50)" fill="url(#pattern2)" />
          </g>
        </g>
        <g style="mix-blend-mode: soft-light">
          <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="-50" width="1310" height="971">
            <rect y="-50" width="1310" height="971" fill="url(#paint2_radial)" />
          </mask>
          <g mask="url(#mask2)">
            <rect width="1307.54" height="872" transform="matrix(-1 0 0 1 1383.54 -50)" fill="url(#pattern3)" />
          </g>
        </g>
      </g>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0" transform="translate(-0.000320605) scale(0.000244297 0.000366166)" />
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image1" transform="translate(-0.000165358) scale(0.000277638 0.000667557)" />
        </pattern>
        <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image2" transform="translate(-0.000115773) scale(0.000244197 0.000366166)" />
        </pattern>
        <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image2" transform="translate(-0.000115773) scale(0.000244197 0.000366166)" />
        </pattern>
        <linearGradient id="paint01_linear" x1="580" y1="1006" x2="580" y2="350" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(906.958 268.47) rotate(73.7158) scale(522.032 717.219)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(906.958 268.47) rotate(73.7158) scale(522.032 717.219)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <clipPath id="clip01">
          <rect width="1310" height="1001" fill="white" />
        </clipPath>
        <image id="image0" width="4096" height="2731" xlink:href="backgroundLogin0.jpg" />
        <image id="image1" width="3603" height="1498" xlink:href="backgroundLogin1.png" />
        <image id="image2" width="4096" height="2731" xlink:href="backgroundLogin2.jpg" />
      </defs>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'BackgroundLogin',
  props: {},
};
</script>
