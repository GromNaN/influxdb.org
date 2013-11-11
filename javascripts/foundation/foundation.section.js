!function(t,e,n){"use strict";Foundation.libs.section={name:"section",version:"4.3.2",settings:{deep_linking:!1,small_breakpoint:768,one_up:!0,multi_expand:!1,section_selector:"[data-section]",region_selector:"section, .section, [data-section-region]",title_selector:".title, [data-section-title]",resized_data_attr:"data-section-resized",small_style_data_attr:"data-section-small-style",content_selector:".content, [data-section-content]",nav_selector:'[data-section="vertical-nav"], [data-section="horizontal-nav"]',active_class:"active",callback:function(){}},init:function(e,n,i){var r=this;return Foundation.inherit(this,"throttle data_options position_right offset_right"),"object"==typeof n&&t.extend(!0,r.settings,n),"string"!=typeof n?(this.events(),!0):this[n].call(this,i)},events:function(){for(var i=this,r=[],o=i.settings.section_selector,s=i.settings.region_selector.split(","),a=i.settings.title_selector.split(","),c=0,l=s.length;l>c;c++)for(var u=s[c],f=0,d=a.length;d>f;f++){var h=o+">"+u+">"+a[f];r.push(h+" a"),r.push(h)}t(i.scope).on("click.fndtn.section",r.join(","),function(e){var n=t(this).closest(i.settings.title_selector);i.close_navs(n),n.siblings(i.settings.content_selector).length>0&&i.toggle_active.call(n[0],e)}),t(e).on("resize.fndtn.section",i.throttle(function(){i.resize()},30)).on("hashchange.fndtn.section",i.set_active_from_hash),t(n).on("click.fndtn.section",function(e){e.isPropagationStopped&&e.isPropagationStopped()||e.target!==n&&i.close_navs(t(e.target).closest(i.settings.title_selector))}),t(e).triggerHandler("resize.fndtn.section"),t(e).triggerHandler("hashchange.fndtn.section")},close_navs:function(e){var n=Foundation.libs.section,i=t(n.settings.nav_selector).filter(function(){return!t.extend({},n.settings,n.data_options(t(this))).one_up});if(e.length>0){var r=e.parent().parent();(n.is_horizontal_nav(r)||n.is_vertical_nav(r))&&(i=i.filter(function(){return this!==r[0]}))}i.children(n.settings.region_selector).removeClass(n.settings.active_class)},toggle_active:function(e){var n=t(this),i=Foundation.libs.section,r=n.parent(),o=n.siblings(i.settings.content_selector),s=r.parent(),a=t.extend({},i.settings,i.data_options(s)),c=s.children(i.settings.region_selector).filter("."+i.settings.active_class);!a.deep_linking&&o.length>0&&e.preventDefault(),e.stopPropagation(),r.hasClass(i.settings.active_class)?(r.hasClass(i.settings.active_class)&&i.is_accordion(s)||!a.one_up&&(i.small(s)||i.is_vertical_nav(s)||i.is_horizontal_nav(s)||i.is_accordion(s)))&&(r.removeClass(i.settings.active_class),r.trigger("closed.fndtn.section")):((!i.is_accordion(s)||i.is_accordion(s)&&!i.settings.multi_expand)&&(c.removeClass(i.settings.active_class),c.trigger("closed.fndtn.section")),r.addClass(i.settings.active_class),i.resize(r.find(i.settings.section_selector).not("["+i.settings.resized_data_attr+"]"),!0),r.trigger("opened.fndtn.section")),a.callback(s)},check_resize_timer:null,resize:function(e,n){var i=Foundation.libs.section,r=t(i.settings.section_selector),o=i.small(r),s=function(t,e){return!(i.is_accordion(t)||t.is("["+i.settings.resized_data_attr+"]")||o&&!i.is_horizontal_tabs(t)||e!==("none"===t.css("display")||!t.parent().is(":visible")))};e=e||t(i.settings.section_selector),clearTimeout(i.check_resize_timer),o||e.removeAttr(i.settings.small_style_data_attr),e.filter(function(){return s(t(this),!1)}).each(function(){var e=t(this),r=e.children(i.settings.region_selector),o=r.children(i.settings.title_selector),s=r.children(i.settings.content_selector),a=0;if(n&&0==e.children(i.settings.region_selector).filter("."+i.settings.active_class).length){var c=t.extend({},i.settings,i.data_options(e));c.deep_linking||!c.one_up&&(i.is_horizontal_nav(e)||i.is_vertical_nav(e)||i.is_accordion(e))||r.filter(":visible").first().addClass(i.settings.active_class)}if(i.is_horizontal_tabs(e)||i.is_auto(e)){var l=0;o.each(function(){var e=t(this);if(e.is(":visible")){e.css(i.rtl?"right":"left",l);var n=parseInt(e.css("border-"+(i.rtl?"left":"right")+"-width"),10);"Nan"===n.toString()&&(n=0),l+=i.outerWidth(e)-n,a=Math.max(a,i.outerHeight(e))}}),o.css("height",a),r.each(function(){var e=t(this),n=e.children(i.settings.content_selector),r=parseInt(n.css("border-top-width"),10);"Nan"===r.toString()&&(r=0),e.css("padding-top",a-r)}),e.css("min-height",a)}else if(i.is_horizontal_nav(e)){var u=!0;o.each(function(){a=Math.max(a,i.outerHeight(t(this)))}),r.each(function(){var n=t(this);n.css("margin-left","-"+(u?e:n.children(i.settings.title_selector)).css("border-left-width")),u=!1}),r.css("margin-top","-"+e.css("border-top-width")),o.css("height",a),s.css("top",a),e.css("min-height",a)}else if(i.is_vertical_tabs(e)){var f=0;o.each(function(){var e=t(this);if(e.is(":visible")){e.css("top",f);var n=parseInt(e.css("border-top-width"),10);"Nan"===n.toString()&&(n=0),f+=i.outerHeight(e)-n}}),s.css("min-height",f+1)}else if(i.is_vertical_nav(e)){var d=0,h=!0;o.each(function(){d=Math.max(d,i.outerWidth(t(this)))}),r.each(function(){var n=t(this);n.css("margin-top","-"+(h?e:n.children(i.settings.title_selector)).css("border-top-width")),h=!1}),o.css("width",d),s.css(i.rtl?"right":"left",d),e.css("width",d)}e.attr(i.settings.resized_data_attr,!0)}),t(i.settings.section_selector).filter(function(){return s(t(this),!0)}).length>0&&(i.check_resize_timer=setTimeout(function(){i.resize(e.filter(function(){return s(t(this),!1)}),!0)},700)),o&&e.attr(i.settings.small_style_data_attr,!0)},is_vertical_nav:function(t){return/vertical-nav/i.test(t.data("section"))},is_horizontal_nav:function(t){return/horizontal-nav/i.test(t.data("section"))},is_accordion:function(t){return/accordion/i.test(t.data("section"))},is_horizontal_tabs:function(t){return/^tabs$/i.test(t.data("section"))},is_vertical_tabs:function(t){return/vertical-tabs/i.test(t.data("section"))},is_auto:function(t){var e=t.data("section");return""===e||/auto/i.test(e)},set_active_from_hash:function(){var n,i=Foundation.libs.section,r=e.location.hash.substring(1),o=t(i.settings.section_selector);o.each(function(){var e=t(this),o=e.children(i.settings.region_selector);return o.each(function(){var o=t(this),s=o.children(i.settings.content_selector).data("slug");return new RegExp(s,"i").test(r)?(n=e,!1):void 0}),null!=n?!1:void 0}),null!=n&&o.each(function(){if(n==t(this)){var e=t(this),o=t.extend({},i.settings,i.data_options(e)),s=e.children(i.settings.region_selector),a=o.deep_linking&&r.length>0,c=!1;s.each(function(){var e=t(this);if(c)e.removeClass(i.settings.active_class);else if(a){var n=e.children(i.settings.content_selector).data("slug");n&&new RegExp(n,"i").test(r)?(e.hasClass(i.settings.active_class)||e.addClass(i.settings.active_class),c=!0):e.removeClass(i.settings.active_class)}else e.hasClass(i.settings.active_class)&&(c=!0)}),c||!o.one_up&&(i.is_horizontal_nav(e)||i.is_vertical_nav(e)||i.is_accordion(e))||s.filter(":visible").first().addClass(i.settings.active_class)}})},reflow:function(){var e=Foundation.libs.section;t(e.settings.section_selector).removeAttr(e.settings.resized_data_attr),e.throttle(function(){e.resize()},30)()},small:function(e){var n=t.extend({},this.settings,this.data_options(e));return this.is_horizontal_tabs(e)?!1:e&&this.is_accordion(e)?!0:t("html").hasClass("lt-ie9")?!0:t("html").hasClass("ie8compat")?!0:t(this.scope).width()<n.small_breakpoint},off:function(){t(this.scope).off(".fndtn.section"),t(e).off(".fndtn.section"),t(n).off(".fndtn.section")}},t.fn.reflow_section=function(t){var e=this,n=Foundation.libs.section;return e.removeAttr(n.settings.resized_data_attr),n.throttle(function(){n.resize(e,t)},30)(),this}}(Foundation.zj,window,document);