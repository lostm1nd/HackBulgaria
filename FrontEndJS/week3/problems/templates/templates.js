var htmlGenerator = (function() {
  'use strict';

  function link(data) {
    var template = '<a href="<%= href %>" title="<%= title %>">' +
                    '<%= label %></a>';

    var html = _.template(template, data);

    return html;
  }

  function paragraph(data) {
    var template = '<p><%= label %></p>',
        html = _.template(template, data);

    return html;
  }

  function list(data) {
    var template = ['<% _.forEach(children, function(item) { %><li><%- item.label %></li><% }); %>'];

    if (data.type === 'ul') {
      template.unshift('<ul>');
      template.push('</ul>');
    } else {
      template.unshift('<ol>');
      template.push('</ol>');
    }

    var html = _.template(template.join(''), data);

    return html;
  }

  function tag(data) {
    var template = ['<', data.tagName];

    if (data.attributes) {
      data.attributes.forEach(function (attr) {
        template.push(' ',attr.key, '="', attr.value, '"');
      });
    }

    template.push('>');
    template.push(data.data);
    template.push('</', data.tagName, '>');

    var html = _.template(template.join(''), data);

    return html;
  }

  return {
    link: link,
    paragraph: paragraph,
    list: list,
    tag: tag
  };
}());

$(document).ready(function() {
  'use strict';

  var link = htmlGenerator.link({
    href: 'https://hackbulgaria.com',
    title: 'Hack Bulgaria',
    label: 'Курсове по Програмиране!'
  });

  var par = htmlGenerator.paragraph({
    label: 'Hack Bulgaria'
  });

  var list = htmlGenerator.list({
    type: 'ul',
    children: [{
        label: 'Item 1'
    }, {
        label: 'Item 2'
    }]
  });

  var tag = htmlGenerator.tag({
    tagName: 'div',
    data: htmlGenerator.tag({
        tagName: 'h1',
        data: 'Hello!'
    }),
    attributes: [{
        key: 'class',
        value: 'container'
    }, {
        key: 'id',
        value: 'main-container'
    }]
  });

  $('#container').append(link);
  $('#container').append(par);
  $('#container').append(list);
  $('#container').append(tag);
});
