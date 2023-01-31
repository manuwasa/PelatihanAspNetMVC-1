using System.Web;
using System.Web.Optimization;

namespace PelatihanAspNetMVC_1
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/DevExpressCSS/css").Include(
                      "~/Content/DevExpressCSS/*.css"));

            bundles.Add(new StyleBundle("~/GridModel1/css").Include(
                      "~/Content/GridModel1/style.css", "~/Content/GridModel1/styles.css"));

            bundles.Add(new ScriptBundle("~/DevExpressJS/js").Include(
                      "~/Scripts/DevExpressJS/*.js"));

            bundles.Add(new ScriptBundle("~/GridModel1/js").Include(
                      "~/Content/GridModel1/*.js"));
        }
    }
}
