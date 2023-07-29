// generates a page navigation list
const
    listTypeOpener = 'ul id="primary-menu" class="menu nav-menu" aria-expanded="false"',
    listType      = 'ul',
    elementActive = 'strong',
    classActive   = 'active',
    classOpen     = 'open';

// pass in collections.all | eleventyNavigation, (current) page, and maximum depth level
module.exports = (pageNav, page, maxLevel = 999) => {

    function navRecurse(entry, level = 1) {

        let childPages = '';

        if (level < maxLevel) {
            for (let child of entry.children) {
                childPages += navRecurse(child, level++);
            }
        }

        let
            active = (entry.url === page.url),
            classList = [],
            svgIcon = "";

        if (entry.icon != undefined) {
            svgIcon = '<svg><use xlink:href="#icon-' + entry.icon + '">&nbsp;</use></svg>';
        }


        if ((active && childPages) || childPages.includes(`<${ elementActive }>`)) classList.push(classOpen);
        if (active) classList.push(classActive);

        return (
            '<li' +
            (classList.length ? ` class="${ classList.join(' ') }"` : '') +
            '>' +
            (active ? `<${ elementActive }>` : `<a href="${ entry.url }">`) +
            svgIcon + entry.title +
            (active ? `</${ elementActive }>` : '</a>') +
            (childPages ? `<${ listType }>${ childPages }</${ listType }>` : '') +
            '</li>'
        );

    }

    let nav = '';
    for (let entry of pageNav) {
        nav += navRecurse(entry);
    }

    return `<${ listTypeOpener }>${ nav }</${ listType }>`;

};
