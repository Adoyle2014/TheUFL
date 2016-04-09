Router.configure({
    layoutTemplate: 'layout'
});

Router.route("/", {
    template: "index",
    layoutTemplate: "layout"
});