import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:found_travell/core/utils/image_constant.dart';
import 'package:found_travell/presentation/road/widget/get_attractions_info.dart';
import 'package:found_travell/presentation/road/widget/get_events_info.dart';
import 'package:found_travell/presentation/road/widget/get_food_info.dart';
import 'package:found_travell/presentation/travell/travell_screen.dart';

import '../../core/utils/sized_utils.dart';
import '../../widgets/animation_routes.dart';

class Road extends StatefulWidget {
  @override
  RoadScreen createState() => RoadScreen();
}

class RoadScreen extends State<Road> {
  @override
  Widget build(BuildContext context) {
    final _media_width = MediaQuery.of(context).size.width;
    final _media_height = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: AppBar(
        flexibleSpace: Image(
          image: AssetImage(ImageConstant.imgHeader),
          fit: BoxFit.cover,
        ),
      ),
      body: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Container(
              height: _media_height / 1.2,
              width: _media_width,
              decoration: BoxDecoration(
                color: Color.fromRGBO(197, 167, 138, 1),
              ),
              child: Container(
                  child: Column(children: [
                Row(
                  children: [
                    Padding(
                      padding: getPadding(
                        left: _media_width / 5.5,
                        top: _media_height / 5,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width / 3,
                          height: _media_height / 10,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(5),
                              topRight: Radius.circular(5),
                              bottomLeft: Radius.circular(5),
                              bottomRight: Radius.circular(5),
                            ),
                            color: Color.fromRGBO(220, 218, 167, 1),
                          ),
                          child: SizedBox(
                              width: _media_width,
                              child: GestureDetector(
                                  onTap: () {
                                    Navigator.push(
                                        context,
                                        SlideRightRoute(
                                            widget: GetFoodInfoScreen()
                                                .build(context)));
                                  },
                                  child: Padding(
                                      padding:
                                          getPadding(top: _media_height / 20),
                                      child: Text(
                                        'Еда',
                                        textAlign: TextAlign.center,
                                        style: TextStyle(
                                            color:
                                                Color.fromRGBO(94, 93, 91, 1),
                                            fontFamily: 'Roboto',
                                            fontSize: 13,
                                            letterSpacing:
                                                0 /*percentages not used in flutter. defaulting to zero*/,
                                            fontWeight: FontWeight.normal,
                                            height: 1),
                                      ))))),
                    ),
                    Padding(
                      padding: getPadding(
                        left: _media_width / 50,
                        top: _media_height / 5,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width / 3,
                          height: _media_height / 10,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(5),
                              topRight: Radius.circular(5),
                              bottomLeft: Radius.circular(5),
                              bottomRight: Radius.circular(5),
                            ),
                            color: Color.fromRGBO(220, 218, 167, 1),
                          ),
                          child: SizedBox(
                              width: _media_width,
                              child: GestureDetector(
                                  onTap: () {
                                    Navigator.push(
                                        context,
                                        SlideRightRoute(
                                            widget: GetTravelInfoScreen()
                                                .build(context)));
                                  },
                                  child: Text(
                                    'Публичные маршруты',
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                        color: Color.fromRGBO(94, 93, 91, 1),
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        letterSpacing:
                                            0 /*percentages not used in flutter. defaulting to zero*/,
                                        fontWeight: FontWeight.normal,
                                        height: 1),
                                  )))),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Padding(
                      padding: getPadding(
                        left: _media_width / 5.5,
                        top: _media_height / 50,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width / 3,
                          height: _media_height / 10,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(5),
                              topRight: Radius.circular(5),
                              bottomLeft: Radius.circular(5),
                              bottomRight: Radius.circular(5),
                            ),
                            color: Color.fromRGBO(220, 218, 167, 1),
                          ),
                          child: SizedBox(
                              width: _media_width,
                              child: GestureDetector(
                                  onTap: () {
                                    Navigator.push(
                                        context,
                                        SlideRightRoute(
                                            widget: GetEventsInfoScreen()
                                                .build(context)));
                                  },
                                  child: Text(
                                    'Интересные места',
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                        color: Color.fromRGBO(94, 93, 91, 1),
                                        fontFamily: 'Roboto',
                                        fontSize: 13,
                                        letterSpacing:
                                            0 /*percentages not used in flutter. defaulting to zero*/,
                                        fontWeight: FontWeight.normal,
                                        height: 1),
                                  )))),
                    ),
                    Padding(
                      padding: getPadding(
                        left: _media_width / 50,
                        top: _media_height / 46,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width / 3,
                          height: _media_height / 10,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(5),
                              topRight: Radius.circular(5),
                              bottomLeft: Radius.circular(5),
                              bottomRight: Radius.circular(5),
                            ),
                            color: Color.fromRGBO(220, 218, 167, 1),
                          ),
                          child: SizedBox(
                              width: _media_width,
                              child: GestureDetector(
                                  onTap: () {
                                    Navigator.push(
                                        context,
                                        SlideRightRoute(
                                            widget: GetAttractionInfoScreen()
                                                .build(context)));
                                  },
                                  child: Text(
                                    'Развлечения',
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                        color: Color.fromRGBO(94, 93, 91, 1),
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        letterSpacing:
                                            0 /*percentages not used in flutter. defaulting to zero*/,
                                        fontWeight: FontWeight.normal,
                                        height: 1),
                                  )))),
                    ),
                  ],
                )
              ])),
            ),
          ]),
    );
  }
}
