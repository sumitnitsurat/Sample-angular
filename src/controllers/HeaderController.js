module.exports =function ($scope, TIME_PROPS, dataUtilService)
{
    var hc=this;

    hc.filters = [
        {
            'name' : 'dataShowDropDown',
            'getTitle': function(){ return  this.values[0].title; },
            'type' : 'selectDropdown',
            'isEnabled':true,
            'values' : [
                {'title':'Days to Full', 'link':'days-to-full'},
                {'title':'Heatmap','link':'heatmap'}
            ]
        }
    ];

    hc.TIME = TIME_PROPS;

    hc.timeFilterSelectedValue = TIME_PROPS.TODAY;

    hc.setSelectedTimeFilter = function(time){
        hc.timeFilterSelectedValue = time;
        dataUtilService.setSelectedTimeFilter(time);
        $scope.$broadcast ('timeRangeChanged');
    };

    hc.getFilters = function(){
        var parentScope = $scope.$parent;
        var sideNavActiveTab = parentScope.activeSideNavbar();

        for(var key in hc.filters ){
            if(sideNavActiveTab !== "home") {
             hc.filters[key].isEnabled=false;
            }else {
            hc.filters[key].isEnabled=true;
            }
        }
        return hc.filters;
    };

    hc.filterUrlGenerator = function(link,filtername){
        if(filtername === hc.filters[0].name )
            return "#home/"+link;
        else
            return link;
    };

    hc.isSelected=function(section){
        for(var i=0; i<hc.filters.length; i++){
            if(hc.filters[i].getTitle() === section){
                return true;
            }
        }
        return false;
    };

    hc.updateSideNavMenuUrl = function(filterValue){
        var parentScope = $scope.$parent;
        parentScope.subUrl = filterValue;
    };


    hc.updateSideNavMenuUrl(hc.filters[0].values[0].link);

    hc.setShowValue = function(section) {
        for(var x in hc.filters) {
             for(var y in hc.filters[x].values) {
            if (hc.filters[x].values[y].title === section) {
                hc.filters[x].getTitle = function(){ return section;};
                hc.updateSideNavMenuUrl(hc.filters[x].values[y].link);
                break;
                }
            }
        }

    };

};