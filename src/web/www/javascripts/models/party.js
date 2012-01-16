Ext.regModel('Party', {
    fields: [
        {name: 'id', type: 'int'}
      , {name: 'name', type: 'string'}
      , {name: 'start_date', type: 'date'}
      , {name: 'end_date', type: 'date'}
    ],
    
    associations: [
      {type: 'hasMany', model: 'Member', name: 'members'},
    ]
});