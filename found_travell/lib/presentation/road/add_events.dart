

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:found_travell/presentation/road/widget/get_attractions_info.dart';
import 'package:found_travell/presentation/road/widget/get_events_info.dart';

import '../../core/utils/image_constant.dart';
import '../../core/utils/sized_utils.dart';
import '../../widgets/animation_routes.dart';

class AddEvent extends StatefulWidget {
  final Map data;

  AddEvent(this.data);
  @override
  AddEventScreen createState() => AddEventScreen();
}

class AddEventScreen extends State<AddEvent> {
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
                  width: _media_width / 1.2,
                  height: _media_height / 15,
                  child: Column(children: [
                    Padding(
                        padding: getPadding(
                          left: _media_width / 56,
                          top: _media_height / 16,
                          right: _media_width / 1.5,
                        ),
                        child: GestureDetector(
                          onTap: () {
                            Navigator.push(context,
                                SlideRightRoute(widget: GetEventsInfoScreen().build(context)));
                          },
                          child: Image.asset(
                            ImageConstant.endButton,
                            height: _media_height / 12,
                            alignment: Alignment.center,
                          ),
                        )),



                    Padding(
                      padding: getPadding(
                        left: _media_width / 20,
                        top: _media_height / 100,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width / 1.2,
                          height: _media_height / 15,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(5),
                              topRight: Radius.circular(5),
                              bottomLeft: Radius.circular(5),
                              bottomRight: Radius.circular(5),
                            ),
                            color: Color.fromRGBO(220, 218, 167, 1),
                          ),
                          child:
                          Padding(
                              padding: getPadding(
                                  top: _media_height / 36
                              ),
                              child: Text(
                                "Название места:${this.widget.data['event_name']}",
                                textAlign: TextAlign.left,
                                style:
                                TextStyle(
                                    color: Color.fromRGBO(163, 163, 163, 1),
                                    fontFamily: 'Red Hat Display',
                                    fontSize: 18,
                                    letterSpacing:
                                    0 /*percentages not used in flutter. defaulting to zero*/,
                                    fontWeight: FontWeight.normal,
                                    height: 1),
                              ))),
                    ),
                    Padding(
                      padding: getPadding(
                        left: _media_width / 20,
                        top: _media_height / 70,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width / 1.2,
                          height: _media_height / 15,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(5),
                              topRight: Radius.circular(5),
                              bottomLeft: Radius.circular(5),
                              bottomRight: Radius.circular(5),
                            ),
                            color: Color.fromRGBO(220, 218, 167, 1),
                          ),
                          child:
                          Padding(
                              padding: getPadding(
                                  top: _media_height / 36
                              ),
                              child: Text(
                                "Описание:${this.widget.data['description']}",
                                textAlign: TextAlign.left,
                                style: TextStyle(
                                    color: Color.fromRGBO(163, 163, 163, 1),
                                    fontFamily: 'Red Hat Display',
                                    fontSize: 18,
                                    letterSpacing:
                                    0 /*percentages not used in flutter. defaulting to zero*/,
                                    fontWeight: FontWeight.normal,
                                    height: 1),
                              ))),
                    ),
                    Padding(
                      padding: getPadding(
                        left: _media_width / 20,
                        top: _media_height /70,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width / 1.2,
                          height: _media_height / 15,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(5),
                              topRight: Radius.circular(5),
                              bottomLeft: Radius.circular(5),
                              bottomRight: Radius.circular(5),
                            ),
                            color: Color.fromRGBO(220, 218, 167, 1),
                          ),
                          child:
                          Padding(
                              padding: getPadding(
                                  top: _media_height / 36
                              ),
                              child: Text(
                                "Название категории:${this.widget.data['category_name']}",
                                textAlign: TextAlign.left,
                                style: TextStyle(
                                    color: Color.fromRGBO(163, 163, 163, 1),
                                    fontFamily: 'Red Hat Display',
                                    fontSize: 18,
                                    letterSpacing:
                                    0 /*percentages not used in flutter. defaulting to zero*/,
                                    fontWeight: FontWeight.normal,
                                    height: 1),
                              ))),
                    ),
                    Padding(
                      padding: getPadding(
                        left: _media_width / 20,
                        top: _media_height / 70,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width / 1.2,
                          height: _media_height / 15,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(5),
                              topRight: Radius.circular(5),
                              bottomLeft: Radius.circular(5),
                              bottomRight: Radius.circular(5),
                            ),
                            color: Color.fromRGBO(220, 218, 167, 1),
                          ),
                          child: Padding(
                              padding: getPadding(
                                  top: _media_height / 36
                              ),
                              child:Text(
                                "Время начала:${this.widget.data['time_start']}",
                                textAlign: TextAlign.left,
                                style: TextStyle(
                                    color: Color.fromRGBO(163, 163, 163, 1),
                                    fontFamily: 'Red Hat Display',
                                    fontSize: 18,
                                    letterSpacing:
                                    0 /*percentages not used in flutter. defaulting to zero*/,
                                    fontWeight: FontWeight.normal,
                                    height: 1),
                              ))),
                    ),
                    Padding(
                      padding: getPadding(
                        left: _media_width / 20,
                        top: _media_height / 70,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width / 1.2,
                          height: _media_height / 15,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(5),
                              topRight: Radius.circular(5),
                              bottomLeft: Radius.circular(5),
                              bottomRight: Radius.circular(5),
                            ),
                            color: Color.fromRGBO(220, 218, 167, 1),
                          ),
                          child:
                          Padding(
                              padding: getPadding(
                                  top: _media_height / 36
                              ),
                              child:Text(
                                "Время окончания:${this.widget.data['time_end']}",
                                textAlign: TextAlign.left,
                                style: TextStyle(
                                    color: Color.fromRGBO(163, 163, 163, 1),
                                    fontFamily: 'Red Hat Display',
                                    fontSize: 18,
                                    letterSpacing:
                                    0 /*percentages not used in flutter. defaulting to zero*/,
                                    fontWeight: FontWeight.normal,
                                    height: 1),
                              ))),
                    ),
                    Padding(
                        padding: getPadding(
                          left: _media_width / 20,
                          top: _media_height / 70,
                          right: _media_width / 50,
                        ),
                        child: Container(
                            width: _media_width / 1.2,
                            height: _media_height / 15,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.only(
                                topLeft: Radius.circular(5),
                                topRight: Radius.circular(5),
                                bottomLeft: Radius.circular(5),
                                bottomRight: Radius.circular(5),
                              ),
                              color: Color.fromRGBO(220, 218, 167, 1),
                            ),
                            child:
                            Padding(
                                padding: getPadding(
                                    top: _media_height / 36
                                ),
                                child:Text(
                                  "Город:${this.widget.data['city_name']}",
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                      color: Color.fromRGBO(163, 163, 163, 1),
                                      fontFamily: 'Red Hat Display',
                                      fontSize: 18,
                                      letterSpacing:
                                      0 /*percentages not used in flutter. defaulting to zero*/,
                                      fontWeight: FontWeight.normal,
                                      height: 1),
                                )))),
                    Padding(
                      padding: getPadding(
                        left: _media_width / 15,
                        top: _media_height / 10,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width / 1.5,
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
                              child: FloatingActionButton(
                                  isExtended: false,
                                  elevation: 0,
                                  onPressed: null,
                                  backgroundColor: Colors.transparent,
                                  child: Text(
                                    'Добавить',
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
                  ])),
            ),
          ]),
    );
  }
}
