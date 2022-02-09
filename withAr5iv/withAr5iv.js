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
    let formatPrefix = "https://arxiv.org/format/";
    if (isPrefixOf(formatPrefix, linkTo)) {
      let dropped = linkTo.slice(formatPrefix.length);
      let url = "https://ar5iv.org/abs/" + dropped;
      let a = document.createElement("a");
      a.href = url;
      a.appendChild(document.createTextNode(" or ar5iv"));
      ele.parentNode.appendChild(a);
    }
  });
}
