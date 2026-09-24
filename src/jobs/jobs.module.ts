import { Module } from "@nestjs/common";
import { ContractAnchoringService } from "../proofs/contract-anchoring.service";
import { WebhooksModule } from "../webhooks/webhooks.module";
import { AnchoringReconcilerService } from "./anchoring-reconciler.service";
import { AnchoringWorkerService } from "./anchoring-worker.service";
import { AttestationReconcilerService } from "./attestation-reconciler.service";
import { RetentionCleanupService } from "./retention/retention-cleanup.service";
import { RetentionJob } from "./retention/retention.job";

@Module({
  imports: [WebhooksModule],
  providers: [
    ContractAnchoringService,
    AnchoringWorkerService,
    AnchoringReconcilerService,
    AttestationReconcilerService,
    RetentionCleanupService,
    RetentionJob,
  ],
  exports: [
    AnchoringWorkerService,
    AnchoringReconcilerService,
    AttestationReconcilerService,
    RetentionCleanupService,
  ],
})
export class JobsModule {}