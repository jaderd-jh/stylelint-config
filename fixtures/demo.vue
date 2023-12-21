<style lang="scss" scoped>
.foo {
  .bar {
    color: red;
    top: red;
  }
}

  a { transform: translate(1px
  ,1px) }

.dash {
  .disabled {
    color: #00000040;
    pointer-events: none;
    cursor: not-allowed;
    background: #f5f5f5;

    img {
      filter: saturate(0.1);
    }
  }

  .dash-pre {
    background: linear-gradient(135deg, rgb(117 203 255 / 100%) 0%, rgb(117 203 255 / 100%) 1%, rgb(19 160 255 / 100%) 100%, rgb(19 160 255 / 100%) 100%);

    &-navs {
      & > a:nth-child(1) {
        grid-area: 1 / 1 / 3 / 2;
      }
    }
  }
}

.buz { display: inline; width: 100px; }
</style>
