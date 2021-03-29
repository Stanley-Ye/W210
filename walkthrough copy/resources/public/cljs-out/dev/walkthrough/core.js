// Compiled by ClojureScript 1.10.773 {}
goog.provide('walkthrough.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
goog.require('cljsjs.d3');
goog.require('ajax.core');
walkthrough.core.height = (450);
walkthrough.core.width = (540);
walkthrough.core.append_svg = (function walkthrough$core$append_svg(){
return d3.select("#slopegraph").append("svg").attr("height",walkthrough.core.height).attr("width",walkthrough.core.width);
});
walkthrough.core.append_svg.call(null);
walkthrough.core.get_forecast_BANG_ = (function walkthrough$core$get_forecast_BANG_(){
var postal_code = "91011";
return ajax.core.GET.call(null,"http://api.openweathermap.org/data/2.5/forecast",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, ["q",postal_code,"units","imperial","appid","2e481756b9d16d12cd3a8168fade8c87"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (x){
return alert(x);
})], null));
});
walkthrough.core.post_message = (function walkthrough$core$post_message(text){
return ajax.core.GET.call(null,"https://ifbioltm2g.execute-api.us-east-2.amazonaws.com/default/splitter1",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, ["data-raw",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, ["stage","test","in_txt",text,"keep_pos",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PUNCT","CCONJ"], null)], null)))], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, ["x-api-key","sT2cZuc7FN5HXXOgl0oG99tsKqs5yWBAeVIPuWf0","content-type","application/json"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (x){
return alert(x);
})], null));
});
walkthrough.core.post_message2 = (function walkthrough$core$post_message2(text){
console.log(text);

return ajax.core.POST.call(null,"https://ifbioltm2g.execute-api.us-east-2.amazonaws.com/default/splitter1",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-raw","data-raw",822066711),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, ["stage","test","in_txt",text,"keep_pos",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PUNCT","CCONJ"], null)], null)))], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, ["x-api-key","sT2cZuc7FN5HXXOgl0oG99tsKqs5yWBAeVIPuWf0","Content-Type","application/json"], null),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (x){
return alert(x);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (x){
return alert(x);
})], null));
});
walkthrough.core.handler = (function walkthrough$core$handler(response){
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(response));
});
walkthrough.core.error_handler = (function walkthrough$core$error_handler(p__16079){
var map__16080 = p__16079;
var map__16080__$1 = (((((!((map__16080 == null))))?(((((map__16080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16080):map__16080);
var status = cljs.core.get.call(null,map__16080__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__16080__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
walkthrough.core.post_message1 = (function walkthrough$core$post_message1(text){
return ajax.core.POST.call(null,"/send-message",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello World",new cljs.core.Keyword(null,"user","user",1532431356),"Bob"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),walkthrough.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),walkthrough.core.error_handler], null));
});
walkthrough.core.post_message12 = (function walkthrough$core$post_message12(text){
return ajax.core.ajax_request.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"https://ifbioltm2g.execute-api.us-east-2.amazonaws.com/default/splitter1",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello World",new cljs.core.Keyword(null,"user","user",1532431356),"Bob"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),walkthrough.core.handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
walkthrough.core.button_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),"url(./parchment.png)",new cljs.core.Keyword(null,"border","border",1444987323),"3px solid black",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"3px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px"], null);
walkthrough.core.sentences = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
walkthrough.core.blurred_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"transparent",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"0 0 5px rgba(0,0,0,0.5)"], null);
walkthrough.core.default_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),null], null);
walkthrough.core.blur_style = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.default_style], null));
walkthrough.core.blurred_QMARK_ = (function walkthrough$core$blurred_QMARK_(){
return cljs.core._EQ_.call(null,"transparent",new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,walkthrough.core.blur_style))));
});
walkthrough.core.blur_button = (function walkthrough$core$blur_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),((walkthrough.core.blurred_QMARK_.call(null))?"Reveal Text":"Hide Text"),new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(walkthrough.core.blurred_QMARK_.call(null)){
return cljs.core.swap_BANG_.call(null,walkthrough.core.blur_style,cljs.core.assoc,new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.default_style);
} else {
return cljs.core.swap_BANG_.call(null,walkthrough.core.blur_style,cljs.core.assoc,new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.blurred_style);
}
})], null)], null);
});
walkthrough.core.recreations = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
walkthrough.core.gen_sentences = (function walkthrough$core$gen_sentences(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"border","border",1444987323),"3px solid black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function walkthrough$core$gen_sentences_$_iter__16083(s__16084){
return (new cljs.core.LazySeq(null,(function (){
var s__16084__$1 = s__16084;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16084__$1);
if(temp__5720__auto__){
var s__16084__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16084__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__16084__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__16086 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__16085 = (0);
while(true){
if((i__16085 < size__4528__auto__)){
var col = cljs.core._nth.call(null,c__4527__auto__,i__16085);
cljs.core.chunk_append.call(null,b__16086,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col], null));

var G__16091 = (i__16085 + (1));
i__16085 = G__16091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16086),walkthrough$core$gen_sentences_$_iter__16083.call(null,cljs.core.chunk_rest.call(null,s__16084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16086),null);
}
} else {
var col = cljs.core.first.call(null,s__16084__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col], null),walkthrough$core$gen_sentences_$_iter__16083.call(null,cljs.core.rest.call(null,s__16084__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Original Text","Notes","Recreation"], null));
})()], null),cljs.core.doall.call(null,(function (){var counter = reagent.core.atom.call(null,(0));
var iter__4529__auto__ = (function walkthrough$core$gen_sentences_$_iter__16087(s__16088){
return (new cljs.core.LazySeq(null,(function (){
var s__16088__$1 = s__16088;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16088__$1);
if(temp__5720__auto__){
var s__16088__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16088__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__16088__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__16090 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__16089 = (0);
while(true){
if((i__16089 < size__4528__auto__)){
var sentence = cljs.core._nth.call(null,c__4527__auto__,i__16089);
cljs.core.chunk_append.call(null,b__16090,(cljs.core.truth_(cljs.core.some.call(null,((function (i__16089,sentence,c__4527__auto__,size__4528__auto__,b__16090,s__16088__$2,temp__5720__auto__,counter){
return (function (p1__16082_SHARP_){
return (!(cljs.core._EQ_.call(null," ",p1__16082_SHARP_)));
});})(i__16089,sentence,c__4527__auto__,size__4528__auto__,b__16090,s__16088__$2,temp__5720__auto__,counter))
,sentence))?(function (){var index = cljs.core.deref.call(null,counter);
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

cljs.core.swap_BANG_.call(null,walkthrough.core.recreations,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"original-text","original-text",744448452),sentence,new cljs.core.Keyword(null,"recreation","recreation",-1240476816),""], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.deref.call(null,walkthrough.core.blur_style),sentence], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__16089,index,sentence,c__4527__auto__,size__4528__auto__,b__16090,s__16088__$2,temp__5720__auto__,counter){
return (function (e){
return cljs.core.swap_BANG_.call(null,walkthrough.core.recreations,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"recreation","recreation",-1240476816)], null),e.target.value);
});})(i__16089,index,sentence,c__4527__auto__,size__4528__auto__,b__16090,s__16088__$2,temp__5720__auto__,counter))
], null)], null)], null)], null);
})():null));

