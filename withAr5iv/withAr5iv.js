// isPrefixOf :: String -> String -> Bool
function isPrefixOf(pattern, string) {
  if (string.indexOf(pattern) === 0) {
    return true;
  } else {
    return false;
  }
}

let currUrl = location.href;
let isArxiv = isPrefixOf("https://arxiv.org", currUrl);
if (isArxiv) {
  let aTagsPrim = Array.from(document.getElementsByTagName("a"));
  aTagsPrim.map((ele) => {
    let linkTo = ele.href;
    let pdfPrefix = "https://arxiv.org/pdf/";
    if (isPrefixOf(pdfPrefix, linkTo)) {
      let dropped = linkTo.slice(pdfPrefix.length).split(/[?#]/)[0].replace(/\.pdf$/, "");
      let url = "https://ar5iv.org/abs/" + dropped;
      let a = document.createElement("a");
      a.href = url;
      a.appendChild(document.createTextNode(" or ar5iv"));
      ele.parentNode.appendChild(a);
    }
  });
}
