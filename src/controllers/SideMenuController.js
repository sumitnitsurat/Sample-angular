module.exports = function SideNavbarController($scope,$location, SIDE_MENUS_PROPS){
    var nb=this;
    nb.menuState=2;
    nb.expansionMode = false;
    nb.hoverState= false;

    nb.sideMenus = [];
	SIDE_MENUS_PROPS =["Home" , "DATA1","DATA2"];
    for(var key in SIDE_MENUS_PROPS){
        
      nb.sideMenus.push(SIDE_MENUS_PROPS[key]);
    }

    nb.shouldDisplayIcon =function(){
        return (nb.menuState===1 || nb.menuState===2);
    };
    nb.menuWidth =function(){
        return (nb.menuState===1);
    };

    nb.shouldDisplayName =function(){
        return (nb.menuState===2);
    };
    nb.shouldHide =function(){
        return (nb.menuState===0);
    };
    nb.isActive = function(subUrl) {
        var currentUrl = $location.path().split('/')[1];
        var suburl = subUrl.split('/')[0];
        if (currentUrl === suburl)
        {
            nb.splitUrl = currentUrl;
            return true;
        }
    };

    $scope.activeSideNavbar = function(){
        $scope.activeNavbarTitle = nb.splitUrl;
        return $scope.activeNavbarTitle;
    };

    nb.menuToggle =function(){
        nb.hoverState = false;
        nb.menuState = nb.expansionMode ? (nb.menuState + 1) : (nb.menuState - 1);

        cl('menuState:'+ nb.menuState);
        if(nb.menuState === 0){
            nb.expansionMode = !nb.expansionMode;
        }else if(nb.menuState === 2 ){
            nb.expansionMode = !nb.expansionMode;
        }
    };
    nb.hoverIn = function(){
        if(nb.menuState === 0) {
            nb.menuState = 2;
            nb.hoverState= true;
            if(nb.expansionMode)
           nb.expansionMode = !nb.expansionMode;
        }
    };
    nb.hoverOut = function(){
        if(nb.menuState === 2 &&  nb.hoverState=== true) {
            nb.menuState = 0;
            nb.hoverState = false;
            if (!nb.expansionMode)
                nb.expansionMode = !nb.expansionMode;
        }
    };
};