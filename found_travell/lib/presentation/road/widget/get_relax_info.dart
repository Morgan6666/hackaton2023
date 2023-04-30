import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:found_travell/presentation/road/road_screen.dart';

import '../../../core/utils/image_constant.dart';
import '../../../core/utils/sized_utils.dart';
import '../../../widgets/animation_routes.dart';
import '../../../widgets/custom_image_view.dart';
import 'list_relax_widget.dart';



class GetRelax extends StatefulWidget {

  @override
  GetRelaxInfoScreen createState() => GetRelaxInfoScreen();
}

class GetRelaxInfoScreen extends State<GetRelax> {
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
                                SlideRightRoute(widget: RoadScreen().build(context)));
                          },
                          child: Image.asset(
                            ImageConstant.endButton,
                            height: _media_height / 12,
                            alignment: Alignment.center,
                          ),
                        )),
                    Padding(
                      padding: getPadding(
                        left: _media_width / 56,
                        top: _media_height / 40,
                        right: _media_width / 10,
                      ),
                      child: Image.asset(
                        ImageConstant.relax,
                        height: _media_height / 6,
                        alignment: Alignment.center,
                      ),
                    ),


                    SingleChildScrollView(
                        child:
                        Container(

                          height: _media_height / 2.5,
                          width: _media_width ,
                          child: ListRelaxWidget(),
                        )


                    )


                  ])),
            ),
          ]),
    );
  }
}