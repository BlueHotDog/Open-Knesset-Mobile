Ext.regModel('Party', {
  fields: [
    , {name: "id", type:"int"}        
      {name: "residence_economy", type: "int"}
    , {name: "average_weekly_presence_rank", type: "float"}
    , {name: "place_of_residence_lon", type:"float"}
    , {name: "place_of_residence", type:"string"}
    , {name: "votes_per_month", type:"float"}
    , {name: "discipline", type: "float"}
    , {name: "place_of_residence_la", type:"float"}
    , {name: "service_time", type:"int"}
    , {name: "family_status" , type:"string"}
    , {name: "date_of_birth", type:"date"}
    , {name: "year_of_aliyah", type: "date"}
    , {name: "date_of_death", type:"date"}
    , {name: "start_date", type: "date"}
    , {name: "end_date", type:"date"}
    , {name: "img_url" , type:"string"}
    , {name: "email", type:"string"}
    , {name: "bills_approved" , type:"int"}
    , {name: "bills_proposed" , type:"int"}
    , {name: "fax", type:"string"}
    , {name: "current_role_descriptions", type:"string"}
    , {name: "average_weekly_presence", type:"float"}
    , {name: "area_of_residence", type:"string"}
    , {name: "phone", type:"string"}
    , {name: "is_current", type:"bool"}
    , {name: "name", type: "string"}
    , {name: "roles", type: "string"}
    , {name: "committee_meetings_per_month", type: "string"}
    , {name: "url", type: "string"}
    , {name: "gender", type: "string"}
    , {name: "bills_passed_first_vote", type: "int"}
    , {name: "bills_passed_pre_vote", type: "int"}
    , {name: "residence_centrality", type: "int"}
    , {name: "place_of_birth", type: "string"}
    , {name: "votes_count", type: "int"}
    , {name: "number_of_children", type: "int"}
  ],
  associations: [
      {type: 'hasMany', model: 'Link', name: 'links'}
    , {type: 'hasMany', model: 'Committee', name: 'committees'}
    , {type: ''}
  ]
  belongsTo: "Party"
});