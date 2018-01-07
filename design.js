/*
* 
* 
* <a href="http://domain.com/pagina.html" external-page>pagina esterna</a>
*/



/* <a href="pagina.html" external-page>pagina esterna</a> */
new Pjax({
  cors: {
    href: "http://domain.com"
  }
});

/*<a href="#pagina-1" external-page></a>*/
// http://third-party-domain.com/#pagina-1 (link da mostrare)
// http://domain.com/pagina-1 (pagina da caricare)
