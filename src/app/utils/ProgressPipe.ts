import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "formatProgress" })
export class ProgressPipe implements PipeTransform {
    
    public transform(progress: string): string {
        if (progress === 'TO_DO') {
            return "TO DO";
        } else if (progress === 'IN_PROGRESS') {
            return "IN PROGRESS";
        } else {
            return "DONE";
        }
    }

}