const data = [
            {principal: 2500, time: 1.8}, {principal: 1000, time: 5}, {principal: 3000,time: 1},{principal: 2000,time: 3}
            ];
        function interestCalculator(array){
            const interestData = [];
            let rate;
                
            array.forEach(value => {
                if (value.principal >= 2500 && value.time > 1 && value.time < 3) {
                    rate = 3;
                } else if (value.principal >= 2500 && value.time >= 3) {
                    rate = 4;
                } else if (value.principal < 2500 || value.time <= 1) {
                    rate = 2;
                } else {
                    rate = 1;
                };
                console.log(rate);
                const interest = (value.principal * rate * value.time) / 100;
                
                value.rate = rate;
                value.interest = interest;
                
                interestData.push(value);
        
            })
            console.log(interestData);
            return interestData;
        }
        const interestResult = interestCalculator(data);
       console.log(interestResult);
