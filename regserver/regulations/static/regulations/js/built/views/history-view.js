define("history-view",["jquery","underscore","backbone","dispatch"],function(e,t,n,r){var i=n.View.extend({el:"#history",events:{"click .version-link":"setStorageItem"},initialize:function(){r.on("regSection:open:after",this.updateLinks,this),e(".status-list").removeClass("current"),this.$el.find(".status-list[data-base-version="+r.getVersion()+"]").addClass("current"),this.updateLinks()},setStorageItem:function(){sessionStorage.setItem("drawerDefault","history")},updateLinks:function(){var t=r.getOpenSection(),n=window.APP_PREFIX;typeof n!="undefined"&&n.substr(n.length-1)!=="/"&&(n+="/"),typeof t!="undefined"&&this.$el.find(".version-link").each(function(){var r=e(this);r.attr("href",n+t+"/"+r.data("version"))})}});return i});