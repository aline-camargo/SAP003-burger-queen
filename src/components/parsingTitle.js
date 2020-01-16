const itemsTitle = (orders) => {
    return orders.map((item) => {
        if (
            item.title.includes('Hambúrguer') &&
            item.selectedExtras !== 'Nenhum'
        ) {
            return [
                item.title,
                ' (',
                item.selectedFlavour.substring(0, 3),
                ')',
                ' + ',
                item.selectedExtras
            ];
        } else if (
            item.title.includes('Hambúrguer') &&
            item.selectedExtras === 'Nenhum'
        ) {
            return [item.title, ' (', item.selectedFlavour.substring(0, 3), ')'];
        } else {
            return item.title;
        }
    });
}

export default itemsTitle;