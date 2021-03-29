(ns ^:figwheel-hooks walkthrough.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [clojure.string :as str]
   [cljsjs.d3]
   [ajax.core :as ajax]
   
   ))

(def height 450)
(def width 540)


(defn append-svg []
  (-> js/d3
      (.select "#slopegraph")
      (.append "svg")
      (.attr "height" height)
      (.attr "width" width)))


(append-svg)

(defn get-forecast! []                                     
  (let [postal-code "91011"]
    (ajax/GET "http://api.openweathermap.org/data/2.5/forecast"
      {:params {"q" postal-code
                "units" "imperial" ;; alternatively, use "metric"
                "appid" "2e481756b9d16d12cd3a8168fade8c87"}
       :handler (fn [x]
                  (js/alert x))})))

(defn post-message [text]
  
  (ajax/GET
   
   "https://ifbioltm2g.execute-api.us-east-2.amazonaws.com/default/splitter1"
   
   {:params {"data-raw"
             (str (clj->js {"stage" "test"
                            "in_txt" text
                            "keep_pos" ["PUNCT" "CCONJ"]}))}

    :headers {
              "x-api-key"      "sT2cZuc7FN5HXXOgl0oG99tsKqs5yWBAeVIPuWf0"
              
              ;;  "Access-Control-Allow-Origin"     "*"
              
              ;; "Origin"     "http://localhost:9500/"
              
              "content-type"    "application/json"
              
              ;; "Access-Control-Allow-Methods"   "GET, POST, OPTIONS, PUT, DELETE"
              
              ;;   "Access-Control-Allow-Headers" "Content-Type, Authorization"
              
              ;; "Access-Control-Allow-Credentials" "true"
              
              ;; "x-amz-apigw-id" "c60bMH3OCYcFk9A="
              
              ;; "x-amzn-RequestId" "13c6355f-495b-45ae-b6a7-e62af93584f2"
              
              ;;    "data-raw" "{}"
              }
    
    :handler (fn [x]
               (js/alert x))}))

;;(get-forecast!)

(comment )

(defn post-message2 [text]
  
  (js/console.log text)
  
  (ajax/POST
   
   "https://ifbioltm2g.execute-api.us-east-2.amazonaws.com/default/splitter1"
   
   {:params
             {
            
              :data-raw (str (clj->js
                              {"stage" "test"
                               "in_txt" text
                               "keep_pos" ["PUNCT" "CCONJ"]}))}

    :headers {
              "x-api-key"      "sT2cZuc7FN5HXXOgl0oG99tsKqs5yWBAeVIPuWf0"
              
            ;;  "Access-Control-Allow-Origin"     "*"
              
           ;; "Origin"     "http://localhost:9500/"
              
              "Content-Type"    "application/json"
              
             ;; "Access-Control-Allow-Methods"   "GET, POST, OPTIONS, PUT, DELETE"
              
              ;;   "Access-Control-Allow-Headers" "Content-Type, Authorization"
              
             ;; "Access-Control-Allow-Credentials" "true"
              
             ;; "x-amz-apigw-id" "c60bMH3OCYcFk9A="
              
              ;; "x-amzn-RequestId" "13c6355f-495b-45ae-b6a7-e62af93584f2"
              
          ;;    "data-raw" "{}"
              }

   ;; :with-credentials true
    :content-type "application/json"
    :handler (fn [x]
               (js/alert x))
    
    :error-handler (fn [x]
                     (js/alert x))}))




(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn post-message1 [text]
  (ajax/POST "/send-message"
        {:params {:message "Hello World"
                  :user    "Bob"}
         :handler handler
         :error-handler error-handler}))

(defn post-message12 [text]
  (ajax/ajax-request
   {:uri "https://ifbioltm2g.execute-api.us-east-2.amazonaws.com/default/splitter1"
    :method :post
    :params {:message "Hello World"
             :user    "Bob"}
    :handler handler
    :format (ajax/json-request-format)
    :response-format (ajax/json-response-format {:keywords? true})}))

;;===================================
;; To-Do
;; - Input button
;; - Sentence Parser
;; - Reset Button
;; - Parchment Background
;; - Add borders
;; - Text-Wrapped Boxes


(def button-style
  {:background-image  "url(./parchment.png)"
   :border  "3px solid black"
   :font-weight "bold"
   :margin-right "3px"
   :margin-top "3px"})

(def sentences
  (atom []))

(def blurred-style
  {:color  "transparent"
   :text-shadow "0 0 5px rgba(0,0,0,0.5)"})

(def default-style
  {:color "black"
   :text-shadow nil})

(def blur-style
  (atom {:style default-style}))

(defn blurred? []
  (->> blur-style
       deref
       :style
       :color
       (=  "transparent")))

(defn blur-button []
  [:input {:type "button"
           :value (if (blurred?) "Reveal Text" "Hide Text")
           :style button-style
           :on-click (fn []
                       (if (blurred?)
                         (swap! blur-style assoc :style default-style)
                         (swap! blur-style assoc :style blurred-style)))}])



(def recreations (atom []))

(defn gen-sentences []
  
  [:table
   {:style {:width "50%"
            :border "3px solid black" }}
   
   [:tr (for [col ["Original Text" "Notes" "Recreation"]]
          [:th col])]
   
   (doall
    
    (let [counter (atom 0)]
      
      (for [sentence @sentences]
        
        (when (some #(not (= " " %)) sentence)
          
          (let [index @counter]
            
            (swap! counter inc)
            (swap! recreations conj {:index index
                                     :original-text sentence
                                     :recreation ""})
            
            [:tr {:style button-style}
             [:td @blur-style sentence]
             [:td [:textarea {:style button-style}]]
             [:td [:textarea {:style button-style
                              :on-change (fn [e]
                                           (swap! recreations
                                                  assoc-in
                                                  [index :recreation]
                                                  (-> e .-target .-value)))}]]])))))])

(def input-text (atom ""))

(defn text-submission-box []
  [:textarea
   {:value @input-text
    :style button-style
    :on-change (fn [e]
                 (reset! input-text (-> e
                                        .-target
                                        .-value)))}])

(defn text-submission-button []
  [:input
   {:type "button"
    :value "Add Text"
    :style button-style
    :on-click (fn [e]
                (reset! sentences
                        (str/split @input-text #"\.|!"))
                (post-message @input-text))}])



(defn reset-text-button []
  [:input {:type "button"
           :value "Reset Text"
           :style button-style
           :on-click (fn [e]
                       (reset! input-text "")
                       (reset! sentences [])
                       (reset! recreations []))}])

(defn get-json-button []
  [:input {:type "button"
           :value "Get Json"
           :style button-style
           :on-click (fn [e]
                       (->> recreations
                            deref
                            clj->js
                            js/console.log))}])


(defn gen-html []
  [:div {:style {:margin-left "10px" :font-family "Courier"}}
   [:h1 "EssAI"]
   [:p "Please enter the target text into the box below."]
   (text-submission-box)
   [:br] 
   (text-submission-button)
   [:br] [:br]
   (blur-button)
   (reset-text-button)
   [:br] [:br]
   (get-json-button)
   [:br] [:br]
   (gen-sentences)])



;;================================================================================
;; Mounting

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (rdom/render [gen-html] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element))

(defn multiply [a b] (* a b))
