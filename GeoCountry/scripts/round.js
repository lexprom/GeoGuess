function rminitialize() {

    var currentLLArr = locLatLongs.replace(/[\])}[{(]/g,'').split(',');
    var GuessLLArr = guessLatLongs.replace(/[\])}[{(]/g,'').replace(/\s/g, "").split(',');
    var actualLtLng = new google.maps.LatLng(currentLLArr[0],currentLLArr[1]);
    var guessLtLng = new google.maps.LatLng(GuessLLArr[0],GuessLLArr[1]);

    var mapOptions = {
      zoom: 2,
      center: actualLtLng,
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map($('#roundMap')[0], mapOptions);

    var image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQcSURBVGhD7VjbSxRRHDaIKOgP6KEbpLPbdrWCyLLLW711gaCif6GHqIcIMukCvWRREevuumGEtF1mVjezstbU9EG3Lc3VQspKS7toakFBdfr9xt+czhmnzbXZdYP94MPx/C7fd86cOTNsVgYZZGAfSpzly7wOtdCraGH42+5R1M9IvMYxj0M9XJyjLqX09ADLYpN8OdoWMNrhdWhsjIxhDbWYOPgd6lyPojVYGBwTPQ6tzu0qn03tUgufcn0NGHhnZSxB9nmU4GpqmxrAPs6Hlf9mYWacVL+6HWoetU8u9G1jz8pLxJ4l89RZJJMc4AMLq1VvFr+3t4ldXFkpjcUj5mKNeRyfCZJKDjzO4FazaM3+CBvu+cJeVHWzkgXlUsyKmIO5WBPe1zw6R1E3k5z90M9zQUzdUsMGXw7rZpB1h6KyGQvWHnjI87FW3Rw258RIzl6MvKQkIdZ1p4eb6QyN/Q48rxy5A0i8G+YcX861JSRrH2D1C0WR4PZabuJD2wArXR6STMTjpbybbOD5EK8Pbr8v5yhaAcnaB3jT3hNFmk7FuIGGI48lA/7FFSxyOsbetw7obIZc/yL57kTOtPN67CXG4GGuJln7AKvyVBQRt8+VjdWSgWYwb8QM4iTEnIodv+/gi9s9Ugw/S0jWPkDTIVGkL/KBG/AvqZAM4KobMYPvWvulnLL1t3ist+m9FEMtkrUP5gn0Rj9yA+YJoFkjZnDUBPKreAwXQ4wlZwIOtU0U6br7lhu4uunvW6ipSN5C4iHQVf1GisG74AnJ2geYQLEoEj3fwQ1YPcS453HVkfiQ+hfKD3Hzyd+TxAdajKEWydoHOEa3iSKhncIxGvuU0DFauuIG6382yOuxl5yjbiNZ++CfE54KKzNoiPjmB9nr2l5uYqwvMq9TYx2BLl73qqZXHzPiqIFaJGsv4Ch1i2ZCu+rYcPeIEeSDwkc89ifWHYzyfKzF41TKAQ2Ssx++bM0FK/RTFGw81qKb6a7vYxdy5dPIipiDuVjTeLRFimFv1CC55ABEQqIo3v7G4y2sbMNtyUw8Yi7WiFsHib1JJnnwZmu55rtgB/We0Jtkkgs4JQJWJv6NaoDaJx9updwJH1zfrY0kTuyFPal9agBvyxIrM+Mi9KK2qYPfFZoBKzdgaSgBYg/sRW1TCxDfY2UqEWIPapd6FKwLTwYTUbOpBBjFHtRuYqD/yDWOYxVrsJbaTCxgG5yzMhmPWEPlE4+zrsB0MNVpNhmHnVhD5ekBb462Foz9MBm14g/MpbL0AmyLIgvDEjGH0tMPl2denmb+9UIixDCH0tMTXuf1VbDKoz4z9DGIUVp6AwyfME8Axyic/gi4AlM8ihoxzOM1jlH4/wAYd8CeH9YJ1zT8fwG+Mncj6d8MMsjAdmRl/QK2f+9y5oknawAAAABJRU5ErkJggg==';
    var actualMarker = new google.maps.Marker({
        position: actualLtLng,
        icon : image,
        title:"Actual Location",
    });

    var guessMarker = new google.maps.Marker({
        position: guessLtLng,
        title:"Your Guess",
    });

    actualMarker.setMap(map);
    guessMarker.setMap(map);

};