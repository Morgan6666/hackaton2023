import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:found_travell/core/api/product/ProductApi.dart';
import 'package:found_travell/presentation/road/add_relax.dart';

import '../../../core/utils/sized_utils.dart';
import '../../../widgets/animation_routes.dart';



// "road_map_id": 1,
// "shop_name": "Супермаркет",
// "shop_time_start": "2023-04-28T19:43:10.000Z",
// "shop_time_end": "2023-04-30T19:43:12.000Z",
// "shop_description": "knjgtnjg",
// "event_name": "Денб народного единства",
// "event_time_start": "2023-04-28T17:13:56.000Z",
// "event_time_end": "2024-04-28T17:13:58.000Z",
// "event_description": "Хер знает что происходит",
// "attraction_name": "Тест",
// "attraction_description": "Тест2",
// "attraction_time_start": "2023-04-19T19:43:10.000Z",
// "attraction_time_end": "2023-04-27T19:43:10.000Z",
// "relax_name": "Отель в майбах",
// "relax_description": "хзхзхзхзхз",
// "relax_time_start": "2023-04-28T20:19:36.000Z",
// "relax_time_end": "2023-04-30T20:19:38.000Z"

class TravelListWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final _media_width = MediaQuery.of(context).size.width;
    final _media_height = MediaQuery.of(context).size.height;

    return FutureBuilder(
        future:  ProductApi().getRoadMapInfo(1),
        builder: (context, AsyncSnapshot snapshot) {
          print(snapshot);
          if (!snapshot.hasData) {
            print('Данные');
            print(snapshot.data);
            return Center(child: CircularProgressIndicator());
          } else {
            return ListView.builder(
              shrinkWrap: true,
              padding: EdgeInsets.only(top: 30),
              itemCount: snapshot.data.length,
              itemBuilder: (context, index) {
                return
                  Padding(
                      padding: const EdgeInsets.fromLTRB(10, 5, 10, 5),
                      child:Container(
                          width: _media_width / 3,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(35),
                              topRight: Radius.circular(35),
                              bottomLeft: Radius.circular(35),
                              bottomRight: Radius.circular(35),
                            ),
                            boxShadow: [
                              BoxShadow(
                                  color: Color.fromRGBO(144, 166, 187, 0.25),
                                  offset: Offset(0, 26.07855987548828),
                                  blurRadius: 143.43206787109375)
                            ],
                            color: Color.fromRGBO(
                                255, 255, 255, 0.30000001192092896),
                          ),
                          child: ListTile(
                            leading: GestureDetector(
                                onTap: null,
                                child: Padding(
                                    padding: getPadding(
                                      left: _media_width / 20,
                                      top: _media_height / 50,

                                    ),
                                    child:
                                    Container(
                                      width: _media_width / 2 ,
                                      height: _media_height / 2,

                                      child: Text(
                                        'Магазин:${snapshot.data[index]['shop_name']}\nСобытие:${snapshot.data[index]['event_name']}\nМероприятие:${snapshot.data[index]['attraction_name']}\nОтдых:${snapshot.data[index]['relax_name']}',
                                        textAlign: TextAlign.left,
                                        style: TextStyle(
                                            color: Color.fromRGBO(0, 0, 0, 1),
                                            fontFamily: 'Red Hat Display',
                                            fontSize: 10,
                                            letterSpacing:
                                            0 /*percentages not used in flutter. defaulting to zero*/,
                                            fontWeight: FontWeight.normal,
                                            height: 1),
                                      ),
                                    ))



                            ),
                            trailing:Text(
                              'Время старта:${snapshot.data[index]['event_time_start']}\nВремя окончания:${snapshot.data[index]['event_time_end']}',
                              textAlign: TextAlign.right,
                              style: TextStyle(
                                  color: Color.fromRGBO(0, 0, 0, 1),
                                  fontFamily: 'Red Hat Display',
                                  fontSize: 5,
                                  letterSpacing:
                                  0 /*percentages not used in flutter. defaulting to zero*/,
                                  fontWeight: FontWeight.normal,
                                  height: 1),
                            ) ,

                          )));
              },
            );
          }
        });
  }
}