var G__16092 = (i__16089 + (1));
i__16089 = G__16092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16090),walkthrough$core$gen_sentences_$_iter__16087.call(null,cljs.core.chunk_rest.call(null,s__16088__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16090),null);
}
} else {
var sentence = cljs.core.first.call(null,s__16088__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.some.call(null,((function (sentence,s__16088__$2,temp__5720__auto__,counter){
return (function (p1__16082_SHARP_){
return (!(cljs.core._EQ_.call(null," ",p1__16082_SHARP_)));
});})(sentence,s__16088__$2,temp__5720__auto__,counter))
,sentence))?(function (){var index = cljs.core.deref.call(null,counter);
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

cljs.core.swap_BANG_.call(null,walkthrough.core.recreations,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"original-text","original-text",744448452),sentence,new cljs.core.Keyword(null,"recreation","recreation",-1240476816),""], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.deref.call(null,walkthrough.core.blur_style),sentence], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (index,sentence,s__16088__$2,temp__5720__auto__,counter){
return (function (e){
return cljs.core.swap_BANG_.call(null,walkthrough.core.recreations,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"recreation","recreation",-1240476816)], null),e.target.value);
});})(index,sentence,s__16088__$2,temp__5720__auto__,counter))
], null)], null)], null)], null);
})():null),walkthrough$core$gen_sentences_$_iter__16087.call(null,cljs.core.rest.call(null,s__16088__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.deref.call(null,walkthrough.core.sentences));
})())], null);
});
walkthrough.core.input_text = reagent.core.atom.call(null,"");
walkthrough.core.text_submission_box = (function walkthrough$core$text_submission_box(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,walkthrough.core.input_text),new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,walkthrough.core.input_text,e.target.value);
})], null)], null);
});
walkthrough.core.text_submission_button = (function walkthrough$core$text_submission_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Add Text",new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
cljs.core.reset_BANG_.call(null,walkthrough.core.sentences,clojure.string.split.call(null,cljs.core.deref.call(null,walkthrough.core.input_text),/\.|!/));

return walkthrough.core.post_message.call(null,cljs.core.deref.call(null,walkthrough.core.input_text));
})], null)], null);
});
walkthrough.core.reset_text_button = (function walkthrough$core$reset_text_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Reset Text",new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
cljs.core.reset_BANG_.call(null,walkthrough.core.input_text,"");

cljs.core.reset_BANG_.call(null,walkthrough.core.sentences,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,walkthrough.core.recreations,cljs.core.PersistentVector.EMPTY);
})], null)], null);
});
walkthrough.core.get_json_button = (function walkthrough$core$get_json_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Get Json",new cljs.core.Keyword(null,"style","style",-496642736),walkthrough.core.button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return console.log(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,walkthrough.core.recreations)));
})], null)], null);
});
walkthrough.core.gen_html = (function walkthrough$core$gen_html(){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Courier"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"EssAI"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Please enter the target text into the box below."], null),walkthrough.core.text_submission_box.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),walkthrough.core.text_submission_button.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),walkthrough.core.blur_button.call(null),walkthrough.core.reset_text_button.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),walkthrough.core.get_json_button.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),walkthrough.core.gen_sentences.call(null)], null);
});
walkthrough.core.get_app_element = (function walkthrough$core$get_app_element(){
return goog.dom.getElement("app");
});
walkthrough.core.mount = (function walkthrough$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [walkthrough.core.gen_html], null),el);
});
walkthrough.core.mount_app_element = (function walkthrough$core$mount_app_element(){
var temp__5720__auto__ = walkthrough.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return walkthrough.core.mount.call(null,el);
} else {
return null;
}
});
walkthrough.core.mount_app_element.call(null);
walkthrough.core.on_reload = (function walkthrough$core$on_reload(){
return walkthrough.core.mount_app_element.call(null);
});
walkthrough.core.multiply = (function walkthrough$core$multiply(a,b){
return (a * b);
});

//# sourceMappingURL=core.js.map
