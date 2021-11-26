if ($('*').is('#map') === true) {
	ymaps.ready(initMap);
	var Map,
		Collection;

	function initMap() {
            var geoPoints = $('#addresses .mapOptions__addresses_a');
                    let firstCoordinate = $('#init-map-subdomain').val();
                    toAddr = firstCoordinate.toString().split(',');
                    var tolatitude = parseFloat(toAddr[1]),
                            tolongitude = parseFloat(toAddr[0]);

            Map = new ymaps.Map(
                'map',
                {
                    center: [tolatitude, tolongitude],
                    zoom: 12,
                    behaviors: [/*'scrollZoom'*/, 'drag', 'dblClickZoom', 'multiTouch']
                },
                {
                    maxAnimationZoomDifference: 15,
                    minZoom: 1
                }
            );
                    Map.controls.add('zoomControl', {left: '5px', top: '5px'});

            var minL = minB = 999999;
            var maxR = maxT = -999999;
            $.each(geoPoints, function (index, val) {
                var cordinates = $(this).data('coordinate');
                toAddr = cordinates.toString().split(',');
                var item = {
                    lat: toAddr[1],
                    long: toAddr[0],
                }

                minL = minL >=  item.lat ? item.lat : minL;
                minB = minB >=  item.long ? item.long : minB;
                maxR = maxR <=  item.lat ? item.lat : maxR;
                maxT = maxT <=  item.long ? item.long : maxT;

                Map.geoObjects.add(
                    new ymaps.Placemark(
                        [item.lat, item.long],
                        {
                            balloonContentHeader: $(this).data('name'),
                            balloonContentFooter: $(this).data('content')
                        }
                    )
                );
            });
            
            var _checkZoomRange = false;
            if (window.location.href.split('.').length > 2) {
                _checkZoomRange = true;
            } 
            Map.setBounds([[minL, minB], [maxR, maxT]], {
                checkZoomRange: _checkZoomRange,
            });
            if (!_checkZoomRange) {
                Map.setZoom(3);
            }
	}
	
	$(function () {
		$(document).on('click', 'a.mapOptions__addresses_a', function () {
			$(".mapOptions__userAddress").show(250);
			$("a.mapOptions__addresses_a").removeClass("m-active");
			$(this).addClass("m-active");
			var coordinate = $(this).data('coordinate');

			setGeoObject(coordinate, '');
			return false;
		});
	});
	
	function setGeoObject(coords, address) {
		if (coords != '') {
			var address = $('#addresses').find('a.m-active').data('address'),
				name = $('#addresses').find('a.m-active').data('name'),
				content = $('#addresses').find('a.m-active').data('content');
			coords = coords.toString().split(',');
			var latitude = parseFloat(coords[1]),
				longitude = parseFloat(coords[0]);
		} else {
			var name = '',
				content = '';
			ymaps.geocode(address, {results: 1, kind: 'house'}).then
			(
				function (res) {
					var coords = res.geoObjects.get(0).geometry.getCoordinates();
					coords = coords.toString().split(',');
					var latitude = parseFloat(coords[0]),
						longitude = parseFloat(coords[1]);
				}
			);

		}

		var PlaceMark = new ymaps.Placemark([latitude, longitude],
			{
				hintContent: content ? name : address,
				balloonContentHeader: content ? name : address,
				balloonContentFooter: content ? address + '<br>' + content : 'Точка отправления'
			}
		);

		Map.panTo([latitude, longitude],
			{
				duration: 400,
				flying: true,
				checkZoomRange: false,
				callback: function (state) {
					if (state == null) {
						Map.zoomRange.get([latitude, longitude]).then(
							function (zoomRange, err) {
								if (!err) {
									Map.setZoom(zoomRange[1] - 1);
								}
							}
						);
						Collection.add(PlaceMark);
						Map.geoObjects.add(Collection);
						PlaceMark.balloon.open();
					}
				}
			}
		);
	}
	
}
