import { getRgbaStringFromHex } from '../../utils/stylings';
import theme, { mediaQuery } from '../';

export default `
  .slick-slider {
    display: block;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;

    &.slick-initialized .slick-slide {
      display: block;
    }

    &.slick-loading .slick-slide {
      visibility: hidden;
    }

    &.slick-vertical .slick-slide {
      display: block;
      height: auto;
      border: 1px solid transparent;
    }
  }

  .slick-list {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    overflow: hidden;

    &:focus {
      outline: none;
    }

    &.dragging {
      cursor: pointer;
      cursor: hand;
    }
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-right: auto;
    margin-left: auto;

    &:before,
    &:after {
      display: table;
      content: '';
    }

    &:after {
      clear: both;
    }

    .slick-loading & {
      visibility: hidden;
    }
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;

    [dir='rtl'] & {
      float: right;
    }

    img {
      display: block;
    }

    &.slick-loading img {
      display: none;
    }

    &.dragging img {
      pointer-events: none;
    }
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-slider div {
    outline: none;
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    list-style: none;

    li {
      width: 0.5rem;
      height: 0.5rem;
      background-color: ${theme.colors.gray.base};
      border-radius: 100%;
      cursor: pointer;
      transition: 0.5s ease background-color;

      &:not(:first-of-type) {
        margin-left: 1.5rem;
      }

      ${mediaQuery('sm')} {
        width: 1rem;
        height: 1rem;
      }
    }

    .slick-active {
      background-color: ${theme.colors.brand.base};
    }

    button {
      width: 100%;
      height: 100%;
    }
  }

  &.news-slider {
    .slick {
      &-list {
        overflow: visible !important;
      }

      &-slider {
        position: relative;
      }

      &-slide {
        position: relative;

        img {
          position: absolute;
          right: 0;
          left: 0;
          width: 100vw;
          height: ${theme.sizes.news.slider.imageHeightMobile};
          object-fit: cover;
          object-position: 50% 60%;
          pointer-events: none;

          ${mediaQuery('sm')} {
            height: ${theme.sizes.news.slider.imageHeight};
          }
        }
      }

      &-arrow {
        position: absolute;
        top: calc((${theme.sizes.news.slider.imageHeightMobile} - ${
  theme.sizes.news.slider.arrowSize
}) / 2);
        z-index: 1;
        width: ${theme.sizes.news.slider.arrowSizeMobile};
        height: ${theme.sizes.news.slider.arrowSizeMobile};
        background-color: ${getRgbaStringFromHex(theme.colors.white, 0.85)};
        outline: none;
        transition: 0.1s ease-in transform;

        ${mediaQuery('sm')} {
        top: calc((${theme.sizes.news.slider.imageHeight} - ${
  theme.sizes.news.slider.arrowSize
}) / 2);
        width: ${theme.sizes.news.slider.arrowSize};
        height: ${theme.sizes.news.slider.arrowSize};
        }
      }

      &-prev {
        left: -${+theme.sizes.news.slider.arrowSize.slice(0, -2) / 2}px;
        border-radius: 0 50px 50px 0;

        &:hover {
          transform: translateX(8px);
        }
      }

      &-next {
        right: -${+theme.sizes.news.slider.arrowSize.slice(0, -2) / 2}px;
        border-radius: 50px 0 0 50px;

        &:hover {
          transform: translateX(-8px);
        }
      }
    }

    .teaser {
      position: absolute;
      left: 0;
      bottom: calc(5vh);
      width: 100%;
      height: 6rem;
      padding: 1rem;
      color: white;
      background-color: ${getRgbaStringFromHex(theme.colors.brand.base, 0.8)};
      text-align: center;
      z-index: 1;
      
      ${mediaQuery('md')} {
        left: 100px;
        bottom: 0;
        width: 55%;
        min-width: 40rem;
        height: 35vh;
        padding: 3rem 5rem;
        text-align: unset;
        clip-path: polygon(0 0, 94% 10%, 100% 83%, 3% 100%);
      }
    }
  }
`;
