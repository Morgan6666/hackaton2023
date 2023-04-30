import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:found_travell/core/utils/image_constant.dart';

import '../../core/utils/sized_utils.dart';

class RoadMap extends StatefulWidget {
  @override
  RoadMapInfoScreen createState() => RoadMapInfoScreen();
}

class RoadMapInfoScreen extends State<RoadMap> {
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
        children:[

          Container(
        height: _media_height/1.5,
        width: _media_width,
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage(
              ImageConstant.imgMain,
            ),
            fit: BoxFit.cover,
          ),
        ),
            child:
            Container(
              child:
              Column(
                  children: [
                Padding(
                  padding: getPadding(
                    left: _media_width / 23.5,
                    top: _media_height / 5,
                    right: _media_width / 50,
                  ),
                  child: Container(
                      width: _media_width,
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
                                'Выбрать начало маршрута',
                                textAlign: TextAlign.left,
                                style: TextStyle(
                                    color: Color.fromRGBO(94, 93, 91, 1),
                                    fontFamily: 'Roboto',
                                    fontSize: 20,
                                    letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
                                    fontWeight: FontWeight.normal,
                                    height: 1
                                ),
                              )))),
                ),
                    Padding(
                      padding: getPadding(
                        left: _media_width / 23.5,
                        top: _media_height / 10,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width,
                          height: _media_height / 14,
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
                                    'Публичные маршруты',
                                    textAlign: TextAlign.left,
                                    style: TextStyle(
                                        color: Color.fromRGBO(94, 93, 91, 1),
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
                                        fontWeight: FontWeight.normal,
                                        height: 1
                                    ),
                                  )))),
                    ),
                    Padding(
                      padding: getPadding(
                        left: _media_width / 23.5,
                        top: _media_height / 100,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width,
                          height: _media_height / 14,
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
                                    'Мои маршруты',
                                    textAlign: TextAlign.left,
                                    style: TextStyle(
                                        color: Color.fromRGBO(94, 93, 91, 1),
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
                                        fontWeight: FontWeight.normal,
                                        height: 1
                                    ),
                                  )))),
                    ),
                    Padding(
                      padding: getPadding(
                        left: _media_width / 23.5,
                        top: _media_height / 100,
                        right: _media_width / 50,
                      ),
                      child: Container(
                          width: _media_width,
                          height: _media_height / 14,
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
                                    'Личный кабинет',
                                    textAlign: TextAlign.left,
                                    style: TextStyle(
                                        color: Color.fromRGBO(94, 93, 91, 1),
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
                                        fontWeight: FontWeight.normal,
                                        height: 1
                                    ),
                                  )))),
                    ),


              ])),
            ),
      Padding(
        padding: getPadding(
          top: _media_height / 260
        ),
        child:
        Container(
            height: _media_height/ 4.5,
            width: _media_width,
            decoration: BoxDecoration(
              image: DecorationImage(
                image: AssetImage(
                  ImageConstant.imgFooterNew,
                ),
                fit: BoxFit.cover,
              ),
            ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.start,
          children:[
        Padding(
        padding: getPadding(
        left: _media_width / 23.5,
          top: _media_height / 100,
          right: _media_width / 50,
        ),
          child: Container(
              width: _media_width,
              height: _media_height / 14,
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
                        'Чатик с нами',
                        textAlign: TextAlign.left,
                        style: TextStyle(
                            color: Color.fromRGBO(94, 93, 91, 1),
                            fontFamily: 'Roboto',
                            fontSize: 15,
                            letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
                            fontWeight: FontWeight.normal,
                            height: 1
                        ),
                      )))))

          ],)),

      ),


        ]),
    );
  }
}
