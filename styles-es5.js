(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/Core/core.scss":
  /*!********************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/assets/Core/core.scss ***!
    \********************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderLibLoaderJsSrcAssetsCoreCoreScss(module, exports) {
    module.exports = [[module.i, "/* Main Style Scss File */\n/* Container, Layout and Basic Styles */\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n.img-container .img-item {\n  width: 100%;\n  height: 100%;\n}\n/* Space Vertical sv-# */\n/* Nav Bar Style */\n.nav-container {\n  position: relative;\n  width: 100%;\n  height: 10vh;\n}\n.nav-container .nav-div {\n  padding: 1em;\n}\n.nav-container .nav-div .nav-logo {\n  float: left;\n  margin-left: 1em;\n}\n.nav-container .nav-div .nav-items {\n  float: right;\n  margin-right: 1em;\n}\n.nav-container .nav-div .nav-items .menu-container {\n  display: inline-flex;\n}\n.nav-container .nav-div .nav-items .menu-container .menu-items {\n  margin-left: 5em;\n}\n.nav-container .nav-div .nav-items .menu-container .menu-items a {\n  color: var(--grey_body);\n  text-decoration: none;\n}\n.nav-container .nav-div .nav-items .menu-container .menu-items a .menu-lists {\n  font-size: 1em;\n  font-weight: 400;\n  transition: 0.5s ease-in-out;\n}\n.nav-container .nav-div .nav-items .menu-container .menu-items a .menu-lists .list-underline {\n  width: 0em;\n  height: 3px;\n  background: var(--primarycore);\n  transition: 0.5s ease-in-out;\n}\n.nav-container .nav-div .nav-items .menu-container .menu-items a .menu-lists:hover {\n  color: var(--blackcore);\n  transition: 0.5s ease-in-out;\n}\n.nav-container .nav-div .nav-items .menu-container .menu-items a .menu-lists:hover .list-underline {\n  width: 1.5em;\n  height: 3px;\n  transition: 0.5s ease-in-out;\n}\n.active {\n  color: var(--blackcore) !important;\n}\n.active .list-underline {\n  width: 1.5em !important;\n  height: 3px !important;\n  transition: 0.5s ease-in-out !important;\n}\n.logo-container {\n  width: 65%;\n}\n/* Exception Styling */\n/* Portfolio Styling */\n.layout-container .titleblock .txt-title {\n  font-size: 13rem;\n  font-weight: 700;\n  margin-left: -6rem;\n}\n.layout-container .titleblock .txt-strip {\n  background: var(--primarycore);\n  width: 5em;\n  height: 12px;\n}\n/* Work Card */\n.spacev {\n  margin-top: 25vh;\n}\n.wrk-container .row {\n  margin: 0;\n}\n.wrk-container .wrk-highlight {\n  background: var(--grey_bg);\n  width: 100%;\n  padding: 1em 0;\n}\n.wrk-container .wrk-layout {\n  height: 600px;\n}\n.wrk-container .wrk-layout .col-img.col-7 {\n  padding: 0;\n}\n.wrk-container .wrk-layout .col-img.col-7 .wrk-img {\n  overflow: hidden;\n  height: 565px;\n  width: 850px;\n}\n.wrk-container .wrk-layout .col-img.col-7 .wrk-img .img-item {\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: 0.5s ease-in-out;\n}\n.wrk-container .wrk-layout .col-img.col-7 .wrk-img .img-item:hover {\n  transform: scale(1.2);\n  transition: 0.5s ease-in-out;\n}\n.wrk-container .wrk-layout .col-content {\n  padding: 2em 0;\n}\n.wrk-container .wrk-layout .col-content .wrk-txt {\n  color: var(--primarycore);\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.wrk-container .wrk-layout .col-content .wrk-txt .wrk-strip {\n  margin: 10px 0;\n  height: 10px;\n  width: 90px;\n  background: var(--primarycore);\n}\n.wrk-container .wrk-layout .col-content .wrk-title {\n  font-size: 2em;\n  font-weight: 800;\n  width: 450px;\n  margin: 10px 0;\n}\n.wrk-container .wrk-layout .col-content .wrk-para {\n  margin: 1em 0 2em 0;\n  font-size: 1em;\n  font-weight: 400;\n  width: 550px;\n  text-align: justify;\n  color: var(--grey_body);\n}\n.wrk-container .wrk-layout .col-content .wrk-btn {\n  width: 175px;\n  height: 40px;\n  border: none;\n  background: var(--blackcore);\n  color: var(--white);\n  font-weight: 500;\n  border-radius: 2px;\n  transition: 0.5s cubic-bezier(0.4, 0, 1, 1);\n}\n.wrk-container .wrk-layout .col-content .wrk-btn:hover {\n  border: var(--blackcore) solid 1px;\n  background: none;\n  color: var(--blackcore);\n  transition: 0.5s cubic-bezier(0.4, 0, 1, 1);\n}\n/* Regular Card */\n.wrk-regular {\n  padding: 5em;\n}\n.wrk-regular .col-content .wrk-index {\n  color: var(--grey_body);\n}\n.wrk-regular .col-content .wrk-title {\n  font-size: 2em;\n  font-weight: 800;\n  width: 450px;\n  margin: 10px 0;\n}\n.wrk-regular .col-content .wrk-para {\n  margin: 1em 0 2em 0;\n  font-size: 1em;\n  font-weight: 400;\n  width: 550px;\n  text-align: justify;\n  color: var(--grey_body);\n}\n.wrk-regular .col-content .wrk-btn {\n  width: 175px;\n  height: 40px;\n  border: none;\n  background: var(--blackcore);\n  color: var(--white);\n  font-weight: 500;\n  border-radius: 2px;\n  transition: 0.5s cubic-bezier(0.4, 0, 1, 1);\n}\n.wrk-regular .col-content .wrk-btn:hover {\n  border: var(--blackcore) solid 1px;\n  background: none;\n  color: var(--blackcore);\n  transition: 0.5s cubic-bezier(0.4, 0, 1, 1);\n}\n.wrk-regular .col-img .wrk-img {\n  overflow: hidden;\n  height: 500px;\n  width: 750px;\n}\n.wrk-regular .col-img .wrk-img .img-item {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  transition: 0.5s ease-in-out;\n}\n.wrk-regular .col-img .wrk-img .img-item:hover {\n  transform: scale(1.2);\n  -webkit-filter: grayscale(0%);\n          filter: grayscale(0%);\n  transition: 0.5s ease-in-out;\n}\n/* Info Part */\n.info-container {\n  margin-left: 5em;\n}\n.info-container .info-txt {\n  color: var(--grey_body);\n}\n.info-container .info-txt .info-link {\n  font-size: 1.2em;\n  font-weight: 800;\n  color: var(--primarycore);\n}\na {\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n}\np {\n  margin: 0;\n}\nul, li {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\nbody {\n  overflow-x: hidden;\n  background: #F6F6F6;\n}\n:root {\n  /*Theme Colors*/\n  --primarycore: #1C57EE;\n  --blackcore: #000000;\n  --grey_body: #868686;\n  --grey_content: #BEBEBE;\n  --grey_bg: #EFEFEF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvQ29yZS9GOlxcUGVyc29uYWxcXFdlYnNpdGVcXERldmVsb3BtZW50XFxQb3J0Zm9saW8yLjBcXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcQ29yZVxcY29yZS5zY3NzIiwic3JjL2Fzc2V0cy9Db3JlL0Y6XFxQZXJzb25hbFxcV2Vic2l0ZVxcRGV2ZWxvcG1lbnRcXFBvcnRmb2xpbzIuMFxccG9ydGZvbGlvL3NyY1xcYXNzZXRzXFxDb3JlXFxTY3NzXFxsYXlvdXRjb250YWluZXIuc2NzcyIsInNyYy9hc3NldHMvQ29yZS9jb3JlLnNjc3MiLCJzcmMvYXNzZXRzL0NvcmUvRjpcXFBlcnNvbmFsXFxXZWJzaXRlXFxEZXZlbG9wbWVudFxcUG9ydGZvbGlvMi4wXFxwb3J0Zm9saW8vc3JjXFxhc3NldHNcXENvcmVcXFNjc3NcXE5hdmJhclxcbmF2YmFyLnNjc3MiLCJzcmMvYXNzZXRzL0NvcmUvRjpcXFBlcnNvbmFsXFxXZWJzaXRlXFxEZXZlbG9wbWVudFxcUG9ydGZvbGlvMi4wXFxwb3J0Zm9saW8vc3JjXFxhc3NldHNcXENvcmVcXFNjc3NcXGV4Y2VwdGlvbi5zY3NzIiwic3JjL2Fzc2V0cy9Db3JlL0Y6XFxQZXJzb25hbFxcV2Vic2l0ZVxcRGV2ZWxvcG1lbnRcXFBvcnRmb2xpbzIuMFxccG9ydGZvbGlvL3NyY1xcYXNzZXRzXFxDb3JlXFxTY3NzXFxQYWdlc19TY3NzXFxwb3J0Zm9saW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBQTtBQ0NBLHVDQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGO0FETUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0hKO0FEUUEsd0JBQUE7QUVsQkEsa0JBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURhRjtBQ1hFO0VBQ0UsWUFBQTtBRGFKO0FDWEk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QURhTjtBQ1hJO0VBQ0UsWUFBQTtFQUNBLGlCQUFB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O0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FFNk5GO0FGM05BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBRThORjtBRjVOQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FFK05GIiwiZmlsZSI6InNyYy9hc3NldHMvQ29yZS9jb3JlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNYWluIFN0eWxlIFNjc3MgRmlsZSAqL1xyXG5cclxuLy9AaW1wb3J0IFNlY3Rpb25cclxuQGltcG9ydCBcInNyYy9hc3NldHMvQ29yZS9TY3NzL2xheW91dGNvbnRhaW5lci5zY3NzXCI7XHJcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL0NvcmUvU2Nzcy9OYXZiYXIvbmF2YmFyLnNjc3NcIjtcclxuQGltcG9ydCBcInNyYy9hc3NldHMvQ29yZS9TY3NzL2V4Y2VwdGlvbi5zY3NzXCI7XHJcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL0NvcmUvU2Nzcy9QYWdlc19TY3NzL3BvcnRmb2xpby5zY3NzXCI7XHJcblxyXG5odG1sICoge1xyXG5cclxufVxyXG5cclxuYSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG51bCwgbGkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuYm9keSB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6ICNGNkY2RjY7XHJcbn1cclxuOnJvb3Qge1xyXG4gIC8qVGhlbWUgQ29sb3JzKi9cclxuICAtLXByaW1hcnljb3JlOiAjMUM1N0VFO1xyXG4gIC0tYmxhY2tjb3JlOiAjMDAwMDAwO1xyXG4gIC0tZ3JleV9ib2R5OiAjODY4Njg2O1xyXG4gIC0tZ3JleV9jb250ZW50OiAjQkVCRUJFO1xyXG4gIC0tZ3JleV9iZzogI0VGRUZFRjtcclxuXHJcbn1cclxuIiwiXHJcbi8qIENvbnRhaW5lciwgTGF5b3V0IGFuZCBCYXNpYyBTdHlsZXMgKi9cclxuXHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8vSW1nLUNvbnRhaW5lclxyXG4uaW1nLWNvbnRhaW5lciB7XHJcblxyXG4gIC5pbWctaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBTcGFjZSBWZXJ0aWNhbCBzdi0jICovXHJcbkBtaXhpbiBjYXJkc3Yge1xyXG4gIG1hcmdpbi10b3A6IDI1dmg7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyogTWFpbiBTdHlsZSBTY3NzIEZpbGUgKi9cbi8qIENvbnRhaW5lciwgTGF5b3V0IGFuZCBCYXNpYyBTdHlsZXMgKi9cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltZy1jb250YWluZXIgLmltZy1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogU3BhY2UgVmVydGljYWwgc3YtIyAqL1xuLyogTmF2IEJhciBTdHlsZSAqL1xuLm5hdi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwdmg7XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRpdiB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5uYXYtY29udGFpbmVyIC5uYXYtZGl2IC5uYXYtbG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLm5hdi1jb250YWluZXIgLm5hdi1kaXYgLm5hdi1pdGVtcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRpdiAubmF2LWl0ZW1zIC5tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLm5hdi1jb250YWluZXIgLm5hdi1kaXYgLm5hdi1pdGVtcyAubWVudS1jb250YWluZXIgLm1lbnUtaXRlbXMge1xuICBtYXJnaW4tbGVmdDogNWVtO1xufVxuLm5hdi1jb250YWluZXIgLm5hdi1kaXYgLm5hdi1pdGVtcyAubWVudS1jb250YWluZXIgLm1lbnUtaXRlbXMgYSB7XG4gIGNvbG9yOiB2YXIoLS1ncmV5X2JvZHkpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRpdiAubmF2LWl0ZW1zIC5tZW51LWNvbnRhaW5lciAubWVudS1pdGVtcyBhIC5tZW51LWxpc3RzIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRpdiAubmF2LWl0ZW1zIC5tZW51LWNvbnRhaW5lciAubWVudS1pdGVtcyBhIC5tZW51LWxpc3RzIC5saXN0LXVuZGVybGluZSB7XG4gIHdpZHRoOiAwZW07XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5Y29yZSk7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRpdiAubmF2LWl0ZW1zIC5tZW51LWNvbnRhaW5lciAubWVudS1pdGVtcyBhIC5tZW51LWxpc3RzOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWJsYWNrY29yZSk7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRpdiAubmF2LWl0ZW1zIC5tZW51LWNvbnRhaW5lciAubWVudS1pdGVtcyBhIC5tZW51LWxpc3RzOmhvdmVyIC5saXN0LXVuZGVybGluZSB7XG4gIHdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tYmxhY2tjb3JlKSAhaW1wb3J0YW50O1xufVxuLmFjdGl2ZSAubGlzdC11bmRlcmxpbmUge1xuICB3aWR0aDogMS41ZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzcHggIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICB3aWR0aDogNjUlO1xufVxuXG4vKiBFeGNlcHRpb24gU3R5bGluZyAqL1xuLyogUG9ydGZvbGlvIFN0eWxpbmcgKi9cbi5sYXlvdXQtY29udGFpbmVyIC50aXRsZWJsb2NrIC50eHQtdGl0bGUge1xuICBmb250LXNpemU6IDEzcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tbGVmdDogLTZyZW07XG59XG4ubGF5b3V0LWNvbnRhaW5lciAudGl0bGVibG9jayAudHh0LXN0cmlwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeWNvcmUpO1xuICB3aWR0aDogNWVtO1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbi8qIFdvcmsgQ2FyZCAqL1xuLnNwYWNldiB7XG4gIG1hcmdpbi10b3A6IDI1dmg7XG59XG5cbi53cmstY29udGFpbmVyIC5yb3cge1xuICBtYXJnaW46IDA7XG59XG4ud3JrLWNvbnRhaW5lciAud3JrLWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZXlfYmcpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtIDA7XG59XG4ud3JrLWNvbnRhaW5lciAud3JrLWxheW91dCB7XG4gIGhlaWdodDogNjAwcHg7XG59XG4ud3JrLWNvbnRhaW5lciAud3JrLWxheW91dCAuY29sLWltZy5jb2wtNyB7XG4gIHBhZGRpbmc6IDA7XG59XG4ud3JrLWNvbnRhaW5lciAud3JrLWxheW91dCAuY29sLWltZy5jb2wtNyAud3JrLWltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNTY1cHg7XG4gIHdpZHRoOiA4NTBweDtcbn1cbi53cmstY29udGFpbmVyIC53cmstbGF5b3V0IC5jb2wtaW1nLmNvbC03IC53cmstaW1nIC5pbWctaXRlbSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLndyay1jb250YWluZXIgLndyay1sYXlvdXQgLmNvbC1pbWcuY29sLTcgLndyay1pbWcgLmltZy1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLndyay1jb250YWluZXIgLndyay1sYXlvdXQgLmNvbC1jb250ZW50IHtcbiAgcGFkZGluZzogMmVtIDA7XG59XG4ud3JrLWNvbnRhaW5lciAud3JrLWxheW91dCAuY29sLWNvbnRlbnQgLndyay10eHQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeWNvcmUpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLndyay1jb250YWluZXIgLndyay1sYXlvdXQgLmNvbC1jb250ZW50IC53cmstdHh0IC53cmstc3RyaXAge1xuICBtYXJnaW46IDEwcHggMDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogOTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeWNvcmUpO1xufVxuLndyay1jb250YWluZXIgLndyay1sYXlvdXQgLmNvbC1jb250ZW50IC53cmstdGl0bGUge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi53cmstY29udGFpbmVyIC53cmstbGF5b3V0IC5jb2wtY29udGVudCAud3JrLXBhcmEge1xuICBtYXJnaW46IDFlbSAwIDJlbSAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2lkdGg6IDU1MHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogdmFyKC0tZ3JleV9ib2R5KTtcbn1cbi53cmstY29udGFpbmVyIC53cmstbGF5b3V0IC5jb2wtY29udGVudCAud3JrLWJ0biB7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrY29yZSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcbn1cbi53cmstY29udGFpbmVyIC53cmstbGF5b3V0IC5jb2wtY29udGVudCAud3JrLWJ0bjpob3ZlciB7XG4gIGJvcmRlcjogdmFyKC0tYmxhY2tjb3JlKSBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1ibGFja2NvcmUpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO1xufVxuXG4vKiBSZWd1bGFyIENhcmQgKi9cbi53cmstcmVndWxhciB7XG4gIHBhZGRpbmc6IDVlbTtcbn1cbi53cmstcmVndWxhciAuY29sLWNvbnRlbnQgLndyay1pbmRleCB7XG4gIGNvbG9yOiB2YXIoLS1ncmV5X2JvZHkpO1xufVxuLndyay1yZWd1bGFyIC5jb2wtY29udGVudCAud3JrLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4ud3JrLXJlZ3VsYXIgLmNvbC1jb250ZW50IC53cmstcGFyYSB7XG4gIG1hcmdpbjogMWVtIDAgMmVtIDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aWR0aDogNTUwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiB2YXIoLS1ncmV5X2JvZHkpO1xufVxuLndyay1yZWd1bGFyIC5jb2wtY29udGVudCAud3JrLWJ0biB7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrY29yZSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcbn1cbi53cmstcmVndWxhciAuY29sLWNvbnRlbnQgLndyay1idG46aG92ZXIge1xuICBib3JkZXI6IHZhcigtLWJsYWNrY29yZSkgc29saWQgMXB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tYmxhY2tjb3JlKTtcbiAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcbn1cbi53cmstcmVndWxhciAuY29sLWltZyAud3JrLWltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA3NTBweDtcbn1cbi53cmstcmVndWxhciAuY29sLWltZyAud3JrLWltZyAuaW1nLWl0ZW0ge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ud3JrLXJlZ3VsYXIgLmNvbC1pbWcgLndyay1pbWcgLmltZy1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSk7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qIEluZm8gUGFydCAqL1xuLmluZm8tY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDVlbTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby10eHQge1xuICBjb2xvcjogdmFyKC0tZ3JleV9ib2R5KTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby10eHQgLmluZm8tbGluayB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5Y29yZSk7XG59XG5cbmEge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxudWwsIGxpIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xufVxuXG46cm9vdCB7XG4gIC8qVGhlbWUgQ29sb3JzKi9cbiAgLS1wcmltYXJ5Y29yZTogIzFDNTdFRTtcbiAgLS1ibGFja2NvcmU6ICMwMDAwMDA7XG4gIC0tZ3JleV9ib2R5OiAjODY4Njg2O1xuICAtLWdyZXlfY29udGVudDogI0JFQkVCRTtcbiAgLS1ncmV5X2JnOiAjRUZFRkVGO1xufSIsIi8qIE5hdiBCYXIgU3R5bGUgKi9cclxuXHJcbi5uYXYtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG5cclxuICAubmF2LWRpdiB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcblxyXG4gICAgLm5hdi1sb2dvIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICB9XHJcbiAgICAubmF2LWl0ZW1zIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuXHJcbiAgICAgIC5tZW51LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgLm1lbnUtaXRlbXMge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVlbTtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JleV9ib2R5KTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAubWVudS1saXN0cyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAubGlzdC11bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDBlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeWNvcmUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2tjb3JlKTtcclxuICAgICAgICAgICAgICAgIC5saXN0LXVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrY29yZSkgIWltcG9ydGFudDtcclxuICAubGlzdC11bmRlcmxpbmUge1xyXG4gICAgd2lkdGg6IDEuNWVtICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy9pbWcgT3ZlcnJpZGVcclxuLmxvZ28tY29udGFpbmVyIHtcclxuICB3aWR0aDogNjUlO1xyXG59XHJcbiIsIi8qIEV4Y2VwdGlvbiBTdHlsaW5nICovXHJcbiIsIi8qIFBvcnRmb2xpbyBTdHlsaW5nICovXHJcblxyXG4ubGF5b3V0LWNvbnRhaW5lciB7XHJcbiAgLnRpdGxlYmxvY2sge1xyXG4gICAgLnR4dC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNnJlbTtcclxuICAgIH1cclxuICAgIC50eHQtc3RyaXAge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5Y29yZSk7XHJcbiAgICAgIHdpZHRoOiA1ZW07XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFdvcmsgQ2FyZCAqL1xyXG4uc3BhY2V2IHtcclxuICBAaW5jbHVkZSBjYXJkc3Y7XHJcbn1cclxuXHJcbi8vSGlnaGxpZ2h0IENhcmRcclxuLndyay1jb250YWluZXIge1xyXG4gIC5yb3cge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAud3JrLWhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmV5X2JnKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgfVxyXG4gIC53cmstbGF5b3V0IHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcblxyXG4gICAgLy9JbWcgUGFydFxyXG4gICAgLmNvbC1pbWcuY29sLTcge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgLndyay1pbWcge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaGVpZ2h0OiA1NjVweDtcclxuICAgICAgICB3aWR0aDogODUwcHg7XHJcblxyXG4gICAgICAgIC5pbWctaXRlbSB7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1RleHQgUGFya1xyXG4gICAgLmNvbC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMmVtIDA7XHJcblxyXG4gICAgICAud3JrLXR4dCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnljb3JlKTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblxyXG4gICAgICAgIC53cmstc3RyaXAge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnljb3JlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC53cmstdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICB9XHJcbiAgICAgIC53cmstcGFyYSB7XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gMCAyZW0gMDtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHdpZHRoOiA1NTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmV5X2JvZHkpO1xyXG4gICAgICB9XHJcbiAgICAgIC53cmstYnRuIHtcclxuICAgICAgICB3aWR0aDogMTc1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFja2NvcmUpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXI6IHZhcigtLWJsYWNrY29yZSkgc29saWQgMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFja2NvcmUpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFJlZ3VsYXIgQ2FyZCAqL1xyXG4ud3JrLXJlZ3VsYXIge1xyXG4gIHBhZGRpbmc6IDVlbTtcclxuICAvL1RleHQgUGFya1xyXG4gIC5jb2wtY29udGVudCB7XHJcbiAgICAud3JrLWluZGV4IHtcclxuICAgICAgY29sb3I6IHZhcigtLWdyZXlfYm9keSk7XHJcbiAgICB9XHJcbiAgICAud3JrLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICAud3JrLXBhcmEge1xyXG4gICAgICBtYXJnaW46IDFlbSAwIDJlbSAwO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICBjb2xvcjogdmFyKC0tZ3JleV9ib2R5KTtcclxuICAgIH1cclxuICAgIC53cmstYnRuIHtcclxuICAgICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2tjb3JlKTtcclxuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1ibGFja2NvcmUpIHNvbGlkIDFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFja2NvcmUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vSW1hZ2UgUGFydFxyXG4gIC5jb2wtaW1nIHtcclxuICAgIC53cmstaW1nIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgd2lkdGg6IDc1MHB4O1xyXG5cclxuICAgICAgLmltZy1pdGVtIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBJbmZvIFBhcnQgKi9cclxuLmluZm8tY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogNWVtO1xyXG4gIC5pbmZvLXR4dCB7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JleV9ib2R5KTtcclxuICAgIC5pbmZvLWxpbmsge1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeWNvcmUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */", '', '']];
    /***/
  },

  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
  /*!**********************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
    \**********************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderLibLoaderJsSrcStylesScss(module, exports) {
    module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/* Main Style Scss File */\n/* Container, Layout and Basic Styles */\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n.img-container .img-item {\n  width: 100%;\n  height: 100%;\n}\n/* Space Vertical sv-# */\n/* Nav Bar Style */\n.nav-container {\n  position: relative;\n  width: 100%;\n  height: 10vh;\n}\n.nav-container .nav-div {\n  padding: 1em;\n}\n.nav-container .nav-div .nav-logo {\n  float: left;\n  margin-left: 1em;\n}\n.nav-container .nav-div .nav-items {\n  float: right;\n  margin-right: 1em;\n}\n.nav-container .nav-div .nav-items .menu-container {\n  display: inline-flex;\n}\n.nav-container .nav-div .nav-items .menu-container .menu-items {\n  margin-left: 5em;\n}\n.nav-container .nav-div .nav-items .menu-container .menu-items a {\n  color: var(--grey_body);\n  text-decoration: none;\n}\n.nav-container .nav-div .nav-items .menu-container .menu-items a .menu-lists {\n  font-size: 1em;\n  font-weight: 400;\n  transition: 0.5s ease-in-out;\n}\n.nav-container .nav-div .nav-items .menu-container .menu-items a .menu-lists .list-underline {\n  width: 0em;\n  height: 3px;\n  background: var(--primarycore);\n  transition: 0.5s ease-in-out;\n}\n.nav-container .nav-div .nav-items .menu-container .menu-items a .menu-lists:hover {\n  color: var(--blackcore);\n  transition: 0.5s ease-in-out;\n}\n.nav-container .nav-div .nav-items .menu-container .menu-items a .menu-lists:hover .list-underline {\n  width: 1.5em;\n  height: 3px;\n  transition: 0.5s ease-in-out;\n}\n.active {\n  color: var(--blackcore) !important;\n}\n.active .list-underline {\n  width: 1.5em !important;\n  height: 3px !important;\n  transition: 0.5s ease-in-out !important;\n}\n.logo-container {\n  width: 65%;\n}\n/* Exception Styling */\n/* Portfolio Styling */\n.layout-container .titleblock .txt-title {\n  font-size: 13rem;\n  font-weight: 700;\n  margin-left: -6rem;\n}\n.layout-container .titleblock .txt-strip {\n  background: var(--primarycore);\n  width: 5em;\n  height: 12px;\n}\n/* Work Card */\n.spacev {\n  margin-top: 25vh;\n}\n.wrk-container .row {\n  margin: 0;\n}\n.wrk-container .wrk-highlight {\n  background: var(--grey_bg);\n  width: 100%;\n  padding: 1em 0;\n}\n.wrk-container .wrk-layout {\n  height: 600px;\n}\n.wrk-container .wrk-layout .col-img.col-7 {\n  padding: 0;\n}\n.wrk-container .wrk-layout .col-img.col-7 .wrk-img {\n  overflow: hidden;\n  height: 565px;\n  width: 850px;\n}\n.wrk-container .wrk-layout .col-img.col-7 .wrk-img .img-item {\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: 0.5s ease-in-out;\n}\n.wrk-container .wrk-layout .col-img.col-7 .wrk-img .img-item:hover {\n  transform: scale(1.2);\n  transition: 0.5s ease-in-out;\n}\n.wrk-container .wrk-layout .col-content {\n  padding: 2em 0;\n}\n.wrk-container .wrk-layout .col-content .wrk-txt {\n  color: var(--primarycore);\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.wrk-container .wrk-layout .col-content .wrk-txt .wrk-strip {\n  margin: 10px 0;\n  height: 10px;\n  width: 90px;\n  background: var(--primarycore);\n}\n.wrk-container .wrk-layout .col-content .wrk-title {\n  font-size: 2em;\n  font-weight: 800;\n  width: 450px;\n  margin: 10px 0;\n}\n.wrk-container .wrk-layout .col-content .wrk-para {\n  margin: 1em 0 2em 0;\n  font-size: 1em;\n  font-weight: 400;\n  width: 550px;\n  text-align: justify;\n  color: var(--grey_body);\n}\n.wrk-container .wrk-layout .col-content .wrk-btn {\n  width: 175px;\n  height: 40px;\n  border: none;\n  background: var(--blackcore);\n  color: var(--white);\n  font-weight: 500;\n  border-radius: 2px;\n  transition: 0.5s cubic-bezier(0.4, 0, 1, 1);\n}\n.wrk-container .wrk-layout .col-content .wrk-btn:hover {\n  border: var(--blackcore) solid 1px;\n  background: none;\n  color: var(--blackcore);\n  transition: 0.5s cubic-bezier(0.4, 0, 1, 1);\n}\n/* Regular Card */\n.wrk-regular {\n  padding: 5em;\n}\n.wrk-regular .col-content .wrk-index {\n  color: var(--grey_body);\n}\n.wrk-regular .col-content .wrk-title {\n  font-size: 2em;\n  font-weight: 800;\n  width: 450px;\n  margin: 10px 0;\n}\n.wrk-regular .col-content .wrk-para {\n  margin: 1em 0 2em 0;\n  font-size: 1em;\n  font-weight: 400;\n  width: 550px;\n  text-align: justify;\n  color: var(--grey_body);\n}\n.wrk-regular .col-content .wrk-btn {\n  width: 175px;\n  height: 40px;\n  border: none;\n  background: var(--blackcore);\n  color: var(--white);\n  font-weight: 500;\n  border-radius: 2px;\n  transition: 0.5s cubic-bezier(0.4, 0, 1, 1);\n}\n.wrk-regular .col-content .wrk-btn:hover {\n  border: var(--blackcore) solid 1px;\n  background: none;\n  color: var(--blackcore);\n  transition: 0.5s cubic-bezier(0.4, 0, 1, 1);\n}\n.wrk-regular .col-img .wrk-img {\n  overflow: hidden;\n  height: 500px;\n  width: 750px;\n}\n.wrk-regular .col-img .wrk-img .img-item {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  transition: 0.5s ease-in-out;\n}\n.wrk-regular .col-img .wrk-img .img-item:hover {\n  transform: scale(1.2);\n  -webkit-filter: grayscale(0%);\n          filter: grayscale(0%);\n  transition: 0.5s ease-in-out;\n}\n/* Info Part */\n.info-container {\n  margin-left: 5em;\n}\n.info-container .info-txt {\n  color: var(--grey_body);\n}\n.info-container .info-txt .info-link {\n  font-size: 1.2em;\n  font-weight: 800;\n  color: var(--primarycore);\n}\na {\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n}\np {\n  margin: 0;\n}\nul, li {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\nbody {\n  overflow-x: hidden;\n  background: #F6F6F6;\n}\n:root {\n  /*Theme Colors*/\n  --primarycore: #1C57EE;\n  --blackcore: #000000;\n  --grey_body: #868686;\n  --grey_content: #BEBEBE;\n  --grey_bg: #EFEFEF;\n}\nContent Hide #wrapper-desktop {\n  display: block;\n}\n#wrapper-mobile {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  #wrapper-desktop {\n    display: none;\n  }\n\n  #wrapper-mobile {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9GOlxcUGVyc29uYWxcXFdlYnNpdGVcXERldmVsb3BtZW50XFxQb3J0Zm9saW8yLjBcXHBvcnRmb2xpby9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL0Y6XFxQZXJzb25hbFxcV2Vic2l0ZVxcRGV2ZWxvcG1lbnRcXFBvcnRmb2xpbzIuMFxccG9ydGZvbGlvL3NyY1xcYXNzZXRzXFxDb3JlXFxjb3JlLnNjc3MiLCJzcmMvRjpcXFBlcnNvbmFsXFxXZWJzaXRlXFxEZXZlbG9wbWVudFxcUG9ydGZvbGlvMi4wXFxwb3J0Zm9saW8vc3JjXFxhc3NldHNcXENvcmVcXFNjc3NcXGxheW91dGNvbnRhaW5lci5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwic3JjL0Y6XFxQZXJzb25hbFxcV2Vic2l0ZVxcRGV2ZWxvcG1lbnRcXFBvcnRmb2xpbzIuMFxccG9ydGZvbGlvL3NyY1xcYXNzZXRzXFxDb3JlXFxTY3NzXFxOYXZiYXJcXG5hdmJhci5zY3NzIiwic3JjL0Y6XFxQZXJzb25hbFxcV2Vic2l0ZVxcRGV2ZWxvcG1lbnRcXFBvcnRmb2xpbzIuMFxccG9ydGZvbGlvL3NyY1xcYXNzZXRzXFxDb3JlXFxTY3NzXFxleGNlcHRpb24uc2NzcyIsInNyYy9GOlxcUGVyc29uYWxcXFdlYnNpdGVcXERldmVsb3BtZW50XFxQb3J0Zm9saW8yLjBcXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcQ29yZVxcU2Nzc1xcUGFnZXNfU2Nzc1xccG9ydGZvbGlvLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQSx5QkFBQTtBQ0NBLHVDQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FET0Esd0JBQUE7QUVsQkEsa0JBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURjRjtBQ1pFO0VBQ0UsWUFBQTtBRGNKO0FDWkk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QURjTjtBQ1pJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FEY047QUNaTTtFQUNFLG9CQUFBO0FEY1I7QUNiUTtFQUNFLGdCQUFBO0FEZVY7QUNkVTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7QURnQlo7QUNmWTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQU9BLDRCQUFBO0FEV2Q7QUNqQmM7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QURtQmhCO0FDZmM7RUFDRSx1QkFBQTtFQU1BLDRCQUFBO0FEWWhCO0FDakJnQjtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QURtQmxCO0FDUEE7RUFDRSxrQ0FBQTtBRFVGO0FDVEU7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7QURXSjtBQ05BO0VBQ0UsVUFBQTtBRFNGO0FFekVBLHNCQUFBO0FDQUEsc0JBQUE7QUFJSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBSDBFTjtBR3hFSTtFQUNFLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUgwRU47QUdyRUEsY0FBQTtBQUNBO0VKRUUsZ0JBQUE7QUN1RUY7QUduRUU7RUFDRSxTQUFBO0FIc0VKO0FHcEVFO0VBQ0UsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBSHNFSjtBR3BFRTtFQUNFLGFBQUE7QUhzRUo7QUduRUk7RUFDRSxVQUFBO0FIcUVOO0FHbkVNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBSHFFUjtBR25FUTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSw0QkFBQTtBSHFFVjtBR25FVTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7QUhxRVo7QUc5REk7RUFDRSxjQUFBO0FIZ0VOO0FHOURNO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FIZ0VSO0FHOURRO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUhnRVY7QUc1RE07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBSDhEUjtBRzVETTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUg4RFI7QUc1RE07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FIOERSO0FHNURRO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7QUg4RFY7QUd2REEsaUJBQUE7QUFDQTtFQUNFLFlBQUE7QUgwREY7QUd2REk7RUFDRSx1QkFBQTtBSHlETjtBR3ZESTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FIeUROO0FHdkRJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBSHlETjtBR3ZESTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUh5RE47QUd2RE07RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtBSHlEUjtBR2xESTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUhvRE47QUdsRE07RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0FIb0RSO0FHbERRO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsNEJBQUE7QUhvRFY7QUc3Q0EsY0FBQTtBQUNBO0VBQ0UsZ0JBQUE7QUhnREY7QUcvQ0U7RUFDRSx1QkFBQTtBSGlESjtBR2hESTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBSGtETjtBRnpOQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUU0TkY7QUYxTkE7RUFDRSxTQUFBO0FFNk5GO0FGM05BO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBRThORjtBRjVOQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUUrTkY7QUY3TkE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBRWdPRjtBSDlQQTtFQUVFLGNBQUE7QUdnUUY7QUg5UEE7RUFDRSxhQUFBO0FHaVFGO0FIOVBBO0VBQ0U7SUFDRSxhQUFBO0VHaVFGOztFSC9QQTtJQUNFLGNBQUE7RUdrUUY7QUFDRiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbi8vTWFpbiBJbXBvcnRcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL0NvcmUvY29yZS5zY3NzXCI7XG5cbkNvbnRlbnQgSGlkZVxuI3dyYXBwZXItZGVza3RvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI3dyYXBwZXItbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3dyYXBwZXItZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjd3JhcHBlci1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iLCIvKiBNYWluIFN0eWxlIFNjc3MgRmlsZSAqL1xyXG5cclxuLy9AaW1wb3J0IFNlY3Rpb25cclxuQGltcG9ydCBcInNyYy9hc3NldHMvQ29yZS9TY3NzL2xheW91dGNvbnRhaW5lci5zY3NzXCI7XHJcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL0NvcmUvU2Nzcy9OYXZiYXIvbmF2YmFyLnNjc3NcIjtcclxuQGltcG9ydCBcInNyYy9hc3NldHMvQ29yZS9TY3NzL2V4Y2VwdGlvbi5zY3NzXCI7XHJcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL0NvcmUvU2Nzcy9QYWdlc19TY3NzL3BvcnRmb2xpby5zY3NzXCI7XHJcblxyXG5odG1sICoge1xyXG5cclxufVxyXG5cclxuYSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG51bCwgbGkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuYm9keSB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6ICNGNkY2RjY7XHJcbn1cclxuOnJvb3Qge1xyXG4gIC8qVGhlbWUgQ29sb3JzKi9cclxuICAtLXByaW1hcnljb3JlOiAjMUM1N0VFO1xyXG4gIC0tYmxhY2tjb3JlOiAjMDAwMDAwO1xyXG4gIC0tZ3JleV9ib2R5OiAjODY4Njg2O1xyXG4gIC0tZ3JleV9jb250ZW50OiAjQkVCRUJFO1xyXG4gIC0tZ3JleV9iZzogI0VGRUZFRjtcclxuXHJcbn1cclxuIiwiXHJcbi8qIENvbnRhaW5lciwgTGF5b3V0IGFuZCBCYXNpYyBTdHlsZXMgKi9cclxuXHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8vSW1nLUNvbnRhaW5lclxyXG4uaW1nLWNvbnRhaW5lciB7XHJcblxyXG4gIC5pbWctaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBTcGFjZSBWZXJ0aWNhbCBzdi0jICovXHJcbkBtaXhpbiBjYXJkc3Yge1xyXG4gIG1hcmdpbi10b3A6IDI1dmg7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLyogTWFpbiBTdHlsZSBTY3NzIEZpbGUgKi9cbi8qIENvbnRhaW5lciwgTGF5b3V0IGFuZCBCYXNpYyBTdHlsZXMgKi9cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltZy1jb250YWluZXIgLmltZy1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogU3BhY2UgVmVydGljYWwgc3YtIyAqL1xuLyogTmF2IEJhciBTdHlsZSAqL1xuLm5hdi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwdmg7XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRpdiB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5uYXYtY29udGFpbmVyIC5uYXYtZGl2IC5uYXYtbG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLm5hdi1jb250YWluZXIgLm5hdi1kaXYgLm5hdi1pdGVtcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRpdiAubmF2LWl0ZW1zIC5tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLm5hdi1jb250YWluZXIgLm5hdi1kaXYgLm5hdi1pdGVtcyAubWVudS1jb250YWluZXIgLm1lbnUtaXRlbXMge1xuICBtYXJnaW4tbGVmdDogNWVtO1xufVxuLm5hdi1jb250YWluZXIgLm5hdi1kaXYgLm5hdi1pdGVtcyAubWVudS1jb250YWluZXIgLm1lbnUtaXRlbXMgYSB7XG4gIGNvbG9yOiB2YXIoLS1ncmV5X2JvZHkpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRpdiAubmF2LWl0ZW1zIC5tZW51LWNvbnRhaW5lciAubWVudS1pdGVtcyBhIC5tZW51LWxpc3RzIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRpdiAubmF2LWl0ZW1zIC5tZW51LWNvbnRhaW5lciAubWVudS1pdGVtcyBhIC5tZW51LWxpc3RzIC5saXN0LXVuZGVybGluZSB7XG4gIHdpZHRoOiAwZW07XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5Y29yZSk7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRpdiAubmF2LWl0ZW1zIC5tZW51LWNvbnRhaW5lciAubWVudS1pdGVtcyBhIC5tZW51LWxpc3RzOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWJsYWNrY29yZSk7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRpdiAubmF2LWl0ZW1zIC5tZW51LWNvbnRhaW5lciAubWVudS1pdGVtcyBhIC5tZW51LWxpc3RzOmhvdmVyIC5saXN0LXVuZGVybGluZSB7XG4gIHdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tYmxhY2tjb3JlKSAhaW1wb3J0YW50O1xufVxuLmFjdGl2ZSAubGlzdC11bmRlcmxpbmUge1xuICB3aWR0aDogMS41ZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzcHggIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICB3aWR0aDogNjUlO1xufVxuXG4vKiBFeGNlcHRpb24gU3R5bGluZyAqL1xuLyogUG9ydGZvbGlvIFN0eWxpbmcgKi9cbi5sYXlvdXQtY29udGFpbmVyIC50aXRsZWJsb2NrIC50eHQtdGl0bGUge1xuICBmb250LXNpemU6IDEzcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tbGVmdDogLTZyZW07XG59XG4ubGF5b3V0LWNvbnRhaW5lciAudGl0bGVibG9jayAudHh0LXN0cmlwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeWNvcmUpO1xuICB3aWR0aDogNWVtO1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbi8qIFdvcmsgQ2FyZCAqL1xuLnNwYWNldiB7XG4gIG1hcmdpbi10b3A6IDI1dmg7XG59XG5cbi53cmstY29udGFpbmVyIC5yb3cge1xuICBtYXJnaW46IDA7XG59XG4ud3JrLWNvbnRhaW5lciAud3JrLWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZXlfYmcpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtIDA7XG59XG4ud3JrLWNvbnRhaW5lciAud3JrLWxheW91dCB7XG4gIGhlaWdodDogNjAwcHg7XG59XG4ud3JrLWNvbnRhaW5lciAud3JrLWxheW91dCAuY29sLWltZy5jb2wtNyB7XG4gIHBhZGRpbmc6IDA7XG59XG4ud3JrLWNvbnRhaW5lciAud3JrLWxheW91dCAuY29sLWltZy5jb2wtNyAud3JrLWltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNTY1cHg7XG4gIHdpZHRoOiA4NTBweDtcbn1cbi53cmstY29udGFpbmVyIC53cmstbGF5b3V0IC5jb2wtaW1nLmNvbC03IC53cmstaW1nIC5pbWctaXRlbSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLndyay1jb250YWluZXIgLndyay1sYXlvdXQgLmNvbC1pbWcuY29sLTcgLndyay1pbWcgLmltZy1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLndyay1jb250YWluZXIgLndyay1sYXlvdXQgLmNvbC1jb250ZW50IHtcbiAgcGFkZGluZzogMmVtIDA7XG59XG4ud3JrLWNvbnRhaW5lciAud3JrLWxheW91dCAuY29sLWNvbnRlbnQgLndyay10eHQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeWNvcmUpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLndyay1jb250YWluZXIgLndyay1sYXlvdXQgLmNvbC1jb250ZW50IC53cmstdHh0IC53cmstc3RyaXAge1xuICBtYXJnaW46IDEwcHggMDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogOTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeWNvcmUpO1xufVxuLndyay1jb250YWluZXIgLndyay1sYXlvdXQgLmNvbC1jb250ZW50IC53cmstdGl0bGUge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi53cmstY29udGFpbmVyIC53cmstbGF5b3V0IC5jb2wtY29udGVudCAud3JrLXBhcmEge1xuICBtYXJnaW46IDFlbSAwIDJlbSAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2lkdGg6IDU1MHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogdmFyKC0tZ3JleV9ib2R5KTtcbn1cbi53cmstY29udGFpbmVyIC53cmstbGF5b3V0IC5jb2wtY29udGVudCAud3JrLWJ0biB7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrY29yZSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcbn1cbi53cmstY29udGFpbmVyIC53cmstbGF5b3V0IC5jb2wtY29udGVudCAud3JrLWJ0bjpob3ZlciB7XG4gIGJvcmRlcjogdmFyKC0tYmxhY2tjb3JlKSBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1ibGFja2NvcmUpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO1xufVxuXG4vKiBSZWd1bGFyIENhcmQgKi9cbi53cmstcmVndWxhciB7XG4gIHBhZGRpbmc6IDVlbTtcbn1cbi53cmstcmVndWxhciAuY29sLWNvbnRlbnQgLndyay1pbmRleCB7XG4gIGNvbG9yOiB2YXIoLS1ncmV5X2JvZHkpO1xufVxuLndyay1yZWd1bGFyIC5jb2wtY29udGVudCAud3JrLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4ud3JrLXJlZ3VsYXIgLmNvbC1jb250ZW50IC53cmstcGFyYSB7XG4gIG1hcmdpbjogMWVtIDAgMmVtIDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aWR0aDogNTUwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiB2YXIoLS1ncmV5X2JvZHkpO1xufVxuLndyay1yZWd1bGFyIC5jb2wtY29udGVudCAud3JrLWJ0biB7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrY29yZSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcbn1cbi53cmstcmVndWxhciAuY29sLWNvbnRlbnQgLndyay1idG46aG92ZXIge1xuICBib3JkZXI6IHZhcigtLWJsYWNrY29yZSkgc29saWQgMXB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tYmxhY2tjb3JlKTtcbiAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcbn1cbi53cmstcmVndWxhciAuY29sLWltZyAud3JrLWltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA3NTBweDtcbn1cbi53cmstcmVndWxhciAuY29sLWltZyAud3JrLWltZyAuaW1nLWl0ZW0ge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ud3JrLXJlZ3VsYXIgLmNvbC1pbWcgLndyay1pbWcgLmltZy1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSk7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qIEluZm8gUGFydCAqL1xuLmluZm8tY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDVlbTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby10eHQge1xuICBjb2xvcjogdmFyKC0tZ3JleV9ib2R5KTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby10eHQgLmluZm8tbGluayB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5Y29yZSk7XG59XG5cbmEge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxudWwsIGxpIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xufVxuXG46cm9vdCB7XG4gIC8qVGhlbWUgQ29sb3JzKi9cbiAgLS1wcmltYXJ5Y29yZTogIzFDNTdFRTtcbiAgLS1ibGFja2NvcmU6ICMwMDAwMDA7XG4gIC0tZ3JleV9ib2R5OiAjODY4Njg2O1xuICAtLWdyZXlfY29udGVudDogI0JFQkVCRTtcbiAgLS1ncmV5X2JnOiAjRUZFRkVGO1xufVxuXG5Db250ZW50IEhpZGUgI3dyYXBwZXItZGVza3RvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jd3JhcHBlci1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjd3JhcHBlci1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI3dyYXBwZXItbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSIsIi8qIE5hdiBCYXIgU3R5bGUgKi9cclxuXHJcbi5uYXYtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG5cclxuICAubmF2LWRpdiB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcblxyXG4gICAgLm5hdi1sb2dvIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICB9XHJcbiAgICAubmF2LWl0ZW1zIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuXHJcbiAgICAgIC5tZW51LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgLm1lbnUtaXRlbXMge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVlbTtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JleV9ib2R5KTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAubWVudS1saXN0cyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAubGlzdC11bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDBlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeWNvcmUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2tjb3JlKTtcclxuICAgICAgICAgICAgICAgIC5saXN0LXVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrY29yZSkgIWltcG9ydGFudDtcclxuICAubGlzdC11bmRlcmxpbmUge1xyXG4gICAgd2lkdGg6IDEuNWVtICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy9pbWcgT3ZlcnJpZGVcclxuLmxvZ28tY29udGFpbmVyIHtcclxuICB3aWR0aDogNjUlO1xyXG59XHJcbiIsIi8qIEV4Y2VwdGlvbiBTdHlsaW5nICovXHJcbiIsIi8qIFBvcnRmb2xpbyBTdHlsaW5nICovXHJcblxyXG4ubGF5b3V0LWNvbnRhaW5lciB7XHJcbiAgLnRpdGxlYmxvY2sge1xyXG4gICAgLnR4dC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNnJlbTtcclxuICAgIH1cclxuICAgIC50eHQtc3RyaXAge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5Y29yZSk7XHJcbiAgICAgIHdpZHRoOiA1ZW07XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFdvcmsgQ2FyZCAqL1xyXG4uc3BhY2V2IHtcclxuICBAaW5jbHVkZSBjYXJkc3Y7XHJcbn1cclxuXHJcbi8vSGlnaGxpZ2h0IENhcmRcclxuLndyay1jb250YWluZXIge1xyXG4gIC5yb3cge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAud3JrLWhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmV5X2JnKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgfVxyXG4gIC53cmstbGF5b3V0IHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcblxyXG4gICAgLy9JbWcgUGFydFxyXG4gICAgLmNvbC1pbWcuY29sLTcge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgLndyay1pbWcge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaGVpZ2h0OiA1NjVweDtcclxuICAgICAgICB3aWR0aDogODUwcHg7XHJcblxyXG4gICAgICAgIC5pbWctaXRlbSB7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1RleHQgUGFya1xyXG4gICAgLmNvbC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMmVtIDA7XHJcblxyXG4gICAgICAud3JrLXR4dCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnljb3JlKTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblxyXG4gICAgICAgIC53cmstc3RyaXAge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnljb3JlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC53cmstdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICB9XHJcbiAgICAgIC53cmstcGFyYSB7XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gMCAyZW0gMDtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHdpZHRoOiA1NTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmV5X2JvZHkpO1xyXG4gICAgICB9XHJcbiAgICAgIC53cmstYnRuIHtcclxuICAgICAgICB3aWR0aDogMTc1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFja2NvcmUpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXI6IHZhcigtLWJsYWNrY29yZSkgc29saWQgMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFja2NvcmUpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFJlZ3VsYXIgQ2FyZCAqL1xyXG4ud3JrLXJlZ3VsYXIge1xyXG4gIHBhZGRpbmc6IDVlbTtcclxuICAvL1RleHQgUGFya1xyXG4gIC5jb2wtY29udGVudCB7XHJcbiAgICAud3JrLWluZGV4IHtcclxuICAgICAgY29sb3I6IHZhcigtLWdyZXlfYm9keSk7XHJcbiAgICB9XHJcbiAgICAud3JrLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICAud3JrLXBhcmEge1xyXG4gICAgICBtYXJnaW46IDFlbSAwIDJlbSAwO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICBjb2xvcjogdmFyKC0tZ3JleV9ib2R5KTtcclxuICAgIH1cclxuICAgIC53cmstYnRuIHtcclxuICAgICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2tjb3JlKTtcclxuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1ibGFja2NvcmUpIHNvbGlkIDFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFja2NvcmUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vSW1hZ2UgUGFydFxyXG4gIC5jb2wtaW1nIHtcclxuICAgIC53cmstaW1nIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgd2lkdGg6IDc1MHB4O1xyXG5cclxuICAgICAgLmltZy1pdGVtIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBJbmZvIFBhcnQgKi9cclxuLmluZm8tY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogNWVtO1xyXG4gIC5pbmZvLXR4dCB7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JleV9ib2R5KTtcclxuICAgIC5pbmZvLWxpbmsge1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeWNvcmUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/assets/Core/core.scss":
  /*!***********************************!*\
    !*** ./src/assets/Core/core.scss ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function srcAssetsCoreCoreScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--15-3!./core.scss */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/Core/core.scss");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  "./src/styles.scss":
  /*!*************************!*\
    !*** ./src/styles.scss ***!
    \*************************/

  /*! no static exports found */

  /***/
  function srcStylesScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!***********************************************************!*\
    !*** multi ./src/styles.scss ./src/assets/Core/core.scss ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! F:\Personal\Website\Development\Portfolio2.0\portfolio\src\styles.scss */
    "./src/styles.scss");

    module.exports = __webpack_require__(
    /*! F:\Personal\Website\Development\Portfolio2.0\portfolio\src\assets\Core\core.scss */
    "./src/assets/Core/core.scss");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map