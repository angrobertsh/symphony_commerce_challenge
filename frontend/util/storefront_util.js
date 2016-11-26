import $ from "jquery";

export const fetchItems = (success) => {
  $.ajax({
    method: "GET",
    url: "https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js",
    success,
    error: () => alert("error")
  });
};
