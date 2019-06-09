<template>
  <div class="contextmenu"></div>
</template>
<script>
import $ from "jquery";
export default {
  name: "contextmenu",
  data() {
    return {
      menuItemCount: 0,
      shadow: true
    };
  },
  props: {
    content: {
      type: Array,
      required: true
    },
    width: {
      type: String,
      default: "200"
    },
    top: {
      type: String,
      default: "100"
    },
    left: {
      type: String,
      default: "100"
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.menuItemCount = 0;
      this.menus = {};
      this.menu = this.createMenu();
      this.element = this.menu[0];
      this.cls && this.menu.addClass(this.cls);
      var add_item = this.addItem;
      this.content &&
        $(this.content).each(function(i, item) {
          add_item(item);
        });
      $(document).bind("click.menu", function() {
        for (var menuid in this.menus) {
          var menu = this.menus[menuid];
          if (!menu) return;
          menu.hide();
          if (menu.shadow) menu.shadow.hide();
        }
      });
    },
    show(options, menu) {
      if (menu == undefined) menu = this.menu;
      if (options && options.left != undefined) {
        menu.css({
          left: options.left
        });
      }
      if (options && options.top != undefined) {
        menu.css({
          top: options.top
        });
      }
      menu.css({ width: this.width });
      menu.show();
      this.updateShadow(menu);
    },
    updateShadow(menu) {
      if (!this.shadow) return;
      menu.shadow.css({
        left: menu.css("left"),
        top: menu.css("top"),
        width: menu.outerWidth(),
        height: menu.outerHeight()
      });
      if (menu.is(":visible")) menu.shadow.show();
      else menu.shadow.hide();
    },
    hide(menu) {
      if (menu == undefined) menu = this.menu;
      this.hideAllSubMenu(menu);
      menu.hide();
      this.updateShadow(menu);
    },
    toggle() {
      this.menu.toggle();
      this.updateShadow(this.menu);
    },
    removeItem(itemid) {
      $("> .l-menu-item[menuitemid=" + itemid + "]", this.menu.items).remove();
    },
    setEnabled(itemid) {
      $(
        "> .l-menu-item[menuitemid=" + itemid + "]",
        this.menu.items
      ).removeClass("l-menu-item-disable");
    },
    setMenuText(itemid, text) {
      $(
        "> .l-menu-item[menuitemid=" + itemid + "] >.l-menu-item-text:first",
        this.menu.items
      ).html(text);
    },
    setDisabled(itemid) {
      $("> .l-menu-item[menuitemid=" + itemid + "]", this.menu.items).addClass(
        "l-menu-item-disable"
      );
    },
    isEnable(itemid) {
      return !$(
        "> .l-menu-item[menuitemid=" + itemid + "]",
        this.menu.items
      ).hasClass("l-menu-item-disable");
    },
    getItemCount() {
      return $("> .l-menu-item", this.menu.items).length;
    },
    addItem(item, menu) {
      var p = this;
      if (!item) return;
      if (menu == undefined) menu = this.menu;

      if (item.line) {
        menu.items.append('<div class="l-menu-item-line"></div>');
        return;
      }
      var ditem = $(
        '<div class="l-menu-item"><div class="l-menu-item-text"></div> </div>'
      );
      var itemcount = $("> .l-menu-item", menu.items).length;
      menu.items.append(ditem);
      ditem.attr("ligeruimenutemid", ++this.menuItemCount);
      item.id && ditem.attr("menuitemid", item.id);
      item.text && $(">.l-menu-item-text:first", ditem).html(item.text);
      item.icon &&
        ditem.prepend(
          '<div class="l-menu-item-icon l-icon-' + item.icon + '"></div>'
        );
      item.img &&
        ditem.prepend(
          '<div class="l-menu-item-icon"><img style="width:16px;height:16px;margin:2px;" src="' +
            item.img +
            '" /></div>'
        );
      if (item.disable || item.disabled) ditem.addClass("l-menu-item-disable");
      if (item.children) {
        ditem.append('<div class="l-menu-item-arrow"></div>');
        var newmenu = this.createMenu(ditem.attr("ligeruimenutemid"));
        this.menus[ditem.attr("ligeruimenutemid")] = newmenu;
        newmenu.width(p.width);
        newmenu.hover(null, function() {
          if (!newmenu.showedSubMenu) p.hide(newmenu);
        });
        $(item.children).each(function() {
          p.addItem(this, newmenu);
        });
      }
      item.click &&
        ditem.click(function() {
          if ($(this).hasClass("l-menu-item-disable")) return;
          item.click(item, itemcount);
        });
      item.dblclick &&
        ditem.dblclick(function() {
          if ($(this).hasClass("l-menu-item-disable")) return;
          item.dblclick(item, itemcount);
        });

      var menuover = $("> .l-menu-over:first", menu);
      ditem.hover(
        function() {
          if ($(this).hasClass("l-menu-item-disable")) return;
          var itemtop = $(this).offset().top;
          var top = itemtop - menu.offset().top;
          menuover.css({
            top: top
          });
          p.hideAllSubMenu(menu);
          if (item.children) {
            var ligeruimenutemid = $(this).attr("ligeruimenutemid");
            if (!ligeruimenutemid) return;
            if (p.menus[ligeruimenutemid]) {
              p.show(
                {
                  top: itemtop,
                  left: $(this).offset().left + $(this).width() - 5
                },
                p.menus[ligeruimenutemid]
              );
              menu.showedSubMenu = true;
            }
          }
        },
        function() {
          if ($(this).hasClass("l-menu-item-disable")) return;
          var ligeruimenutemid = $(this).attr("ligeruimenutemid");
          if (item.children) {
            var ligeruimenutemid = $(this).attr("ligeruimenutemid");
            if (!ligeruimenutemid) return;
          }
        }
      );
    },
    hideAllSubMenu(menu) {
      var p = this;
      if (menu == undefined) menu = this.menu;
      $("> .l-menu-item", menu.items).each(function() {
        if ($("> .l-menu-item-arrow", this).length > 0) {
          var ligeruimenutemid = $(this).attr("ligeruimenutemid");
          ligeruimenutemid = parseInt(ligeruimenutemid);
          if (!ligeruimenutemid) return;
          p.menus[ligeruimenutemid] && p.hide(p.menus[ligeruimenutemid]);
        }
      });
      menu.showedSubMenu = false;
    },
    createMenu(parentMenuItemID) {
      var menu = $(
        '<div class="l-menu" style="display:none"><div class="l-menu-yline"></div><div class="l-menu-over"><div class="l-menu-over-l"></div> <div class="l-menu-over-r"></div></div><div class="l-menu-inner"></div></div>'
      );
      parentMenuItemID &&
        menu.attr("ligeruiparentmenuitemid", parentMenuItemID);
      menu.items = $("> .l-menu-inner:first", menu);
      menu.appendTo("body");
      if (this.shadow) {
        menu.shadow = $('<div class="l-menu-shadow"></div>').insertAfter(menu);
        this.updateShadow(menu);
      }
      menu.hover(null, function() {
        if (!menu.showedSubMenu)
          $("> .l-menu-over:first", menu).css({
            top: -24
          });
      });
      if (parentMenuItemID) this.menus[parentMenuItemID] = menu;
      else this.menus[0] = menu;
      return menu;
    }
  }
};
</script>

