(function (){
    "use strict";
    function ListService(){
        let optionalItems = ["egg","milk","cookie","ham","cheese","coffee","bread","steak","chicken"];
        this.boughtList = [];
        this.shouldBuyList = [];
        for(let i = 0; i < 8; i++){
            let quantity = Math.floor(Math.random() * 5) + 1;
            let index = Math.floor(Math.random() * optionalItems.length);
            let name = optionalItems[index];
            optionalItems.splice(index,1);
            this.shouldBuyList.push({
                name: name + (quantity > 1 ? "s":""),
                quantity: quantity
            });
        }
        this.getBoughtList = () => {
            return this.boughtList;
        }
        this.getShouldBuyList = () => {
            return this.shouldBuyList;
        }
    }
    const app = angular.module("appTwo", []);
    app.controller('shouldBuyController',shouldBuyController);
    app.controller('boughtController',boughtController);
    app.service('listService',ListService);

    shouldBuyController.$inject = ['listService'];
    function shouldBuyController(listService){
        this.items = listService.getShouldBuyList();
        this.buy = (index) => {
            listService.getBoughtList().push(listService.getShouldBuyList()[index]);
            listService.getShouldBuyList().splice(index,1);
        };
    }
    boughtController.$inject = ['listService'];
    function boughtController(listService){
        this.items = listService.getBoughtList();
    }

})();