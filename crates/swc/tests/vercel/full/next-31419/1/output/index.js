import r from "@swc/helpers/src/_async_to_generator.mjs";
import n from "@swc/helpers/src/_ts_generator.mjs";
import t from "@swc/helpers/src/_ts_values.mjs";
Promise.all(assignAll).then(function() {
    var e = r(function(r) {
        var e, c, s, i, o, u;
        return n(this, function(a) {
            switch(a.label){
                case 0:
                    for(i in e = function(u) {
                        var t, e;
                        return n(this, function(n) {
                            switch(n.label){
                                case 0:
                                    return t = r[u], c += "'".concat(t.id, "', "), [
                                        4,
                                        listOfUser(t.id)
                                    ];
                                case 1:
                                    return (e = n.sent()).forEach(function(r) {
                                        insertQuery += 'INSERT INTO "TABLE"("UUID", id, other_ids_here) VALUES (\''.concat(uuidv4(), "', '").concat(t.id, "', now());");
                                    }), [
                                        2
                                    ];
                            }
                        });
                    }, c = 'DELETE FROM "TABLE" WHERE "UUID" IN ( ', s = [], r);
                    o = 0, a.label = 1;
                case 1:
                    if (!(o < s.length)) return [
                        3,
                        4
                    ];
                    return [
                        5,
                        t(e(u = s[o]))
                    ];
                case 2:
                    a.label = 3;
                case 3:
                    return o++, [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return function(r) {
        return e.apply(this, arguments);
    };
}());
export var listOfUser = function(t) {
    var e;
    return new Promise((e = r(function(r, e) {
        var c;
        return n(this, function(n) {
            return c = 'Select Distinct id from "TABLE" Where id = \''.concat(t, "' And user_id IS not null"), postgreSQL.query(c, null, function(n, t) {
                n ? e(n) : r(t.rows);
            }), [
                2
            ];
        });
    }), function(r, e) {
        return e.apply(this, arguments);
    }));
};
