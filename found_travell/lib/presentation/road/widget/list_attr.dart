import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:found_travell/core/api/product/ProductApi.dart';
import 'package:found_travell/presentation/road/add_attractions.dart';
import 'package:found_travell/presentation/road/add_relax.dart';

import '../../../core/utils/sized_utils.dart';
import '../../../widgets/animation_routes.dart';
import '../add_events.dart';
import '../add_food_screen.dart';


class ListAttractionsWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final _media_width = MediaQuery
        .of(context)
        .size
        .width;
    final _media_height = MediaQuery
        .of(context)
        .size
        .height;

    return FutureBuilder(
        future: ProductApi().getShops(),
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
                      child: Container(
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
                                onTap: () {
                                  Navigator.push(context,
                                      SlideRightRoute(widget:
                                      AddAttractions(snapshot.data[index])));
                                },
                                child: Padding(
                                    padding: getPadding(
                                      left: _media_width / 20,
                                      top: _media_height / 50,

                                    ),
                                    child:
                                    Container(
                                      width: _media_width / 2,
                                      height: _media_height / 10,

                                      child: Text(
                                        '${snapshot
                                            .data[index]['category_name']}',
                                        textAlign: TextAlign.left,
                                        style: TextStyle(
                                            color: Color.fromRGBO(0, 0, 0, 1),
                                            fontFamily: 'Red Hat Display',
                                            fontSize: 20,
                                            letterSpacing:
                                            0 /*percentages not used in flutter. defaulting to zero*/,
                                            fontWeight: FontWeight.normal,
                                            height: 1),
                                      ),
                                    ))


                            ),
                            trailing: Text(
                              '${snapshot.data[index]['city_name']}',
                              textAlign: TextAlign.right,
                              style: TextStyle(
                                  color: Color.fromRGBO(0, 0, 0, 1),
                                  fontFamily: 'Red Hat Display',
                                  fontSize: 20,
                                  letterSpacing:
                                  0 /*percentages not used in flutter. defaulting to zero*/,
                                  fontWeight: FontWeight.normal,
                                  height: 1),
                            ),

                          )));
              },
            );
          }
        });
  }
}