<style>
.l-menu {
  border: 1px solid #979797;
  background: #f5f5f5;
  position: absolute;
  overflow: hidden;
  padding-bottom: 2px;
  z-index: 1001;
}

.l-menu-yline {
  background: url(../../images/menu/menu-line-y.gif) repeat-y;
  width: 2px;
  height: 2000px;
  position: absolute;
  left: 28px;
  top: 1px;
  z-index: 101;
}

.l-menu-inner {
  position: relative;
  width: 100%;
  z-index: 103;
}

.l-menu-item {
  position: relative;
  height: 23px;
  line-height: 23px;
  width: 100%;
  cursor: pointer;
}

.l-menu-item-arrow {
  background: url(../../images/menu/menu-item-arrow.gif) no-repeat;
  position: absolute;
  top: 8px;
  right: 9px;
  width: 4px;
  height: 7px;
}

.l-menu-over {
  position: absolute;
  top: -24px;
  left: 2px;
  z-index: 102;
  height: 22px;
  overflow: hidden;
  background: url(../../images/menu/menu-item-over-m.gif) repeat-x;
  width: 97%;
}

.l-menu-over-l {
  background: url(../../images/menu/menu-item-over-l.gif) no-repeat;
  width: 28px;
  height: 22px;
  position: absolute;
  top: 0;
  left: 0;
}

.l-menu-item-line {
  background: url(../../images/menu/menu-line-x.gif) repeat-x;
  height: 2px;
  width: 100%;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 30px;
  line-height: 2px;
  overflow: hidden;
}

.l-menu-item-text {
  color: #000000;
  left: 33px;
  position: absolute;
  top: 0;
}

.l-menu-shadow {
  z-index: 1000;
  filter: progid:DXImageTransform.Microsoft.Blur(pixelRadius=2, MakeShadow=false, ShadowOpacity=0.2);
  background: #ddd;
  position: absolute;
}
</style>
