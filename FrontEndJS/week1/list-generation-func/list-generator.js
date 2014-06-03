'use stirct';

var listGenerator = function(listType, items) {
  var list = '<' + listType + '>\n';

  items.forEach(function(obj) {
    list += '<li>' + obj.label + '</li>\n';
  });

  list += '</' + listType + '>';
  return list;
};

var nestedListGenerator = function(listType, items) {
  var list = '<' + listType + '>\n';

  generateListItems(2, items);

  list += '</' + listType + '>';

  return list;

  function generateListItems(indent, listItems) {
    listItems.forEach(function(li) {
      if (li.children) {

        list += repeatIndent(indent) + '<li>' + li.label + '\n';
        list += repeatIndent(indent + 2) + '<' + listType + '>\n';

        generateListItems(indent + 4, li.children);

        list += repeatIndent(indent + 2) + '</' + listType + '>\n';
        list += repeatIndent(indent) + '</li>\n';

      } else {
        list += repeatIndent(indent) + '<li>' + li.label + '</li>\n';
      }
    });
  }

  function repeatIndent(times) {
    var whitespace = '';
    for (var i = 0; i < times; i+=1) {
      whitespace += ' ';
    }

    return whitespace;
  }
};

// console.log(listGenerator('ul',
//   [{ 'label' : 'Item 1'}, { 'label' : 'Item 2'}]));

var nested = [{ 'label' : 'Item 1'},
             { 'label' : 'Item 2', 'children' : [
                {
                    'label' : 'Level 2 of Item 2',
                    'children' : [
                      {
                        'label': 'level 3 of item 2'
                      },
                      {
                        'label': 'level 3 of item 2',
                        'children': [
                          {
                            'label': 'level 4 of item 2'
                          }
                        ]
                      }
                    ]
                },
                {
                    'label' : 'Another level 2'
                }
             ]}];

console.log(nestedListGenerator('ol', nested));
